import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { toast } from 'react-toastify';
import useAxios from './useAxios';

type AxiosResponse = {
  message: string;
  // Add other properties as needed
};

function useDeleteMutation(key:any , url: string, object_id?:any): UseMutationResult<AxiosResponse, unknown, any, unknown> {
  const axios = useAxios();
  const queryClient = useQueryClient();

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
        toast.success('Deleted');
      }
    }
  );
}

export default useDeleteMutation;
