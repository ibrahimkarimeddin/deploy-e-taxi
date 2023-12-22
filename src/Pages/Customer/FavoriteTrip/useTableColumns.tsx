
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [

      {
        name: t("email"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.email
      },
      {
        name: t("email"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.email
      },
      {
        name: t("email"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.email
      },
      {
        name: t("email"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.email
      },
     
    ],
    [t]
  );
};

export default useTableColumns;

