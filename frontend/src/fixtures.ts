import { CandlestickData, Time, UTCTimestamp } from "lightweight-charts";
import { Asset } from "./types";
import { getRandomArbitrary } from "./lib/util";

export const asset: Asset = {
  img_url: "/img/bitcoin.svg",
  symbol: "BTC",
  name: "Bitcoin",
  price: getRandomArbitrary(10_000, 60_000),
  "24h_change": (() => {
    const num = getRandomArbitrary(-100, 100);
    const sign = num > 0 ? "+" : "";
    return `${sign}${num.toFixed(1)} USDC (${sign}${(num / 3).toFixed(1)}$)`;
  })(),
  "1h_funding": parseFloat(getRandomArbitrary(-1, 1).toFixed(5)),
  long_open_interest: parseFloat(getRandomArbitrary(-10, 10).toFixed(3)),
  short_open_interest: parseFloat(getRandomArbitrary(-10, 10).toFixed(3)),
};

function generateSeries() {
  const series: CandlestickData<Time>[] = [];

  for (let i = 0; i < 25; i++) {
    const prevClose = series[i - 1]?.close ?? asset.price;
    series.push({
      open: parseFloat(prevClose.toFixed(2)),
      high: parseFloat((prevClose + getRandomArbitrary(0, 1000)).toFixed(2)),
      low: parseFloat((prevClose - getRandomArbitrary(-1000, 0)).toFixed(2)),
      close: parseFloat(
        (prevClose + getRandomArbitrary(-1000, 1000)).toFixed(2),
      ),
      time: (new Date(
        `2024-06-24T${i.toString().padStart(2, "0")}:00:00Z`,
      ).getTime() / 1000) as UTCTimestamp,
    });
  }

  return series;
}

export const series = generateSeries();
