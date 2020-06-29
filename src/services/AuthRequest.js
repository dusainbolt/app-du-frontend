import api  from "../services/api";

export const postLoginApi = params => {
  return api.post("/admin/login", params);
};

export const postAuthAdminApi = params => {
  return api.get(`/admin/auth?token=${params.token}`);
};

export const postLogoutAdminApi = () => {
  return api.get("/admin/logout");
};

export const postChangePasswordAdminApi = params=> {
  return api.post("/admin/change_password", params);
};