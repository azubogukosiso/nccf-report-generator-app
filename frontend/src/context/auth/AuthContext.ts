import { createContext } from "react";
import type { AuthState, AuthAction, AuthContextType } from "./types";

// CREATE CONTEXT WITH PROPER TYPING (INITIALLY UNDEFINED)
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// REDUCER FUNCTION WITH PROPER TYPING
export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { unit: action.payload };
    case "LOGOUT":
      return { unit: null };
    default:
      return state;
  }
};
