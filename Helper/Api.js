import api from "../api";

export const getPageData = async ({ limit, activePage }) => {
  const res = await api.get(`/user?limit=${limit}&page=${activePage}`);
  return res.data.user;
};

export const getAllData = async () => {
  const res = await api.get(`/user`);
  return res.data.user;
};

export const getSingleUser = async (id) => {
  const res = await api.get(`/user?id=${id}`);
  return res;
};

export const addUserApi = async (data) => {
  const res = await api.post("/create-user", data);
  return res;
};

export const deleteUserApi = async (id) => {
  const res = await api.delete(`/delete-user?id=${id}`);
  return res;
};

export const updateUserApi = async (id, data) => {
  const res = await api.patch(`/update-user?id=${id}`, data);
  return res;
};

export const searchUserApi = async ({ searchKey, searchValue }) => {
  console.log(searchKey, searchValue);
  const res = await api.get(`/search?${searchKey}=${searchValue}`);
  return res;
};

export const SendMailApi = async () => {
  const res = await api.get(`/send-mail`);
  return res;
};

