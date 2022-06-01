import React from "react";
import "./App.css";
import Plot from "react-plotly.js";
import zad3 from "./zad3.json";

interface Target {
  n: number;
  result: number[];
}

const target: Target = zad3 as any;

const out: number[][] = [];

const z = target.result
  .reduce((acc, next, index) => {
    if (index % target.n === 0) {
      out.push([]);
    }

    out[out.length - 1].push(next);

    return acc;
  }, out)
  .reverse();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Plot
          data={[
            {
              z,
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
