import React from "react";
import "./App.css";
import Plot from "react-plotly.js";

import target from "./zad3.json";

const out: number[][] = [];

const x = target.reduce((acc, next, index) => {
  if (index % 20 === 0) {
    out.push([]);
  }

  out[out.length - 1].push(next);

  return acc;
}, out);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plot
          data={[
            {
              z: x,
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
