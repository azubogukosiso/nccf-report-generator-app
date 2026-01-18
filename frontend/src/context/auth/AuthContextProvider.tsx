import { useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext, authReducer } from "./AuthContext";
import type { AuthContextType } from "./types";

// PROPS INTERFACE FOR THE PROVIDER COMPONENT
interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    unit: null,
  });

  useEffect(() => {
    async function fetchData() {
      const unit = localStorage.getItem("unit");

      const parsedUnit = await JSON.parse(unit as string);

      if (parsedUnit) {
        dispatch({ type: "LOGIN", payload: parsedUnit });
      }
    }

    fetchData();
  }, []);

  const contextValue: AuthContextType = {
    unit: state.unit,
    dispatch,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
