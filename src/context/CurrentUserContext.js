// External
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

// Internal
import { axiosRes } from "../api/axiosDefaults";

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(setCurrentUserContext);
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const history = useHistory;

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
        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post("/dj-rest-auth/toke/refresh/");
                    } catch (err) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                history.push("/login");
                            }
                            return null;
                        });
                    }
                    return axios(err.config);
                }
                return Promise.reject(err);
            }
        );
    });

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <setCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </setCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};
