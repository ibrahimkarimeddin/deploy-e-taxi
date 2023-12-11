
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";

interface translatedFields {
  "1":{

    category_name:string 
  },
  "2":{

    category_name:string 
  }

  
}
interface formUtilCommon {
  translated_fields :translatedFields
  special_delivery_fee:string 
}

interface ObjectToEdit  {

  category_details:Array<any>
  category_image:string
  category_sort:number
  created_at: string 
  id: number
  is_active: boolean
  special_delivery_fee: string
  subcategories_count: number
  updated_at: string 

}

export interface InitialValues   extends formUtilCommon{
  category_sort: number ,
  category_image: any,
  
   
}
interface ValidateSchema  extends formUtilCommon{
  category_image?: any,

 
}

export const getInitialValues = (objectToEdit: ObjectToEdit| null = null): InitialValues => {
 

  if (!objectToEdit) {
    return {
      translated_fields: {
        1: {
          category_name: "",
        },
        2: {
          category_name: "",
        },
      },
      category_image: "",
      category_sort: 1,
      special_delivery_fee:'0'
    };
  }

  return {
    translated_fields: {
      1: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.category_details,
            "category_name",
            1
          ) || "",
      },
      2: {
        category_name:
          mapTranslatedProperties(
            objectToEdit?.category_details,
            "category_name",
            2
          ) || "",
      },
    },
    category_image: objectToEdit?.category_image ,
    special_delivery_fee:objectToEdit?.special_delivery_fee||'0',
      category_sort: objectToEdit.category_sort ?? 1,
  };

};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
    // validate input  
    return Yup.object().shape({
      translated_fields: Yup.object({
        '1': Yup.object({
          category_name: Yup.string().required("required"),
        }),
        '2': Yup.object({
          category_name: Yup.string().required("required"),
        }),
      }),
      special_delivery_fee:Yup.string().required("required"),
  
  
      ...(!editMode && {
        category_image: Yup.mixed().required("required"),
      }),
  
    });
};

export const getDataToSend = (values: InitialValues): FormData => {
  const data = { ...values };
  
  if (values.category_image === "") {
    delete data["category_image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

