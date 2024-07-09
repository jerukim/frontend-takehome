import { QueryClient, QueryClientProvider } from "react-query";
import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import PurchaseForm from "./components/PurchaseForm";
import { Reactions } from "./components/Reactions";
import Search from "./components/Search";
import { Tab, TabItem } from "./components/Tab";

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

        <Tab>
          <TabItem label="Price" isActive={true} />
          <TabItem label="Funding" isActive={false} />
        </Tab>

        <section className="flex flex-col gap-4 lg:flex-row">
          <Chart />

          <aside className="w-full bg-black-16 px-4 pb-4 lg:w-[320px] lg:shrink-0">
            <PurchaseForm />
          </aside>
        </section>

        <Reactions />
      </main>
    </QueryClientProvider>
  );
}

export default App;
