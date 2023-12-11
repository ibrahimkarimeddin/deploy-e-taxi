
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  name: string,
  email: string
}

interface ObjectToEdit extends formUtilCommon {

  id?: number,

}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema extends formUtilCommon {

}

export const getInitialValues = (objectToEdit: any | null = null): any => {


  return {
    id: objectToEdit?.id ?? 0,
    full_name: objectToEdit?.full_name ?? "",
    code: objectToEdit?.code ?? "",
    birthday: objectToEdit?.birthday ?? "",
    phone: objectToEdit?.phone ?? "",
    gender: objectToEdit?.gender ?? "",
    avatar: objectToEdit?.avatar ?? "",
    wallet: objectToEdit?.wallet ?? "",
    created_at: objectToEdit?.created_at ?? "",
    city: objectToEdit?.city ?? "",

  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
  // validate input  
  return Yup.object().shape({
    name: Yup.string().required('required'),
    email: Yup.string().required("required")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };


  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

