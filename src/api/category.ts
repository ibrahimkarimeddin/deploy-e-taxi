
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import { useToggleStatus } from "./helper/useToggleStatus";
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/api/admin/categories",
    ADD: "/api/admin/categories/add",
    UPDATE: "/api/admin/categories/update",
    DELETE: "/api/admin/categories/delete",
    UPDATE_STATUS: `/api/admin/categories/update_category_status`,
  };
  
   
  const KEY = "CATEGORY";
  export const useGetCategory = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddCategory = () => useAddMutation(KEY, API.ADD);
  export const useUpdateCategory = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteCategory = () =>useDeleteMutation(KEY, API.DELETE);
  export const useUpdateCategoryStatus = () =>useToggleStatus(KEY, API.UPDATE_STATUS, "category_id");