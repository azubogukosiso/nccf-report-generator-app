import type { Dispatch } from "react";

// DEFINE THE SHAPE OF OUR AUTH STATE
export interface AuthState {
  unit: { token: string; unitName: string; unitId: number } | null;
}

// DEFINE THE POSSIBLE ACTION TYPES
export type AuthAction =
  | {
      type: "LOGIN";
      payload: { token: string; unitName: string; unitId: number };
    }
  | { type: "LOGOUT" };

// DEFINE THE CONTEXT VALUE TYPE
export interface AuthContextType {
  unit: { token: string; unitName: string; unitId: number } | null;
  dispatch: Dispatch<AuthAction>;
}
