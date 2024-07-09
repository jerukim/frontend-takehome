import { useRef, useCallback } from "react";
import useMutateReactions from "../../lib/useMutateReactions";
import useReactions from "../../lib/useReactions";
import { createChart } from "lightweight-charts";
import { transformReactionsToMarkers } from "../../lib/util";

import { userId } from "../../fixtures";

import type {
  IChartApi,
  MouseEventParams,
  Time,
  CandlestickStyleOptions,
  DeepPartial,
  SeriesOptionsCommon,
  TimeChartOptions,
} from "lightweight-charts";
import useSeries from "../../lib/useSeries";
import clsx from "clsx";

type ChartProps = {
  chartOptions?: DeepPartial<TimeChartOptions>;
  seriesOptions?: DeepPartial<CandlestickStyleOptions & SeriesOptionsCommon>;
};

export default function ChartGraph({
  chartOptions,
  seriesOptions,
}: ChartProps) {
  const series = useSeries();
  const reactions = useReactions();
  const { mutate: mutateReactions } = useMutateReactions(userId);

  const chart = useRef<IChartApi>();
  const reaction = useRef("");
  const throttled = useRef(false);

  const handleAddReaction = useCallback(
    (param: MouseEventParams<Time>) => {
      if (reaction.current && !throttled.current) {
        throttled.current = true;

        // use optimistic
        mutateReactions(
          {
            timestamp:
              new Date((param.time as number) * 1000)
                .toISOString()
                .split(".")[0] + "Z",
            emoji: reaction.current,
          },
          {
            onError: () => {
              // handle error and rever optimistic value
            },
          },
        );

        reaction.current = "";
        throttled.current = false;
      }
    },
    [mutateReactions],
  );

  const chartContainerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        chart.current = createChart(node, chartOptions);
        chart.current.timeScale().fitContent();

        const candlestickSeries =
          chart.current.addCandlestickSeries(seriesOptions);
        candlestickSeries.setData(series.data ?? []);
        if (series.data?.length && reactions.data)
          candlestickSeries.setMarkers(
            transformReactionsToMarkers(reactions.data),
          );

        chart.current.subscribeCrosshairMove(handleAddReaction);
      } else {
        chart.current?.remove();
        chart.current = undefined;
      }
    },
    [
      series.data,
      reactions.data,
      chart,
      chartOptions,
      seriesOptions,
      handleAddReaction,
    ],
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
    <div
      className={clsx(
        "col-start-2 row-start-2 h-full w-[calc(100vw-4.5rem)] md:w-[calc(100vw-8.5rem)] lg:w-[calc(100vw-9.5rem-320px)] xl:w-[calc(100vw-15.5rem-320px)]",
        (series.status === "loading" || reactions.status === "loading") &&
          "animate-pulse",
      )}
      ref={chartContainerRef}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    />
  );
}
