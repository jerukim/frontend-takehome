import { Tab, TabItem } from "./Tab";

export default function PurchaseForm() {
  return (
    <form className="flex flex-col gap-4">
      <Tab>
        <TabItem className="grow" label="Price" isActive={true} />
        <TabItem className="grow" label="Funding" isActive={false} />
      </Tab>
      <div className="flex gap-2">
        <div className="flex grow flex-col justify-between">
          <label htmlFor="orderType" className="font-mono text-sm text-white">
            Order type
          </label>
          <select
            className="bg-black-1a h-12 appearance-none rounded-sm bg-[url('/img/chevron-down.svg')] bg-[length:1.5rem] bg-[right_0.25rem_center] bg-no-repeat px-2 text-sm uppercase text-white"
            id="orderType"
            name="orderType"
          >
            <option>Market</option>
          </select>
        </div>
        <div className="flex shrink flex-col gap-2 lg:w-[84px]">
          <span className="font-mono text-sm text-gray">Open Price</span>
          <span className="font-mono text-sm text-white">30,021.29 USDC</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="size" className="font-mono text-sm text-white">
          Size
        </label>
        <div className="bg-black-1a flex items-center rounded-sm">
          <input
            className="h-12 grow appearance-none bg-transparent px-2 text-sm text-white"
            id="size"
            name="size"
            type="number"
            placeholder="0.0"
            min={0}
          />
          <span className="pr-2 text-xs text-gray">USDC</span>
        </div>
        <span className="text-gray-100 font-mono text-sm">Up to 1,458.173</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <label id="leverageLabel" className="font-mono text-sm text-white">
            Leverage
          </label>
          <output id="leverageValue" className="font-sans text-sm text-white">
            2.00 X
          </output>
        </div>
        <div
          id="leverage"
          className="relative flex h-10"
          role="slider"
          aria-labelledby="leverageLabel"
          aria-orientation="vertical"
          aria-label="leverage"
          aria-valuemin={2.0}
          aria-valuemax={128.0}
          aria-valuenow={2.0}
          tabIndex={0}
        >
          {/* Track */}
          <div className="bg-black-25 relative flex h-[6px] w-full items-center justify-between rounded-full px-0.5">
            {/* Markers */}
            {[2, 5, 10, 25, 50, 100, 128].map((value) => (
              <div key={value} className="relative flex flex-col items-center">
                <div className="bg-gray-50 h-3 w-[2px] rounded-full"></div>
                <span className="absolute top-full translate-y-3 font-mono text-xxs text-white">
                  {value}x
                </span>
              </div>
            ))}
          </div>

          {/* Thumb */}
          <div className="absolute size-4 -translate-y-1/3 rounded-full bg-gray" />
        </div>
      </div>

      <output
        className="flex flex-col gap-2"
        name="result"
        htmlFor="orderType size leverage"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-sm text-gray">Liquidation Price</h3>
          <span className="font-mono text-sm text-white">300,212 USDC</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-sm text-gray">Slippage</h3>
          <span className="font-mono text-sm text-white">1.20 USDC (0.3%)</span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-sm text-gray">Fee</h3>
          <span className="font-mono text-sm text-white">
            2.00 USDC (0.05%)
          </span>
        </div>
      </output>

      <button
        className="flex items-center justify-between font-mono text-sm text-gray"
        type="button"
      >
        Advanced <img src="/img/chevron-down.svg" alt="" />
      </button>

      <button className="bg-green py-3 font-mono uppercase" type="submit">
        Buy / Long
      </button>
    </form>
  );
}
