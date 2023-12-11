
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
  
const API = {
  ADD: `/api/admin/code/create`,
  GET_ALL: `/api/admin/code/all`,
  DELETE: `/api/admin/code/delete`,
  GET_ALL_WITH_OUT_PAGINITIONS:`api/admin/code/all-without-pagination`



};
const KEY = "CODE"

export const useGetCode = (params?:any) => useGetQueryPagination(KEY, API.GET_ALL,params);
export const useGetAllCodeWithOutPaginitions = () => useGetQuery(KEY, API.GET_ALL_WITH_OUT_PAGINITIONS);

export const useAddCode = () => useAddMutation(KEY, API.ADD);
export const useDeleteCode = () =>useDeleteMutation(KEY, API.DELETE, "code_id");
