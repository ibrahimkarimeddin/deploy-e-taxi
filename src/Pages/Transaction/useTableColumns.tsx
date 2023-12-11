
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: t("person_from"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.transaction_from_type
      },
      {
        name: t("person_to"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.transaction_to_type
      },
      {
        name: t("value"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.value
      },
      {
        name: t("transaction_date"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.created_at
      },
     
    ],
    [t]
  );
};

export default useTableColumns;

