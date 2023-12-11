import useGetQueryPagination from "./helper/ueGetPagination";
import useGetQuery from "./helper/useGetQuery"

const API = {
  GET: `/api/admin/driver-rate/all`,
};

const KEY = "RATE";
export const useGetDriverRate = (params?:any) => useGetQueryPagination(KEY, API.GET,params);

