import { QueryClient, QueryClientProvider } from "react-query";
import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import PurchaseForm from "./components/PurchaseForm";
import { Reactions } from "./components/Reactions";
import Search from "./components/Search";
import { Tabs, TabItem } from "./components/Tabs";

import { asset } from "./fixtures";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <Search />
      </header>

      <main className="flex flex-col gap-y-4">
        <AssetOverview asset={asset} />

        <Tabs>
          <TabItem isActive={true}>Price</TabItem>
          <TabItem isActive={false}>Funding</TabItem>
        </Tabs>

        <section className="order-2 flex flex-col gap-4 lg:order-1 lg:flex-row">
          <Chart />

          <aside className="w-full bg-black-16 px-4 pb-4 lg:w-[320px] lg:shrink-0">
            <PurchaseForm />
          </aside>
        </section>

        <Reactions
          className="order-1 shrink self-start lg:order-2"
          options={["🚀", "😍", "😡", "😭", "😱", "👎"]}
        />
      </main>
    </QueryClientProvider>
  );
}

export default App;
