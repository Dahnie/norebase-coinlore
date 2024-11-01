export type SetErrorHandlerType = React.Dispatch<
  React.SetStateAction<ErrorHandlerType>
>;

export interface ErrorHandlerType {
  hasError: boolean;
  message: string;
}

export interface IToastHandlerType {
  errorHandlerObj: ErrorHandlerType;
  setErrorHandlerObj: SetErrorHandlerType;
}
