import { useLoginStore } from "../store/login";
import redirectToHome from "./redirectToHome";
import useToast from "./useToast";

export default function () {
  const { openToast } = useToast();
  const { redirectTo } = redirectToHome();
  const loginStore = useLoginStore();

  async function userLogin(userCredentials) {
    const data = {
      email: userCredentials.email,
      password: userCredentials.password,
    };

    loginStore
      .login(data)
      .then((response) => {
        openToast("Logged with success", "success", "top");

        redirectTo(response.data.userType, {
          anyCustomParams: response.customParams,
        });

        return Promise.resolve();
      })
      .catch((ex) => {
        openToast("Something was wrong on login", "danger", "top");
        Promise.reject(ex);
      });
  }

  return {
    userLogin,
    openToast,
    redirectTo,
  };
}
