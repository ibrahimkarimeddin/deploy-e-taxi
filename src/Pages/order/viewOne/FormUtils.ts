import * as Yup from 'yup';
import { buildFormData } from '../../../api/helper/buildFormData';

interface ObjectToEdit {
  driver_name: string;
  driver_id_number: string;
  // Add other properties and their types based on your data structure
}

interface Values {
  driver_name: string;
  driver_id_number: string;
  customer_image?: string;
  driver_car_back_side?: string;
  subcategory_image?: string | Blob;
  // Add other properties and their types based on your data structure
}
interface ValidationSchema {
    driver_name?: string;
    driver_id_number?: string;
    customer_image?: string;
    driver_car_back_side?: string;
    subcategory_image?: any;
    // Add other properties and their types based on your data structure
  }

export const getInitialValues = (objectToEdit: ObjectToEdit | null = null): Values => {
  if (!objectToEdit) {
    return {
      driver_name: '',
      driver_id_number: '',
      driver_car_back_side: '',
    };
  }

  return {
    driver_name: objectToEdit.driver_name,
    driver_id_number: objectToEdit.driver_id_number,
    customer_image: '',
    driver_car_back_side: '',
  };
};

// export const getValidationSchema = (editMode = false): ValidationSchema => {
//   return Yup.object().shape({
//     driver_id_number: Yup.mixed().required('required'),

//     // ...(editMode
//     //   ? {}
//     //   : {
//     //       subcategory_image: Yup.mixed().required('required'),
//     //     }),
//   });
// };

export const getDataToSend = (values: Values): FormData => {
  const data = { ...values };
  if (values.subcategory_image === '') {
    delete data['subcategory_image'];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

export const selectFailGender = [
  { value: 'female', label: 'female' },
  { value: 'male', label: 'male' },
];

export const ChangePointShape = (array_of_points: string[]): { lat: number; lng: number }[] => {
  let my_new_array: { lat: number; lng: number }[] = [];

  for (let index = 0; index < array_of_points.length; index += 5) {
    const my_latlong = array_of_points[index].split(',');
    my_new_array.push({
      lat: +my_latlong[0],
      lng: +my_latlong[1],
    });
  }
  return my_new_array;
};
