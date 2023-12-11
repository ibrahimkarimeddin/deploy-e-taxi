import useGetQueryPagination from "./helper/ueGetPagination";

const API = {
  GET: `/api/admin/transaction/all`,


};

const KEY = "TRANSACTIONS";
export const useGetAllTransaction = (params?:any) => useGetQueryPagination(KEY, API.GET);

