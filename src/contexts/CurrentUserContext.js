// External
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

// Internal
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";
import { useRouter } from "next/router";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const router = useRouter();

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get("dj-rest-auth/user/");
            setCurrentUser(data);
        } catch (err) {
            // console.log(err);
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                if (shouldRefreshToken()) {
                    try {
                        await axiosRes.post("/dj-rest-auth/token/refresh/");
                    } catch (error) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                router.push("/login");
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                        return config;
                    }
                }
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post("/dj-rest-auth/toke/refresh/");
                    } catch (err) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                router.push("/login");
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                    }
                    return axios(err.config);
                }
                return Promise.reject(err);
            }
        );
    }, [router]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};
