import { useState } from "react";
import { useQueryClient, useMutation, MutationFunction } from "react-query";
import { toast } from "react-toastify";
import useAxios from "./useAxios";
import { AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";
import { QueryStatusEnum } from "../../config/QueryStatus";
// import { validateSession } from "./validateSession";

interface UploadWithProgressReturnType {
  percentCompleted: number;
  mutate: MutationFunction;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  isSuccess:boolean,
  value:any,
  status : QueryStatusEnum
}

export const useUploadWithProgress = (
  key: string,
  url: string
): UploadWithProgressReturnType => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const t = useTranslation();
  const [percentCompleted, setPercentCompleted] = useState<number>(0.0);

  const mutation = useMutation<
    AxiosResponse<any>,
    unknown,
    any,
    {
      onSuccess: (data: AxiosResponse<any>) => void;
      onError: (error: unknown) => void;
    }
  >(
    async (dataToSend) => {
      setPercentCompleted(0.0);
      const { data } = await axios.post(url, dataToSend, {
        onUploadProgress: (event:any) => {
          console.log();
          
          if (event?.event?.lengthComputable) {
            setPercentCompleted(Math.round((event.loaded * 100) / event.total));
          }
        },
      });
      return data;
    },
    {
      onSuccess: ({ data }) => {
        toast.success(data.message || ("_messages.success.upload"));
        queryClient.invalidateQueries([key]);
      },
      onError: (err:any) => {
        const message =
          err?.response?.data?.message || ("_messages.error.upload");
        toast.error(message);
        // validateSession(err.response);
      },
    }
  );

  return {
    percentCompleted,
    value:percentCompleted,
    mutate: mutation.mutate as MutationFunction,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess :mutation.isSuccess,
    status : mutation.status as QueryStatusEnum 
  };
};