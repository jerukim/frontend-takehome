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
