import React from "react";
import "./App.css";
import Plot from "react-plotly.js";

import target from "./zad33.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plot
          data={[
            {
              z: target,
              type: "heatmap",
            },
          ]}
          layout={{
            title: "Result",
          }}
        />
      </header>
    </div>
  );
}

export default App;
