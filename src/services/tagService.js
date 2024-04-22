import { get } from "../utils/request";

export const getListTag = async () => {
  const result = await get(`tags.json`);
  return result;
};