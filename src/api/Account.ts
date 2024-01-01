
import { VENDOR } from "../config/RoleConfige";
import { buildFormData } from "./helper/buildFormData";
import useAddMutation from "./helper/useAddMutation"
import useDeleteMutation from "./helper/useDeleteMutation"
import useGetQuery from "./helper/useGetQuery"
import useUpdateMutation from "./helper/useUpdateMutation"
  
const API = {
  GET: `/api/admin/account/all`,
  GET_ALL_PER:`/api/admin/role/all-permissions` ,
  GET_ALL_ROLE:`/api/admin/role/all` ,
  ADD: `/api/admin/account/create`,
  GETWALLET:`/api/admin/account/get-wallet`,
  UPDATEWALLET:`/api/admin/account/add-to-wallet`,
  UPDATE: `/api/admin/account/update`,
  DELETE: `/api/admin/account/delete`,
  UPDATE_MY_ACCOUNT:`/api/admin/account/update-my-account`,
  UPDATE_PASSWORD: `/api/admin/account/change-password`,

};

const KEY: string = "ADMINS";
const MY_ACCOUNT: string = "MY_ACCOUNT";
export const useGetAccounts = (): any => useGetQuery(MY_ACCOUNT, API.GET);
export const useGetWallet = (): any => useGetQuery("WALLET", API.GETWALLET);
export const useUpdateWallet = (): any => useAddMutation("WALLET", API.UPDATEWALLET);

export const useAddAccount = (): any => useAddMutation(MY_ACCOUNT, API.ADD);
export const useUpdateAccount = (): any => useUpdateMutation(MY_ACCOUNT, API.UPDATE);
export const useChangePassword = (): any => useUpdateMutation(MY_ACCOUNT, API.UPDATE_PASSWORD);
export const useDeleteAccount = (): any =>useDeleteMutation(MY_ACCOUNT, API.DELETE, "account_id");

export const getDataToSend = (values?: any, editMode?: boolean, objectToEdit?: any): any => {
  const formData = new FormData();
  const objectToSend = {
    ...values,
    ...(editMode && { account_id: objectToEdit.id }),
  };
  if (editMode) {
    delete objectToSend["password"];
    delete objectToSend["password_confirmation"];
  }
  if(values.role!==VENDOR){
    delete objectToSend["shop_id"]
  }

  buildFormData(formData, objectToSend);
  return formData;
};
export const useUpdateMyAccount = (): any => useUpdateMutation(MY_ACCOUNT, API.UPDATE_MY_ACCOUNT);