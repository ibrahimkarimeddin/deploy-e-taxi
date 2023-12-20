
// const API = {
//   GET: `/api/admin/driver/all`,
// SINGLE_DRIVER:`/api/admin/driver/get`,
// GET_ORDER_DRIVER:`/api/admin/driver/orders` ,
// GET_ORDER_DRIVER_WITH_OUT_PAGINITION:`/api/admin/driver/all-without-pagination` ,
// ADD: `/api/admin/driver/add`,
// UPDATE: `/api/admin/driver/update`,
// DELETE: `/api/admin/driver/delete`,
// UPDATE_STATUS: `/api/admin/driver/update_driver_status`,
// SENDNOT:`/api/admin/driver/accept`,
// BLOCK:`api/admin/driver/block-status`,
// GIFT:`api/admin/code/give-gift`,
// UNBLOCK:`api/admin/driver/unblock`,
// IMAGES:`api/admin/driver/update`,
// UPDATE_STATUS2:`/api/admin/verfiy_driver`

// };

// const KEY2 = "DRIVER2";
// const KEY = "DRIVER";
// export const useGetOneDriver = (params?:any) => useGetQueryPagination1(KEY2, API.SINGLE_DRIVER, params);
// export const useGetDriver = (params?:any) => useGetQueryPagination(KEY, API.GET, params);
// export const useGetSingleDriver=(params:any)=>useGetQuery("SINGLE",API.SINGLE_DRIVER,params);
// export const useGetDriverForSelect=(params:any)=>useGetQuery("SINGLE",API.GET_ORDER_DRIVER_WITH_OUT_PAGINITION,params);
// export const useGetDriverOrder = (params:any) => useGetQuery(KEY, API.GET_ORDER_DRIVER , params);
// export const useAddDriver = () => useAddMutation(KEY, API.ADD);
// export const useUpdateDriver = () => useUpdateMutation(KEY, API.UPDATE);
// export const useDeleteDriver = () =>useDeleteMutation(KEY, API.DELETE, "driver_id"
// // , "driver"
// );
// export const useBlockDriver = () =>useAddMutation(KEY, API.BLOCK );
// export const useGiftDriver = () =>useAddMutation(KEY, API.GIFT );
// export const useAcceptedDriver = ()=>useAddMutation(KEY ,API.SENDNOT )
// export const useUnBlockDriver = () => useAddMutation(KEY, API.UNBLOCK);
// export const useUpdateSingleDriver = ()=> useUploadWithProgress(KEY , API.IMAGES )

// export const useToggleStatusDriver = () =>useAddMutation(KEY, API.UPDATE_STATUS2);


import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
  const API = {
    GET: `/api/admin/driver/all`,
    GetOne:`/api/admin/driver/get`,
    ADD: "/api/admin/Driver/create",
    UPDATE: "/api/admin/Driver/update",
    DELETE: "/api/admin/Driver/delete",
    BLOCK:`api/admin/driver/block-status`,
    GIFT:`api/admin/code/give-gift`,
    UNBLOCK:`api/admin/driver/unblock`,
    SENDNOT:`/api/admin/driver/accept`,
    UPDATE_STATUS2:`/api/admin/verfiy_driver`,
    GET_ORDER_DRIVER_WITH_OUT_PAGINITION:`/api/admin/driver/all-without-pagination` ,

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