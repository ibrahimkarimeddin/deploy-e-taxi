
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { useNavigate } from "react-router-dom";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const Navigate = useNavigate();
  return useMemo(
    () => [
 
      {
        name: t("customer_name"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.customer_name
      },

      {
        name: t("driver_name"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.driver_name
      },

      {
        name: t("paid_type"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.payment_method
      },

      {
        name: t("status"),
        sortable: false,
        center: "true",
        cell: (row:any) => 
        <span style={{
          backgroundColor:row?.order_status==='accepted'||row?.order_status==='complete'||row?.order_status==='pick_up'?"#28c76f":row?.order_status==='pending'?'#b8c2cc':"#ff0000"
          ,width:100  ,padding:9, color:'white',borderRadius:12,fontSize:11, textAlign:"center"}}>
          {t(row?.order_status)}
        </span>
      },

      {
        name: t("order_price"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.real_cost
      },

      {
        name: t("money_received"),
        sortable: false,
        center: "true",
        cell: (row:any) => parseFloat(row?.real_cost) + parseFloat(row?.cash_remaining||0)
      },
      {
        name: t("end_tripe_date"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.end_tripe_date
      },

      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions
            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => {}}
              onView={()=>{Navigate(`/order/${row?.order_id}`)}}
              objectToEdit={row}
              showEdit={false}
              showDelete={false}
              onDelete={() => {}}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

