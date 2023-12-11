
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: "/api/admin/Privacy",
    ADD: "/api/admin/Privacy/create",
    UPDATE: "/api/admin/Privacy/update",
    DELETE: "/api/admin/Privacy/delete",
  };
  
   
  const KEY = "PRIVACY";
  export const useGetPrivacy = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddPrivacy = () => useAddMutation(KEY, API.ADD);
  export const useUpdatePrivacy = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeletePrivacy = () =>useDeleteMutation(KEY, API.DELETE);
