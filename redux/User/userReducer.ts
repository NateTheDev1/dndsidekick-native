import { UserActionConstants, UserState } from "./types";
import { ActionType } from "../types/action-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialUserState: UserState = {
  authenticated: false,
  token: "",
  userId: undefined,
  user: undefined,
  loading: false,
  theme: "dark",
};

export const userReducer = (
  state: UserState = initialUserState,
  action: ActionType
): UserState => {
  switch (action.type) {
    case UserActionConstants.USER_LOGGED_IN: {
      return {
        ...state,
        authenticated: true,
        token: action.payload,
        loading: false,
      };
    }
    case UserActionConstants.APP_FETCHED_USER: {
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id,
        loading: false,
      };
    }
    case UserActionConstants.SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case UserActionConstants.USER_LOGGED_OUT: {
      return {
        ...initialUserState,
        authenticated: false,
        token: "",
        user: undefined,
        userId: undefined,
      };
    }
    case UserActionConstants.SET_THEME: {
      return { ...state, theme: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
