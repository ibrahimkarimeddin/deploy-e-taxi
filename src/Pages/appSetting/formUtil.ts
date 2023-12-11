
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {
  value:string
  
}

interface ObjectToEdit extends formUtilCommon {

    id?:number,
    title:string,
    key:string,
    is_percentage:number,
}

export interface InitialValues  extends formUtilCommon {
  id?:number,
  name:string,
  key:string,
  is_percentage:number,
}
interface ValidateSchema  extends formUtilCommon{
  name:string,
   
}

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): InitialValues => {
 
// console.log(objectToEdit);

  return {
    id:objectToEdit?.id?? 0 ,
    name:objectToEdit?.title ?? "",
    value:objectToEdit?.value?? "",
    key:objectToEdit?.key?? "",
    is_percentage:objectToEdit?.is_percentage?? 0,
  }

};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
  return Yup.object().shape({
    name:Yup.string().required('required'),
    value:Yup.string().required("required")
  });
};

export const getDataToSend = (values: any): FormData => {
  const data = { ...values };
  
  
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

