

import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: `/api/admin/driver/all`,
    GetOne:`/api/admin/driver/get`,
    ADD: "/api/admin/Driver/create",
    UPDATE: "/api/admin/driver/update",
    DELETE: "/api/admin/Driver/delete",
    BLOCK:`api/admin/driver/block-status`,
    GIFT:`api/admin/code/give-gift`,
    UNBLOCK:`api/admin/driver/unblock`,
    SENDNOT:`/api/admin/driver/accept`,
    UPDATE_STATUS2:`/api/admin/verfiy_driver`,
    GET_ORDER_DRIVER_WITH_OUT_PAGINITION:`/api/admin/driver/all-without-pagination` ,
    GET_DRIVRE_TRACK_INFO:`/api/admin/driver/track_info`
  };
  
  const KEY = "DRIVER";
    const KEY2 = "DRIVER2";

  export const useGetDriver = (params?:any) => useGetQueryPagination(KEY, API.GET, params);
  export const useGetOneDriver = (params?:any) => useGetQueryPagination(KEY2, API.GetOne, params);
  export const useAddDriver = () => useAddMutation(KEY, API.ADD);
  export const useUpdateDriver = () => useUpdateMutation(KEY, API.UPDATE);
  export const useDeleteDriver = () =>useDeleteMutation(KEY, API.DELETE);
  export const useAcceptedDriver = ()=>useAddMutation(KEY ,API.SENDNOT )
  export const useBlockDriver = () =>useAddMutation(KEY, API.BLOCK );
  export const useGiftDriver = () =>useAddMutation(KEY, API.GIFT );
  export const useUnBlockDriver = () => useAddMutation(KEY, API.UNBLOCK);
  export const useToggleStatusDriver = () =>useAddMutation(KEY, API.UPDATE_STATUS2);
  export const useGetDriverForSelect=(params:any)=>useGetQuery("SINGLE",API.GET_ORDER_DRIVER_WITH_OUT_PAGINITION,params);


  export const useGetDriverInfoForSystemTrack  = (params:any , options :any)=>useGetQuery("SINGLE_DRIVER"  , API.GET_DRIVRE_TRACK_INFO , params , options )