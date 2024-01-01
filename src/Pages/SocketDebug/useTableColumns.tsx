
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";


const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: t("event"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.event
      },
     
      {
        name: t("room"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.room
      },
      {
        name: t("socket_id"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.socket_id
      },
      {
        name: t("data"),
        sortable: false,
        center: "true",
        cell: (row:any) => JSON.stringify(row?.data)
      }
    ],
    [t]
  );
};

export default useTableColumns;

