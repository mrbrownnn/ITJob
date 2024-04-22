import { get, patch, post } from "../utils/request";

export const login = async (email) => {
  const result = await get(`company.json?orderBy="email"&equalTo="${email}"&print=pretty`);
  return result;
};

export const checkExist = async (type, value) => {
  const result = await get(`company.json?orderBy="${type}"&equalTo="${value}"&print=pretty`);
  return result;
};

export const createCompany = async (options) => {
  const result = await post(`company.json`, options);
  return result;
};

export const getDetailCompany = async (id) => {
  const result = await get(`company.json?orderBy="id"&equalTo="${id}"&print=pretty`);
  return result;
};

export const editCompany = async (id, options) => {
  const result = await patch(`company.json?orderBy="id"&equalTo="${id}"&print=pretty`, options);
  return result;
};

export const getAllCompany = async () => {
  const result = await get(`company.json`);
  return result;
};