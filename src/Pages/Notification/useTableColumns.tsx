
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";

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
        sortable: false,
        center: true,
        cell: (row:any) => (
          <HovarableImage
            id={`category_image_${row.id}`}
            src={`${BaseURL}${row.image}`}
            width="35"
          />
        ),
      },
     
    
    ],
    [t]
  );
};

export default useTableColumns;

