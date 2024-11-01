import axios from "axios";
import { api } from "../../api/config";
import { handleAPIError } from "../../utils/handleAPIError";
import { AppDispatch } from "../../store";
import { SetIsLoadingType } from "../../models/LoadingTypes";
import { SetErrorHandlerType } from "../../models/ToastHandlerTypes";
import { IPayloadQueryParams } from "../../models/QueryParamTypes";
import { getAllCoinTickersSlice } from "../slice/coinTickersSlice";

const url = `${api}/api/tickers`;

// Create an abort controller
let abortController: AbortController | null = null;

// Get all tickers
export const getAllCoinTickers =
  (
    queryParameters: IPayloadQueryParams,
    setIsLoading: SetIsLoadingType,
    setErrorHandlerObj: SetErrorHandlerType
  ) =>
  (dispatch: AppDispatch) => {
    setIsLoading(true);
    // Append the query parameters to the URL
    const endpointUrl = new URL(`${url}/`);
    if (queryParameters) {
      Object.keys(queryParameters).forEach((key) => {
        if (!queryParameters[key as keyof IPayloadQueryParams]) return;
        // If the key exists, append it to the URL
        endpointUrl.searchParams.append(
          key,
          queryParameters[key as keyof IPayloadQueryParams] as string
        );
      });
    }

    // Check if there is an existing request, cancel it
    if (abortController) abortController.abort();
    // Create a new AbortController
    abortController = new AbortController();

    axios
      .get(endpointUrl.href, { signal: abortController.signal })
      .then((res) => {
        dispatch(getAllCoinTickersSlice(res.data));
        // Set Loading State to false
        setIsLoading(false);
      })
      .catch((err) => {
        // Check if the request was cancelled, if it was, return early
        if (axios.isCancel(err)) return;
        handleAPIError(err, setErrorHandlerObj);
        // Set Loading State to false
        setIsLoading(false);
      });
  };
