import { QueryClient, QueryClientProvider } from "react-query";
import {
  CandlestickStyleOptions,
  DeepPartial,
  LineStyle,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";

import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import PurchaseForm from "./components/PurchaseForm";
import { Reactions } from "./components/Reactions";
import Search from "./components/Search";
import { Tab, TabItem } from "./components/Tab";

import tailwind from "./styles/config";
import { asset, series } from "./fixtures";
import { useId } from "react";

const queryClient = new QueryClient();

const chartOptions: DeepPartial<TimeChartOptions> = {
  autoSize: true,
  watermark: {
    color: tailwind.theme.colors.white,
    visible: true,
    text: "BTC/USDT - 1H - Vest\n",
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
    horzAlign: "left",
    vertAlign: "top",
  },
  layout: {
    background: { color: "transparent" },
    textColor: tailwind.theme.colors.gray,
    fontSize: 14,
    fontFamily: "IBM Plex Mono",
  },
  rightPriceScale: {
    borderVisible: false,
  },
  timeScale: {
    timeVisible: true,
  },
  grid: {
    vertLines: {
      color: tailwind.theme.colors["black-42"],
    },
    horzLines: {
      color: tailwind.theme.colors["black-42"],
    },
  },
};
const seriesOptions: DeepPartial<
  CandlestickStyleOptions & SeriesOptionsCommon
> = {
  priceLineStyle: LineStyle.Solid,
  priceLineColor: tailwind.theme.colors.green,
  upColor: tailwind.theme.colors.green,
  downColor: tailwind.theme.colors["red-e0"],
  borderVisible: false,
  wickUpColor: tailwind.theme.colors.green,
  wickDownColor: tailwind.theme.colors["red-e0"],
  baseLineColor: tailwind.theme.colors.green,
};

function App() {
  const userId = useId();

  return (
    <QueryClientProvider client={queryClient}>
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
            userId={userId}
            options={chartOptions}
            candlestickOptions={seriesOptions}
            data={series}
          />

          <aside className="w-full bg-black-16 px-4 pb-4 lg:w-[320px] lg:shrink-0">
            <PurchaseForm />
          </aside>
        </section>

        <Reactions />
      </main>
    </QueryClientProvider>
  );
}

export default App;
