import "./App.css";
import { Home } from "./pages";
import { DataProvider } from "./data/utils/context";
import { Boundary } from "./components/Boundary";

function App() {
  return (
    <>
      <DataProvider>
        <Boundary>
          <Home />
        </Boundary>
      </DataProvider>
    </>
  );
}

export default App;
