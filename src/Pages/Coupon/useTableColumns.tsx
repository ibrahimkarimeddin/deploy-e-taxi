
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();

  return useMemo(
    () => [
 
      {
        name: t("code"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.code
      },
      {
        name: t("value"),
        sortable: false,
        center: "true",
        cell: (row:any) => +(row.value)
      },
      {
        name: t("created_at"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.user_name
      },
      {
        name: t("created_at"),
        sortable: false,
        center: "true",
        cell: (row:any) => {

          return(
            <p style={{
              background:!row.deleted_at ?'#19ab27':'#ea5454',
              color:"white",
              padding:6,
              borderRadius:10,
              position:"relative",
              top:'7px'
            }}>
              {
                !row.deleted_at ? t('available') : t('unavailable')

              }
            </p>
          ) 
        }
      },
      {
        name: t("created_at"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.created_at
      },
     
    ],
    [t]
  );
};

export default useTableColumns;

