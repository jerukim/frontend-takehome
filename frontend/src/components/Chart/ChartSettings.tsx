export default function ChartSettings() {
  return (
    <menu className="col-span-full flex h-6 items-center justify-between">
      <div className="flex divide-x divide-white">
        <button className="shrink-0 pr-2">
          <img className="size-6" src="/img/add-circle.svg" alt="" />
        </button>

        <button className="font-sm px-2 font-mono uppercase text-white">
          24h
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
