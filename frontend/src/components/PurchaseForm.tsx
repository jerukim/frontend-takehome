import { useState } from "react";
import { ConfettiButton } from "./ConfettiButton";
import Slider from "./Slider";
import { Tabs, TabItem } from "./Tabs";

type PurchaseType = "long" | "short";

export default function PurchaseForm() {
  const [purchaseType, setPurchaseType] = useState<PurchaseType>("long");

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Tabs>
        <TabItem
          className="grow"
          onClick={() => setPurchaseType("long")}
          isActive={purchaseType === "long"}
        >
          Long
        </TabItem>
        <TabItem
          className="grow"
          onClick={() => setPurchaseType("short")}
          isActive={purchaseType === "short"}
        >
          Short
        </TabItem>
      </Tabs>

      <div className="flex gap-2">
        <div className="flex grow flex-col justify-between">
          <label htmlFor="orderType" className="font-mono text-sm text-white">
            Order type
          </label>
          <select
            className="h-12 appearance-none rounded-sm bg-black-1a bg-[url('/img/chevron-down.svg')] bg-[length:1.5rem] bg-[right_0.25rem_center] bg-no-repeat px-2 text-sm uppercase text-white"
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
        <div className="flex items-center rounded-sm bg-black-1a">
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
        <span className="font-mono text-sm text-gray-100">Up to 1,458.173</span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span
            id="leverage-label"
            className="font-mono text-sm capitalize text-white"
          >
            Leverage
          </span>
          <output id="leverage-value" className="font-sans text-sm text-white">
            2.00 X
          </output>
        </div>
        <Slider
          id="leverage"
          labelledBy="leverage-label"
          min={2}
          max={128}
          now={2}
          steps={[2, 5, 10, 25, 50, 100, 128].map((step) => ({
            value: step,
            label: `${step}x`,
          }))}
        />
      </div>

      <output
        className="flex flex-col gap-2"
        name="result"
        htmlFor="orderType size leverage"
      >
        <table>
          <tbody className="*:*:pb-2 *:last:*:pb-0">
            {[
              { label: "Liquidation Price", value: "300,212 USDC" },
              { label: "Slippage", value: "1.20 USDC (0.3%)" },
              { label: "Fee", value: "2.00 USDC (0.05%)" },
            ].map(({ label, value }) => (
              <tr key={label}>
                <th
                  className="text-nowrap text-left font-mono text-sm text-gray"
                  scope="row"
                >
                  {label}
                </th>
                <td className="text-nowrap text-right font-mono text-sm text-white">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </output>

      <button
        className="flex items-center justify-between font-mono text-sm text-gray"
        type="button"
      >
        Advanced <img src="/img/chevron-down.svg" alt="" />
      </button>

      <ConfettiButton
        className="bg-green py-3 font-mono uppercase"
        type="submit"
      >
        Buy / {purchaseType}
      </ConfettiButton>
    </form>
  );
}
