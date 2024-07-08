import { UTCTimestamp } from "lightweight-charts";
import { Asset } from "./types";

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

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

export const series = [
  {
    open: 10,
    high: 10.63,
    low: 9.49,
    close: 9.55,
    time: 1642427876 as UTCTimestamp,
  },
  {
    open: 9.55,
    high: 10.3,
    low: 9.42,
    close: 9.94,
    time: 1642514276 as UTCTimestamp,
  },
  {
    open: 9.94,
    high: 10.17,
    low: 9.92,
    close: 9.78,
    time: 1642600676 as UTCTimestamp,
  },
  {
    open: 9.78,
    high: 10.59,
    low: 9.18,
    close: 9.51,
    time: 1642687076 as UTCTimestamp,
  },
  {
    open: 9.51,
    high: 10.46,
    low: 9.1,
    close: 10.17,
    time: 1642773476 as UTCTimestamp,
  },
  {
    open: 10.17,
    high: 10.96,
    low: 10.16,
    close: 10.47,
    time: 1642859876 as UTCTimestamp,
  },
  {
    open: 10.47,
    high: 11.39,
    low: 10.4,
    close: 10.81,
    time: 1642946276 as UTCTimestamp,
  },
  {
    open: 10.81,
    high: 11.6,
    low: 10.3,
    close: 10.75,
    time: 1643032676 as UTCTimestamp,
  },
  {
    open: 10.75,
    high: 11.6,
    low: 10.49,
    close: 10.93,
    time: 1643119076 as UTCTimestamp,
  },
  {
    open: 10.93,
    high: 11.53,
    low: 10.76,
    close: 10.96,
    time: 1643205476 as UTCTimestamp,
  },
];
