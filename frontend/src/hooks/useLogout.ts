import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    localStorage.removeItem("unit");
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
