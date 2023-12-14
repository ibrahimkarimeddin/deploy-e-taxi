import * as Yup from "yup";
import { buildFormData } from "../../../api/helper/buildFormData";

interface FormValues {
  content: string;
  type: any;
  send_to: string;
  image: string;
  title: string;
  select: string;
}

export const getInitialValues = (): any => {
  return {
    content: "",
    type: {label:"driver" , value:"driver"},
    send_to: "",
    image: "",
    title: "",
    select: ""
  };
};

export const getValidationSchema = (editMode = false) => {
  return Yup.object().shape({
    content: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    type: Yup.mixed().required("Required"),
    send_to: Yup.string().required("Required"),
    // code: Yup.string().when("send_to", {
    //   is: (to: string) => {
    //     return to === "one";
    //   },
    //   then: Yup.string().required("Required"),
    //   otherwise: Yup.string()
    // })
  });
};

export const getDataToSend = (values: FormValues): FormData => {
  const data = { ...values };
  if (values.image === "") {
    // delete data["image"];
  }
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};

interface SelectOption {
  value: string;
  label: string;
}

export const selectFailGender: SelectOption[] = [
  { value: "female", label: "female" },
  { value: "male", label: "male" }
];

export const Convert_data_to_select = (array: any[]): SelectOption[] => {
  let new_array: SelectOption[] = [];
  for (let index = 0; index < array.length; index++) {
    new_array.push({
      value: array[index].id,
      label: array[index].full_name
    });
  }
  return new_array;
};

export const get_id_from_array = (array: SelectOption[]): string[] => {
  let new_array: string[] = [];
  for (let index = 0; index < array.length; index++) {
    new_array.push(array[index].value);
  }
  return new_array;
};