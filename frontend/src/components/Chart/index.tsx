import {
  TimeChartOptions,
  DeepPartial,
  CandlestickStyleOptions,
  SeriesOptionsCommon,
  LineStyle,
} from "lightweight-charts";
import ChartGraph from "./ChartGraph";

import { tailwind } from "../../styles/config";

type ButtonProps = { label: string; imgSrc: string; onClick: () => void };

function mapButtons(buttons: ButtonProps[]) {
  return buttons.map(({ label, imgSrc }) => (
    <button
      key={label + imgSrc}
      className="font-sm flex shrink-0 px-2 font-mono uppercase text-white"
    >
      {imgSrc && <img className="size-6" src={imgSrc} alt="" />}
      {label}
    </button>
  ));
}

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

  const leftSettings: ButtonProps[] = [
    { label: "", imgSrc: "/img/add-circle.svg", onClick: () => {} },
    { label: "1h", imgSrc: "", onClick: () => {} },
    { label: "", imgSrc: "/img/candles.svg", onClick: () => {} },
    {
      label: "Indicators",
      imgSrc: "/img/function.svg",
      onClick: () => {},
    },
  ];
  const rightSettings: ButtonProps[] = [
    { label: "", imgSrc: "/img/gear.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/scan.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/camera.svg", onClick: () => {} },
  ];
  const leftControls: ButtonProps[] = [
    { label: "", imgSrc: "/img/cross.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/trend-line.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/fib ret.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/brush.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/text.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/XABCD pattern.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/long position.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/heart.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/ruler.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/search-zoom-in.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/magnet.svg", onClick: () => {} },
    { label: "", imgSrc: "/img/lock drawing mode.svg", onClick: () => {} },
  ];

  return (
    <div className="grid h-[551px] w-full grid-cols-[1.5rem_1fr] grid-rows-[1.5rem_1fr] gap-y-4 bg-black-16 p-2 md:px-6 md:pb-6">
      <menu className="col-span-full flex h-6 items-center justify-between">
        <div className="flex divide-x divide-white">
          {mapButtons(leftSettings)}
        </div>
        <div className="flex items-center gap-x-4 border-l border-gray pl-4">
          {mapButtons(rightSettings)}
        </div>
      </menu>

      <menu className="col-start-1 col-end-2 row-start-2 flex flex-col gap-y-4">
        {mapButtons(leftControls)}
      </menu>

      <ChartGraph chartOptions={chartOptions} seriesOptions={seriesOptions} />
    </div>
  );
}
