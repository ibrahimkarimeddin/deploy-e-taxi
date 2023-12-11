
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useDeleteRole } from "../../api/Role";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const {mutate} = useDeleteRole();

  return useMemo(
    () => [
 
      {
        name: t("role"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.name
      },
      {
        name: t("number_permissions"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.permission_count
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions
            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={false}
              showView={false}
              onDelete={() => mutate({ id: row?.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

