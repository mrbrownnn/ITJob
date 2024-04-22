const API_DOMAIN = "https://it-job-ca2b9-default-rtdb.asia-southeast1.firebasedatabase.app/";

export const get = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, options);
  const data = await response.json();
  const result=[];
  for (const key in data) {
    result.push(data[key]);
  }
  return result;
};

export const post = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const data = await response.json();
  const result=[];
  for (const key in data) {
    result.push(data[key]);
  }
  return result;
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  const data = await response.json();
  const result=[];
  for (const key in data) {
    result.push(data[key]);
  }
  return result;
};

export const patch = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const data = await response.json();
  const result=[];
  for (const key in data) {
    result.push(data[key]);
  }
  return result;
};

export const getKey = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, options);
  const data = await response.json();
  const result=[];
  for (const key in data) {
    result.push(key);
  }
  return result[0];
};