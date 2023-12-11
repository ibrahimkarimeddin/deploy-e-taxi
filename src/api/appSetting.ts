
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    ADD: "/api/admin/app-setting/create",
    GET: `/api/admin/app-setting/all`,
    UPDATE: `api/admin/app-setting/update`,
    DELETE: `/api/admin/app-setting/delete`,

  };
  
   
  const KEY = "APPSETTING";
  export const useGetAppSetting = (params?:any) => useGetQuery(KEY, API.GET, params);
  export const useAddAppSetting = () => useAddMutation(KEY, API.ADD);
  export const useUpdateAppSetting = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteAppSetting = () =>useDeleteMutation(KEY, API.DELETE,"setting_id");
