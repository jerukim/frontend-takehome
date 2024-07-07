import AssetOverview from "./components/AssetOverview";
import Search from "./components/Search";

import { asset } from "./fixtures";

function App() {
  return (
    <>
      <header className="col-span-full grid grid-cols-subgrid">
        <Search />
      </header>
      <main className="col-span-full grid grid-cols-subgrid">
        <AssetOverview asset={asset} />
      </main>
    </>
  );
}

export default App;
