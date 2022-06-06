import React from "react";
import "./App.css";
import Plot from "react-plotly.js";
import zad3 from "./zad3.json";

interface Target {
  n: number;
  result: number[];
  errors: number[];
}

const target: Target = zad3 as any;

const parseToZ = (x: number[], n: number) => {
  const out: number[][] = [];

  x.reduce((acc, next, index) => {
    if (index % n === 0) {
      out.push([]);
    }

    out[out.length - 1].push(next);

    return acc;
  }, out).reverse();

  out.shift();

  return out;
};

let z = parseToZ(target.result, target.n);
let zErrors = parseToZ(target.errors, target.n);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Plot
            data={[
              {
                z,
                type: "heatmap",
              },
            ]}
            layout={{
              title: "Result 2d",
              width: 500,
              height: 500,
            }}
          />
          <Plot
            data={[
              {
                z,
                type: "surface",
              },
            ]}
            layout={{
              title: "Result 3d",
              autosize: true,
              width: 500,
              height: 500,
            }}
          />
        </div>
        <div>
          <Plot
            data={[
              {
                z: zErrors,
                type: "heatmap",
              },
            ]}
            layout={{
              title: "Errors 2d",
              width: 500,
              height: 500,
            }}
          />
          <Plot
            data={[
              {
                z: zErrors,
                type: "surface",
              },
            ]}
            layout={{
              title: "Errors 3d",
              autosize: true,
              width: 500,
              height: 500,
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
