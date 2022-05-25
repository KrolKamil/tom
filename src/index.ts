import { cakes } from "./datasets/dataset-1";
import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { createTList } from "./helpers/create-t-list";
import { generateFields } from "./helpers/generate-fields";
import { calculateCakes } from "./calculate-cakes";
import { calculateFields } from "./calculate-fields";
import { saveToJsonFile } from "./helpers/save-to-json-file";
import { calculateResult } from "./calculate-result";
import { mapResultToArray } from "./map-result-to-array";

// configurable
const countLasers = 24;
const countT = 100; // higher T => more points on the line
const n = 20; // n^2 => pixels
const iterations = 50;
// end configurable

(async function () {
  const fields = generateFields(n);
  const tList = createTList(countT);
  const lasersAndReceivers = createLasersAndReceivers(countLasers);

  const calculatedCakes = calculateCakes({
    lasersAndReceivers,
    cakes,
    tList,
  });

  const calculatedFields = calculateFields({
    lasersAndReceivers,
    fields,
    tList,
  });

  const calculatedResult = calculateResult({
    matrixA: calculatedFields,
    matrixB: calculatedCakes,
    iterations,
  });

  const orderedResult = mapResultToArray(calculatedResult, n);

  await Promise.all([
    saveToJsonFile(calculatedCakes, "zad1"),
    saveToJsonFile(calculatedFields, "zad2"),
    saveToJsonFile(calculatedResult, "zad3"),
    saveToJsonFile(orderedResult, "zad33"),
  ]);
})();
