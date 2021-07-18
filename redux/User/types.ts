// STATE

import { GetUserQuery } from "../../business-domain/graphql";

export type UserState = {
  authenticated: boolean;
  token: string;
  userId: number | undefined;
  user: GetUserQuery["getUser"] | undefined;
  loading: boolean;
  theme: "light" | "dark";
};

// ACTIONS

export enum UserActionConstants {
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_LOGGED_OUT = "USER_LOGGED_OUT",
  APP_FETCHED_USER = "APP_FETCHED_USER",
  SET_LOADING = "SET_LOADING",
  SET_THEME = "SET_THEME",
}

export interface FetchUser {
  type: UserActionConstants.APP_FETCHED_USER;
  payload: UserState["user"];
}

export interface LogoutUser {
  type: UserActionConstants.USER_LOGGED_OUT;
  payload: undefined;
}
export interface LoginUser {
  type: UserActionConstants.USER_LOGGED_IN;
  payload: UserState["token"];
}

export interface SetLoading {
  type: UserActionConstants.SET_LOADING;
  payload: UserState["loading"];
}

export interface SetTheme {
  type: UserActionConstants.SET_THEME;
  payload: UserState["theme"];
}

export type UserActions = {
  useLogout(): () => void;
  useLogin(): (token: string) => Promise<boolean>;
  useFetchUser(): () => Promise<void>;
  useSetLoading(): (loadState: boolean) => void;
  useSetTheme(): (theme: UserState["theme"]) => void;
};

// SELECTORS

export type UserSelectors = {
  useSelectAuthenticated: () => UserState["authenticated"];
  useSelectUserLoading: () => UserState["loading"];
  useSelectUserId: () => UserState["userId"];
  useSelectUser: () => UserState["user"];
  useSelectTheme: () => UserState["theme"];
};
