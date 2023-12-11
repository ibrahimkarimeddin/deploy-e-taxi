
import useGetQueryPagination from "./helper/ueGetPagination"
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
const KEYS={
  ORDERS:"ORDERS",
  SINGLE_ORDER:"SINGLE_ORDER"
}
const API={
  GET_ORDERS:`/api/admin/order/all`,
  SINGLE_ORDER:`/api/admin/order/get`,
  UNACCEPTED:`api/admin/order/all-unaccepted`,
  CANCEL:`api/admin/order/cancel`



}   
export const useGetOrders=(params?:any, options?:any)=>useGetQueryPagination(KEYS.ORDERS,API.GET_ORDERS,params, options);
export const useGetSingleOrder=(params?:any)=>useGetQuery(KEYS.SINGLE_ORDER,API.SINGLE_ORDER,params);
export const useGetUnAcceptableOrders=(params?:any)=>useGetQuery(KEYS.ORDERS,API.UNACCEPTED,params);

export const useCancelOrder=()=>useAddMutation(KEYS.SINGLE_ORDER,API.CANCEL);
