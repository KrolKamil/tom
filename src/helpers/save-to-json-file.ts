import { writeFile } from "fs/promises";

export const saveToJsonFile = async (target: any, fileName: string) => {
  await writeFile(`${fileName}.json`, JSON.stringify(target, null, 4));
  await writeFile(`./fe/src/${fileName}.json`, JSON.stringify(target, null, 4));
};
