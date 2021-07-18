import { useDispatch } from "react-redux";
import {
  LoginUser,
  UserActionConstants,
  LogoutUser,
  SetLoading,
  FetchUser,
  UserState,
  SetTheme,
} from "./types";

import decode from "jwt-decode";
import { RootActions } from "../types/action-types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserActions: RootActions["user"] = {
  useLogin() {
    const dispatch = useDispatch();
    const fetchUser = UserActions.useFetchUser();

    return async (token: string) => {
      const action: LoginUser = {
        type: UserActionConstants.USER_LOGGED_IN,
        payload: token,
      };

      await AsyncStorage.setItem("@FIVE_E_TOKEN", token);

      dispatch(action);

      fetchUser();

      return true;
    };
  },
  useLogout() {
    const dispatch = useDispatch();

    return async () => {
      const action: LogoutUser = {
        type: UserActionConstants.USER_LOGGED_OUT,
        payload: undefined,
      };

      await AsyncStorage.removeItem("@FIVE_E_TOKEN");

      dispatch(action);
    };
  },
  useFetchUser() {
    const dispatch = useDispatch();

    // const [getUser] = useGetUserLazyQuery({
    // 	onCompleted: data => {
    // 		const action: FetchUser = {
    // 			type: UserActionConstants.APP_FETCHED_USER,
    // 			payload: data.getUser as any
    // 		};

    // 		dispatch(action);
    // 	}
    // });

    return async () => {
      const token = (await AsyncStorage.getItem("@FIVE_E_TOKEN")!) as string;

      const jwt: { userId: number } = decode(token);

      // getUser({ variables: { id: jwt.userId } });
    };
  },
  useSetLoading() {
    const dispatch = useDispatch();

    return (loadState: boolean) => {
      const action: SetLoading = {
        type: UserActionConstants.SET_LOADING,
        payload: loadState,
      };

      dispatch(action);
    };
  },
  useSetTheme() {
    const dispatch = useDispatch();

    return (theme: UserState["theme"]) => {
      const action: SetTheme = {
        type: UserActionConstants.SET_THEME,
        payload: theme,
      };

      dispatch(action);
    };
  },
};
