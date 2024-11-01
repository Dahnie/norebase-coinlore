import { ICoinTicker } from "../../../models/TickerTypes";

// Props Interface
interface CoinTickerTableProps {
  currentAllCoinTickersPosts: ICoinTicker[];
}

function CoinTickerTable({ currentAllCoinTickersPosts }: CoinTickerTableProps) {
  const tableHeadColumns = ["💰Coin", "📄Code", "🤑Price", "📉Total Supply"];
  return (
    <table className="primary-table">
      <thead
        style={{
          textAlign: "left",
        }}
      >
        <tr>
          {tableHeadColumns.map((COLUMN, index) => (
            <th key={index + 1}>{COLUMN}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {currentAllCoinTickersPosts?.map((coin) => (
          <tr key={coin.id}>
            {/*  Name Col */}
            <td className="td-primary">
              <span
                data-label={tableHeadColumns[0]}
                className="td-primary--data-wrapper"
              >
                {coin.name}
              </span>
            </td>

            {/* Code Col */}
            <td className="td-primary">
              <span
                data-label={tableHeadColumns[1]}
                className="td-primary--data-wrapper"
              >
                {coin.symbol}
              </span>
            </td>

            {/* Price Col */}
            <td className="td-primary">
              <span
                data-label={tableHeadColumns[2]}
                className="td-primary--data-wrapper"
              >
                ${coin.price_usd}
              </span>
            </td>

            {/* Total Supply Col */}
            <td className="td-primary">
              <span
                data-label={tableHeadColumns[3]}
                className="td-primary--data-wrapper"
              >
                {coin.tsupply} {coin.symbol}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CoinTickerTable;
