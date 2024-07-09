import clsx from "clsx";
import { Asset } from "../types";

type Delta = "neutral" | "positive" | "negative";

function getDelta(num: number): Delta {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "neutral";
  }
}

function AssetOverviewItem({
  name,
  value,
  delta,
}: {
  name: string;
  value: string | number;
  delta: Delta;
}) {
  return (
    <li>
      <h2 className="font-mono text-xxs uppercase text-gray">{name}</h2>
      <span
        className={clsx(
          "font-sans text-sm font-bold uppercase",
          delta === "neutral" && "text-white",
          delta === "positive" && "text-green",
          delta === "negative" && "text-red",
        )}
      >
        {value}
      </span>
    </li>
  );
}

export default function AssetOverview({ asset }: { asset: Asset }) {
  return (
    <section className="border-b border-solid border-black-1a py-2">
      <ul className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-3">
        <li className="flex items-center gap-x-2">
          <img className="size-6" src={asset.img_url} alt={asset.name} />
          <h1 className="font-sans text-sm font-bold uppercase text-white">
            {asset.symbol} / {asset.name}
          </h1>
        </li>

        <AssetOverviewItem
          name="Price"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(asset.price)}
          delta="neutral"
        />

        <AssetOverviewItem
          name="24h Change"
          value={asset["24h_change"]}
          delta={getDelta(parseFloat(asset["24h_change"].split(" ")[0]))}
        />

        <AssetOverviewItem
          name="1h Funding"
          value={`${asset["1h_funding"]}%`}
          delta={getDelta(asset["1h_funding"])}
        />

        <AssetOverviewItem
          name="Long Open Interest"
          value={`${asset["long_open_interest"]} ${asset.symbol}`}
          delta={getDelta(asset["long_open_interest"])}
        />

        <AssetOverviewItem
          name="Short Open Interest"
          value={`${asset["short_open_interest"]} ${asset.symbol}`}
          delta={getDelta(asset["short_open_interest"])}
        />
      </ul>
    </section>
  );
}
