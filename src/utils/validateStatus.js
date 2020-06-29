export const validateStatus = status => {
  return status === 200 || status === 400 || status === 401 || status === 500;
};
