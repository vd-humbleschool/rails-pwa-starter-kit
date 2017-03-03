const API_BASE_URL = (process.env.NODE_ENV === 'production') ?
    "https://rails-pwa-starter-kit.herokuapp.com" :
    "http://localhost:3001";

export const apiEndpoint = (path) => {
  return `${API_BASE_URL}${path}`;
};
