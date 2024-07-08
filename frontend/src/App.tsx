import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import Nav from "./components/Nav";
import Search from "./components/Search";

import {
  CandlestickStyleOptions,
  DeepPartial,
  LineStyle,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";

import { asset, series } from "./fixtures";

const chartOptions: DeepPartial<TimeChartOptions> = {
  autoSize: true,
  watermark: {
    color: "#F2F1F0",
    visible: true,
    text: "BTC/USDT - 1H - Vest\n",
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
    horzAlign: "left",
    vertAlign: "top",
  },
  layout: {
    background: { color: "transparent" },
    textColor: "#AEADAD",
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
  },
  rightPriceScale: {
    borderVisible: false,
  },
  grid: {
    vertLines: {
      color: "#424242",
    },
    horzLines: {
      color: "#424242",
    },
  },
};
const seriesOptions: DeepPartial<
  CandlestickStyleOptions & SeriesOptionsCommon
> = {
  priceLineStyle: LineStyle.Solid,
  priceLineColor: "#4BC2A3",
  upColor: "#4BC2A3",
  downColor: "#E03737",
  borderVisible: false,
  wickUpColor: "#4BC2A3",
  wickDownColor: "#E03737",
  baseLineColor: "#4BC2A3",
};

function App() {
  return (
    <>
      <header className="col-span-full grid grid-cols-subgrid">
        <Search />
      </header>
      <main className="col-span-full grid grid-cols-subgrid gap-4">
        <AssetOverview asset={asset} />
        <Nav />
        <Chart
          options={chartOptions}
          candlestickOptions={seriesOptions}
          data={series}
        />

        <div className="col-span-full h-96 bg-[#161514] xl:col-span-3 xl:h-full"></div>
      </main>
    </>
  );
}

export default App;
