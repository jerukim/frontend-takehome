export default function Chart() {
  return (
    <div className="col-span-6 grid h-[551px] grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      {/* Chart Settings */}
      <div className="col-span-full col-start-1 row-start-1 flex h-6 items-center justify-between">
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
      </div>

      {/* Chart Controls */}
      <div className="flex flex-col gap-y-4"></div>

      {/* Chart */}
      <div className=""></div>
    </div>
  );
}
