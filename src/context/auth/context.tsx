import React, { createContext, useContext, useReducer } from "react";
import { initialState, userReducer } from "./reducer";
import { UserDispatch, UserState } from "./types";

const UserStateContext = createContext<UserState>(initialState);
const UserDispatchContext = createContext<UserDispatch>(() => {});

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
