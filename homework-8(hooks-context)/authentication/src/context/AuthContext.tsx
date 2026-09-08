import { createContext } from "react";
import type { AuthContextValue } from "../types.ts";

const AuthContext = createContext<AuthContextValue>({
  token: null,
  profile: null,
  setToken: () => {},
  setProfile: () => {},
});
export default AuthContext;
