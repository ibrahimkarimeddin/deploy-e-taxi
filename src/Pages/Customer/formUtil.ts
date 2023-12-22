
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  name: string,
  status: any
}

interface ObjectToEdit extends formUtilCommon {

  id?: number,

}

interface InitialValues extends ObjectToEdit {

}
interface ValidateSchema extends formUtilCommon {

}

export const getInitialValues = (objectToEdit: any | null = null): any => {
  console.log(objectToEdit?.images?.at(0)?.media_path, "objectToEdit");
// console.log(objectToEdit);

  return {
    id: objectToEdit?.id ?? 0,
    customer_name:objectToEdit?.full_name ?? "",
    customer_code:objectToEdit?.code ?? "",
    customer_phone: objectToEdit?.phone ?? "",
    customer_image: objectToEdit?.avatar ?? "",
    customer_wallet: objectToEdit?.wallet ?? "",
    customer_city:objectToEdit?.city?.google_short_name ?? "",
    
  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
  // validate input  
  return Yup.object().shape({
    name: Yup.string().required('required'),
    status: Yup.boolean().required("status")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };


  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

