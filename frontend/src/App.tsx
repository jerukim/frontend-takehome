import AssetOverview from "./components/AssetOverview";
import Chart from "./components/Chart";
import Nav from "./components/Nav";
import Search from "./components/Search";

import { asset } from "./fixtures";

function App() {
  return (
    <>
      <header className="col-span-full grid grid-cols-subgrid">
        <Search />
      </header>
      <main className="col-span-full grid grid-cols-subgrid gap-4">
        <AssetOverview asset={asset} />
        <Nav />
        <Chart />
      </main>
    </>
  );
}

export default App;
