import { UTCTimestamp, SeriesMarker, Time } from "lightweight-charts";
import { Reaction } from "../types";

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function transformReactionsToMarkers(
  reactions: Record<string, Reaction[]>,
) {
  return Object.entries(reactions)
    .map(
      ([timestamp, reactions]) =>
        ({
          time: (new Date(timestamp).getTime() / 1000) as UTCTimestamp,
          position: "inBar",
          text: reactions.map(({ emoji }) => emoji).join(""),
        }) as SeriesMarker<Time>,
    )
    .sort((a, b) => (a.time as number) - (b.time as number));
}
