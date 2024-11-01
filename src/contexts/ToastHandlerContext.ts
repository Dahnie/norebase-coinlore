import { createContext } from "react";

import { IToastHandlerType } from "../models/ToastHandlerTypes";

export const ToastHandlerContext = createContext<IToastHandlerType>({
  errorHandlerObj: { hasError: false, message: "" },
  setErrorHandlerObj: () => {},
});
