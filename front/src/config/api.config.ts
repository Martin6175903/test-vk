export const SERVER_URL = import.meta.env.VITE_SERVER_URL as string;
export const API_SERVER_URL = import.meta.env.VITE_API_SERVER_URL as string;

export const API_URL = {
  root: (url = '') => `${SERVER_URL}/${url ? url : ''}`,

  cats: (url = '') => API_URL.root(`cats${url}`)
};

export const API_CAT_URL = {
  root: (url = '') => `${API_SERVER_URL}${url ? url : ''}`
};
