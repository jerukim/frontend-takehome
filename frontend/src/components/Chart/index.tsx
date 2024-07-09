import {
  TimeChartOptions,
  DeepPartial,
  CandlestickStyleOptions,
  SeriesOptionsCommon,
  LineStyle,
} from "lightweight-charts";
import ChartSettings from "./ChartSettings";
import ChartControls from "./ChartControls";
import ChartGraph from "./ChartGraph";

import tailwind from "../../styles/config";

export default function Chart() {
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

  return (
    <section className="grid h-[551px] w-full grid-cols-[1.5rem_1fr] grid-rows-[1.5rem_1fr] gap-y-4 bg-black-16 p-2 md:px-6 md:pb-6">
      <ChartSettings />
      <ChartControls />
      <ChartGraph chartOptions={chartOptions} seriesOptions={seriesOptions} />
    </section>
  );
}
