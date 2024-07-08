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
  UTCTimestamp,
} from "lightweight-charts";
import { useCallback, useRef } from "react";

type ChartProps = {
  data: (CandlestickData<Time> | WhitespaceData<Time>)[];
  options?: DeepPartial<TimeChartOptions>;
  candlestickOptions?: DeepPartial<
    CandlestickStyleOptions & SeriesOptionsCommon
  >;
};

function ChartSettings() {
  return (
    <menu className="col-span-full flex h-6 items-center justify-between">
      <div className="flex divide-x divide-white">
        <button className="shrink-0 pr-2">
          <img className="size-6" src="/img/add-circle.svg" alt="" />
        </button>

        <button className="font-sm px-2 font-mono uppercase text-white">
          1h
        </button>

        <button className="shrink-0 px-2">
          <img className="size-6" src="/img/candles.svg" alt="" />
        </button>

        <button className="font-sm flex shrink-0 px-2 font-mono uppercase text-white">
          <img className="size-6" src="/img/function.svg" alt="" />
          Indicators
        </button>
      </div>

      <div className="flex items-center gap-x-4 border-l border-gray pl-4">
        <button className="shrink-0">
          <img className="size-6" src="/img/gear.svg" alt="" />
        </button>
        <button className="shrink-0">
          <img className="size-6" src="/img/scan.svg" alt="" />
        </button>
        <button className="shrink-0">
          <img className="size-6" src="/img/camera.svg" alt="" />
        </button>
      </div>
    </menu>
  );
}

function ChartControls() {
  return (
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
  );
}

export default function Chart({
  data,
  options,
  candlestickOptions,
}: ChartProps) {
  const chart = useRef<IChartApi>();
  const reaction = useRef("");
  const throttle = useRef(false);

  const chartContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        chart.current = createChart(node, options);
        chart.current.timeScale().fitContent();

        const candlestickSeries =
          chart.current.addCandlestickSeries(candlestickOptions);

        candlestickSeries.setData(data);

        chart.current.subscribeCrosshairMove((param) => {
          if (reaction.current && throttle.current === false) {
            throttle.current = true;

            candlestickSeries.setMarkers([
              {
                time: param.time as UTCTimestamp,
                position: "aboveBar",
                // @ts-ignore
                shape: "",
                color: "",
                text: reaction.current,
              },
            ]);

            reaction.current = "";
            throttle.current = false;
          }
        });
      } else {
        chart.current?.remove();
        chart.current = undefined;
      }
    },
    [data, chart, options, candlestickOptions],
  );

  function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }

  function dropHandler(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    reaction.current = event.dataTransfer.getData("text/plain");
  }

  return (
    <section className="grid h-[551px] w-full grid-cols-[1.5rem_1fr] grid-rows-[1.5rem_1fr] gap-y-4 bg-black-16 p-2 md:px-6 md:pb-6">
      <ChartSettings />

      <ChartControls />

      {/* ChartGraph */}
      <div
        className="col-start-2 row-start-2 h-full w-[calc(100vw-4.5rem)] md:w-[calc(100vw-8.5rem)] lg:w-[calc(100vw-9.5rem-320px)] xl:w-[calc(100vw-15.5rem-320px)]"
        ref={chartContainerRef}
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      />
    </section>
  );
}
