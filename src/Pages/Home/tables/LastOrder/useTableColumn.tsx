import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const useTableColumns = () => {
    const {t} = useTranslation();

    const navigate  =  useNavigate()
    return useMemo(
        () => [
          
            {
                name: t("driver_name"),
                sortable: false,
                center: true,
                cell:(row:any)=>{
                   
                    return (row?.driver?.full_name)
                }

            },

            {
                name: t("order_total"),
                sortable: true,
                center: true,
                selector:"average_cost"
            },
            {
                name: t("order_status"),
                sortable: false,
                center: true,
                cell:(row:any)=><span style={{
                    backgroundColor:row.status==='accepted'||row.status==='complete'||row.status==='pick_up'?"#28c76f":row.status==='pending'?'#b8c2cc':"#ff0000"
                    ,padding:8, color:'white',borderRadius:10,fontSize:10}}>{t(row.status)}</span>
                
            },
            {
                name: "#",
                selector: "action",
                sortable: false,
                center: true,
                cell: (row:any) => (
                    <GrView
                        onClick={() => navigate(`/order/${row?.id}`, {replace:true})}
                        size={22}
                        style={{ cursor: "pointer" }}
                    />
                ),
            },


        ],
        [t]
    );
};

export default useTableColumns;
