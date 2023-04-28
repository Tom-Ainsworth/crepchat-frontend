import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useRedirect = (userAuthStatus) => {
	const router = useRouter();

	useEffect(() => {
		const handleMount = async () => {
			try {
				await axios.post("/dj-rest-auth/token/refresh/");
				// if user is logged in, the code below will run
				if (userAuthStatus === "loggedIn") {
					router.push("/");
				}
			} catch (err) {
				// if user is not logged it, the code below will run
				if (userAuthStatus === "loggedOut") {
					router.push("/");
				}
			}
		};

		handleMount();
	}, [router, userAuthStatus]);
};
