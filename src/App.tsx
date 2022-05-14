import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { MainProvider } from "./providers/main.provider";

function App() {
  return (
    <MainProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </MainProvider>
  );
}

export default App;
