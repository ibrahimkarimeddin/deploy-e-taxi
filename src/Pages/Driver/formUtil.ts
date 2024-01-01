import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";

interface formUtilCommon {

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
    driver_id:objectToEdit?.id ?? 0,
    full_name: objectToEdit?.full_name ?? "",
    code: objectToEdit?.code ?? "",
    wallet: objectToEdit?.wallet ?? "",
    city: objectToEdit?.city?.google_short_name ?? "",
    status: objectToEdit?.status ?? "",
    block_timer: objectToEdit?.block_timer ?? "",
    birthday: objectToEdit?.birthday ?? "",
    phone: objectToEdit?.phone ?? "",
    driver_image: objectToEdit?.avatar??'',
    created_at: objectToEdit?.created_at ?? "",

    //// Bacic info
    car_type: objectToEdit?.car_type ?? "",
    car_model: objectToEdit?.car_model ?? "",
    car_seat_count: objectToEdit?.car_seat_count ?? "",
    car_color: objectToEdit?.car_color ?? "",


    
    driver_image1: objectToEdit?.images[0]?.media_path??'',
    driver_image2: objectToEdit?.images[1]?.media_path??'',
    driver_image3: objectToEdit?.images[2]?.media_path??'',
    driver_image4: objectToEdit?.images[3]?.media_path??'',
    driver_image5: objectToEdit?.images[4]?.media_path??'',
    driver_image6: objectToEdit?.images[5]?.media_path??'',
    driver_image7: objectToEdit?.images[6]?.media_path??'',
    driver_image8: objectToEdit?.images[7]?.media_path??'',
    driver_image9: objectToEdit?.images[8]?.media_path??'',
    driver_image10: objectToEdit?.images[9]?.media_path??'',
    driver_image11: objectToEdit?.images[10]?.media_path??'',
    driver_image12: objectToEdit?.images[11]?.media_path??'',
    driver_image13: objectToEdit?.images[12]?.media_path??'',

    
    
    






















  }


};

export const getValidationSchema = (editMode: boolean = false): Yup.Schema<ValidateSchema> => {
  // validate input  
  return Yup.object().shape({
    // name: Yup.string().required('required'),
    // status: Yup.boolean().required("status")
  });
};

export const getDataToSend = ({values}: any) => {
  const data = { ...values };


  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};


export const change_values_shap = (object:any)=>{

  const new_array = []
 
 
     console.log(object);
   for(const opt in object){
     if(opt.includes('driver_image') && opt != 'driver_image'){
       console.log("IMAGES ",object[opt]);
       new_array.push(object[opt])
     }
   }
   return  new_array 
   
 
 }