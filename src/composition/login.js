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

    loginStore.login(data)
      .then((response) => {
        openToast("Logged with sucess", "success", "top");

        redirectTo(
          response.data.userType,
          { anyCustomParams: response.customParams },
          true,
        );

        return Promise.resolve();
      })
      .catch(() => {
        openToast("Something was wrong on login", "danger", "top");
        Promise.reject();
      });
  }

  return {
    userLogin,
    openToast,
    redirectTo,
  };
}
