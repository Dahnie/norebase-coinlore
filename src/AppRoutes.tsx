import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import Layout from "./components/layout/Layout";
import CoinTickerDashboard from "./pages/coin-ticker-dashboard/CoinTickerDashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* Coin Lore Table Page */}
      <Route path="/" element={<Layout children={<CoinTickerDashboard />} />} />
      <Route
        path="/tickers"
        element={<Layout children={<CoinTickerDashboard />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
