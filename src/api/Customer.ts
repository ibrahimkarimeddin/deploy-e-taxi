
import useGetQueryPagination from "./helper/ueGetPagination";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
const API = {
  GET: `/api/admin/customer/all`,
  GET_ONE:`/api/admin/customer/get`,
  BLOCK: `/api/admin/customer/block-status`,
  UPDATE: `/api/admin/customer/update`,
  DELETE: `/api/admin/customer/delete`,
  GET_ORDER_CUSTOMER_WITH_OUT_PAGINITION:`/api/admin/customer/all-without-pagination` ,
  UNBLOCK:`/api/admin/customer/unblock` , 
  UPDATE_STATUS: `/api/admin/customer/update_customer_status`,
  GIFT:`api/admin/code/give-gift`,
  UPDATE_STATUS2:`/api/admin/verfiy_customer`,
  FavTrip:`/api/admin/customer/favourit_trip`
};

const KEY = "CUSTOMER";
export const useGetcustomer = (params?:any)=> useGetQueryPagination(KEY, API.GET, params);

export const useGetcustomerWithOutPaginition = (params?:any)=> useGetQuery(KEY, API.GET_ORDER_CUSTOMER_WITH_OUT_PAGINITION, params);
export const useGetSingleCustomer = (params?:any)=> useGetQuery(KEY, API.GET_ONE, params);
export const useBlockCustomer = () =>useAddMutation(KEY, API.BLOCK );
export const useDeleteCustomer = ()=> useDeleteMutation(KEY, API.DELETE, 'customer_id') 
export const useUnBlockCustomer = () =>useAddMutation(KEY, API.UNBLOCK );
export const useGiftCustomer= () =>useAddMutation(KEY, API.GIFT );

export const useToggleStatusCustomer = () =>useAddMutation(KEY, API.UPDATE_STATUS2);

export const useGetFavTrips = (params?:any) =>useGetQuery(KEY, API.FavTrip, params);
