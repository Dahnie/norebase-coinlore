import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import styles from "./CoinTickerDashboard.module.css";
import { getAllCoinTickers } from "../../redux/actions/coinTickersAction";
import { ToastHandlerContext } from "../../contexts/ToastHandlerContext";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import Pagination from "../../components/pagination/Pagination";
import CoinTickerTable from "./coin-ticker-table/CoinTickerTable";
import { ICoinTicker } from "../../models/TickerTypes";
import { useSearchParams } from "react-router-dom";

function CoinTickerDashboard() {
  // Functions, States and Variables
  const dispatch = useAppDispatch();
  //   Toast Handler Context
  const toastHandlerContext = useContext(ToastHandlerContext);
  const { setErrorHandlerObj } = toastHandlerContext;
  //   Coin Tickers Data
  const allCoinTickerData = useAppSelector(
    (state) => state.tickers.allCoinTickers
  );

  // URL Search Params
  const [searchParams, setSearchParams] = useSearchParams();

  //   States
  // Table Data States
  const [currentAllCoinTickersPosts, setCurrentAllCoinTickerPosts] = useState<
    ICoinTicker[]
  >([]);
  // Loading States
  const [isFetchLoading, setIsFetchLoading] = useState(false);

  // Pagination States
  const [pageNumberIndex, setPageNumberIndex] = useState(() => {
    const page = searchParams.get("page");
    return page ? parseInt(page) : 1;
  });
  const [rowsPerPage] = useState(10);

  //   Functions

  //  handle Update URL Query Params
  const handleUpdateURLQueryParams = function () {
    // For Page Number Index
    searchParams.set("page", pageNumberIndex.toString());
    // For Rows Per Page(Limit)
    searchParams.set("limit", rowsPerPage.toString());
    setSearchParams(searchParams);
  };

  //   Handle Fetch All Coin Tickers
  const handleFetchAllCoinTickers = function () {
    const queryParameters = {
      start: pageNumberIndex.toString(),
      limit: rowsPerPage.toString(),
    };

    // Call the dispatch function to fetch all coin tickers
    dispatch(
      getAllCoinTickers(queryParameters, setIsFetchLoading, setErrorHandlerObj)
    );
  };

  //   UseEffects
  useEffect(() => {
    // Fetch All Coin Tickers
    handleFetchAllCoinTickers();

    // Update URL Query Params
    handleUpdateURLQueryParams();
  }, [pageNumberIndex, rowsPerPage]);

  useEffect(() => {
    // Set the current coin tickers posts to the data value from the API response
    if (allCoinTickerData.data) {
      setCurrentAllCoinTickerPosts(allCoinTickerData.data);
    }
  }, [allCoinTickerData]);

  return (
    <main className={styles.coinlore_dashboard_main}>
      <section className={styles.coin_ticker_table_section}>
        {/* Coin Ticker Table */}
        <CoinTickerTable
          currentAllCoinTickersPosts={currentAllCoinTickersPosts}
        />

        {/* Loading Spinner */}
        {isFetchLoading && <LoadingSpinner backgroundColor="black" />}

        {/* Pagination */}
        <Pagination
          currentPage={pageNumberIndex}
          totalCount={allCoinTickerData.info.coins_num}
          rowsPerPage={rowsPerPage}
          onPageChange={(page) => setPageNumberIndex(page)}
        />
      </section>
    </main>
  );
}

export default CoinTickerDashboard;
