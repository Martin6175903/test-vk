export const PUBLIC_URL = {
  root: (url = '') => `${url ? url : ''}`,

  home: (url = '') => PUBLIC_URL.root(`/${url ? url : ''}`)
};
