import {
  IChartApi,
  createChart,
  CandlestickData,
  TimeChartOptions,
  DeepPartial,
  Time,
  WhitespaceData,
  CandlestickStyleOptions,
  SeriesOptionsCommon,
} from "lightweight-charts";
import { useCallback, useRef } from "react";

type ChartProps = {
  data: (CandlestickData<Time> | WhitespaceData<Time>)[];
  options?: DeepPartial<TimeChartOptions>;
  candlestickOptions?: DeepPartial<
    CandlestickStyleOptions & SeriesOptionsCommon
  >;
};

export default function Chart({
  data,
  options,
  candlestickOptions,
}: ChartProps) {
  const chart = useRef<IChartApi>();

  const chartContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        chart.current = createChart(node, options);
        chart.current.timeScale().fitContent();

        const candlestickSeries =
          chart.current.addCandlestickSeries(candlestickOptions);

        candlestickSeries.setData(data);
      } else {
        chart.current?.remove();
        chart.current = undefined;
      }
    },
    [data, chart, options, candlestickOptions],
  );

  return (
    <div className="col-span-full grid h-[551px] grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-4 bg-[#161514] p-2 md:px-6 md:pb-6 xl:col-span-9">
      {/* Chart Settings */}
      <menu className="col-span-full col-start-1 row-start-1 flex h-6 items-center justify-between">
        <div className="flex divide-x divide-white">
          <button className="flex-shrink-0 pr-2">
            <img className="size-6" src="/img/add-circle.svg" alt="" />
          </button>

          <button className="font-sm px-2 font-mono uppercase text-white">
            1h
          </button>

          <button className="flex-shrink-0 px-2">
            <img className="size-6" src="/img/candles.svg" alt="" />
          </button>

          <button className="font-sm flex flex-shrink-0 px-2 font-mono uppercase text-white">
            <img className="size-6" src="/img/function.svg" alt="" />
            Indicators
          </button>
        </div>

        <div className="flex items-center gap-x-4 border-l border-gray pl-4">
          <button className="flex-shrink-0">
            <img className="size-6" src="/img/gear.svg" alt="" />
          </button>
          <button className="flex-shrink-0">
            <img className="size-6" src="/img/scan.svg" alt="" />
          </button>
          <button className="flex-shrink-0">
            <img className="size-6" src="/img/camera.svg" alt="" />
          </button>
        </div>
      </menu>

      {/* Chart Controls */}
      <menu className="col-start-1 col-end-2 row-start-2 flex flex-col gap-y-4">
        <button className="size-6">
          <img className="size-6" src="/img/cross.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/trend-line.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/fib ret.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/brush.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/text.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/XABCD pattern.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/long position.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/heart.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/ruler.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/search-zoom-in.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/magnet.svg" alt="" />
        </button>
        <button className="size-6">
          <img className="size-6" src="/img/lock drawing mode.svg" alt="" />
        </button>
      </menu>

      {/* Chart */}
      <div className="col-start-2 row-start-2" ref={chartContainerRef}></div>
    </div>
  );
}
