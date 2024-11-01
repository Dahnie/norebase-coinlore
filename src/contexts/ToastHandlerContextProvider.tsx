import React from "react";
import useDisplayMessage from "../hooks/useDisplayMessage";
import { ToastHandlerContext } from "./ToastHandlerContext";

interface IToastHandlerProviderProps {
  children: React.ReactNode;
}

function ToastHandlerContextProvider({ children }: IToastHandlerProviderProps) {
  const { errorHandlerObj, setErrorHandlerObj } = useDisplayMessage();
  return (
    <ToastHandlerContext.Provider
      value={{
        errorHandlerObj,
        setErrorHandlerObj,
      }}
    >
      {children}
    </ToastHandlerContext.Provider>
  );
}

export default ToastHandlerContextProvider;
