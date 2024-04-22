import { del, get, patch, post, getKey } from "../utils/request";

export const getListCV = async (id) => {
  const result = await get(`cv.json?orderBy="idCompany"&equalTo="${id}"&print=pretty`);
  return result;
};

export const getDetailCV = async (id) => {
  const result = await get(`cv.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  return result;
};

export const changeStatusCV = async (id, options) => {
  const key = await getKey(`cv.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  const result = await patch(`cv/${key}.json`, options);
  return result;
};

export const deleteCV = async (id) => {
  const key = await getKey(`cv.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  const result = await del(`cv/${key}.json`);
  return result;
};

export const createCV = async (options) => {
  const result = await post(`cv.json`, options);
  return result;
};