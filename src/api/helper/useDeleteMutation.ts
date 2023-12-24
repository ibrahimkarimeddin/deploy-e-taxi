import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from './useAxios';
import { useTranslation } from 'react-i18next';

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

function useDeleteMutation(key:any , url: string, object_id?:any): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {t} = useTranslation();

  return useMutation<AxiosResponse, unknown, any, unknown>(
    async ({dataToSend,id}:any) => {
      const { data } = await axios.post(url ,{
        [object_id]:id,
        dataToSend,
      });
      return {...data, id,dataToSend};
    },
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(key);
        toast.success(t('deleted_successfully'));
      }
    }
  );
}

export default useDeleteMutation;
