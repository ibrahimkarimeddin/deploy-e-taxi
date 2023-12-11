
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { Rate } from "antd";
import { useNavigate } from 'react-router-dom'

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()

  return useMemo(
    () => [
 
      {
        name: t("rate"),
        sortable: false,
        center: "true",
        cell: (row:any) => (
          <Rate defaultValue={row?.value} disabled/>
        )
      },
      {
        name: t("driver"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.driver
      },
      {
        name: t("order_code"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.order_code
      },
      {
        name: t("reason"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.reason
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{navigate('/information/driver/'+row?.id)}}
              objectToEdit={row}
              showEdit={false}
              onDelete={()=>{}}
              showDelete={false}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

