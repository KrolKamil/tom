import { writeFile } from "fs/promises";

export const saveToJsonFile = (target: any, fileName: string) =>
  writeFile(`${fileName}.json`, JSON.stringify(target, null, 4));
