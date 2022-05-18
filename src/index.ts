import { cakes } from "./datasets/dataset-2";
import { createLasersAndReceivers } from "./helpers/create-lasers-and-receivers";
import { createTList } from "./helpers/create-t-list";
import { generateFields } from "./helpers/generate-fields";
import { calculateCakes } from "./calculate-cakes";
import { calculateFields } from "./calculate-fields";
import { saveToJsonFile } from "./helpers/save-to-json-file";

// configurable
const countLasers = 10;
const countT = 1000; // higher T => more points on the line
const n = 7; // n^2 => pixels
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

  await Promise.all([
    saveToJsonFile(calculatedCakes, "zad1"),
    saveToJsonFile(calculatedFields, "zad2"),
  ]);
})();
