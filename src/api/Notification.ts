
import useGetQueryPagination from "./helper/ueGetPagination";
import { useUploadWithProgress } from "./helper/useUploadWithProgress";
// import   {useUploadWithProgress} from "./helper/useUploadWithProgress"

const API = {
  GET: `/api/admin/latest-news/all`,
  ADD: `/api/admin/latest-news/create`,
};

const KEY = "Notification";
export const useGetNotifications = (params?:any) => useGetQueryPagination(KEY, API.GET, params);
export const useAddNotification = () => useUploadWithProgress(KEY, API.ADD);

