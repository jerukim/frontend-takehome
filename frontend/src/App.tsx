import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import { Tab, TabItem } from "./components/Tab";
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
      <header>
        <Search />
      </header>

      <main className="flex flex-col gap-y-4">
        <AssetOverview asset={asset} />

        <Tab>
          <TabItem label="Price" isActive={true} />
          <TabItem label="Funding" isActive={false} />
        </Tab>

        <section className="flex flex-col gap-4 lg:flex-row">
          <Chart
            options={chartOptions}
            candlestickOptions={seriesOptions}
            data={series}
          />

          <div className="w-full bg-[#161514] px-4 pb-4 lg:w-[320px] lg:flex-shrink-0 lg:self-stretch">
            <Tab>
              <TabItem className="flex-grow" label="Price" isActive={true} />
              <TabItem className="flex-grow" label="Funding" isActive={false} />
            </Tab>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
