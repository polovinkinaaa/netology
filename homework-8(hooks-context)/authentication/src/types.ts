import type { Dispatch, SetStateAction } from "react";

export type Profile = {
  id: string;
  login: string;
  name: string;
  avatar: string;
};
export type AuthContextValue = {
  token: string | null;
  profile: Profile | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  setProfile: Dispatch<SetStateAction<Profile | null>>;
};
