import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial State

const initialState = {
  users: [
    {
      id: 1,
      name: "Trung Kien",
    },
    {
      id: 2,
      name: "Le Thi Lai",
    },
  ],
};
// create context

export const GlobalContext = createContext(initialState);

// provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
