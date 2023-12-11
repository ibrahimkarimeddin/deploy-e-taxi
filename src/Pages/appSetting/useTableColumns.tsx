
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useDeleteAppSetting } from "../../api/appSetting";


const useTableColumns :any = () => {
  const [t] = useTranslation();
  const {mutate} = useDeleteAppSetting();
  return useMemo(
    () => [
 
      {
        name: t("name"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.title
      },
      {
        name: t("value"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.value
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions

              onEdit={() => {}}
              showView={false}
              objectToEdit={row}
              showEdit={true}
              // showDelete={false}
              onDelete={() => mutate({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

