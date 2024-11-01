import { useEffect, useState } from "react";
import {
  ErrorHandlerType,
  SetErrorHandlerType,
} from "../models/ToastHandlerTypes";

// Functions
export const handleClearToastMessage = function (
  setErrorHandlerObj?: SetErrorHandlerType | null
) {
  if (setErrorHandlerObj)
    setErrorHandlerObj((prev) => ({ ...prev, hasError: false }));
};

function useDisplayMessage() {
  // Functions, States and Variables
  // States
  const [errorHandlerObj, setErrorHandlerObj] = useState<ErrorHandlerType>({
    hasError: false,
    message: "",
  });

  // UseEffects
  useEffect(() => {
    if (errorHandlerObj.hasError) {
      // Clear all toast messages after 15 seconds
      const timeout = setTimeout(() => {
        handleClearToastMessage(setErrorHandlerObj);
      }, 10000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorHandlerObj]);

  return {
    errorHandlerObj,
    setErrorHandlerObj,
  };
}

export default useDisplayMessage;
