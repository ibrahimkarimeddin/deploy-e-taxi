
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import ColumnsImage from "../../Components/Columns/ColumnsImage";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: t("title"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.title
      },
      {
        name: t("content"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.content
      },
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.image} />
          )
        }
      },
     
    
    ],
    [t]
  );
};

export default useTableColumns;

