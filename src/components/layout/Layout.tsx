import React, { useContext, useEffect } from "react";
import { handleClearToastMessage } from "../../hooks/useDisplayMessage";
import { IToastHandlerType } from "../../models/ToastHandlerTypes";
import { ToastHandlerContext } from "../../contexts/ToastHandlerContext";
import ErrorHandler from "../error-handler/ErrorHandler";

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  // Functions, States and Variables
  const location = window.location.pathname;
  // Toast Handler Context
  const toastHandlerContext = useContext(ToastHandlerContext);
  const { errorHandlerObj, setErrorHandlerObj } =
    toastHandlerContext as IToastHandlerType;

  useEffect(() => {
    // Clear the toast message on component unmount
    return () => {
      handleClearToastMessage(setErrorHandlerObj);
    };
  }, [location]);

  return (
    <div className="app_page_container">
      {/* Error handler component */}
      <ErrorHandler
        errorHandlerObj={errorHandlerObj}
        className={"app--actions-handler-wrapper"}
      />

      {children}
    </div>
  );
}

export default Layout;
