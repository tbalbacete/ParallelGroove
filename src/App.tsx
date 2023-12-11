import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { Home } from "./pages";
import { QueryClientProvider } from "@tanstack/react-query";
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
