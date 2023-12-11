
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Button } from "antd";
import ColumnsSwitch from "../../Components/Columns/ColumnsSwitch";
import { MdOutlineBlock } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import { useCommonModelState } from "../../lib/state mangment/driver&customer/ModelState";
import { useNavigate } from "react-router-dom";


const useTableColumns: any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()

  const {setIsopenBlock , setIsopenGift ,setIsopenUnBlock  , setObjectId} = useCommonModelState()

  return useMemo(
    () => [
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.image} />
          )
        }
      },
      {
        name: t("name"),
        center: "true",
        cell: (row: any) => row?.full_name
      },
      {
        name: t("driver_code"),
        center: "true",
        cell: (row: any) => row?.code
      },
      {
        name: t("wallet"),
        center: "true",
        cell: (row: any) => row?.wallet
      },
      {
        name: t("city"),
        center: "true",
        cell: (row: any) => row?.city_name
      },
      {
        name: t("status"),
        center: "true",
        cell: (row: any) => {
          switch (row?.status) {
            case ("online"): return (    <Button type="primary" className="bg-success"  >{t("online")} </Button>)
            case ("pending"): return (   <ColumnsSwitch name="status" Front={t("pending")} Back={t("pending")}   Checked />)
            case ("offline"): return (    <Button type="primary" danger>{t("Offline")} </Button>)

          }

        }
      },
      {
        name: t("phone_verfication"),
        center: "true",
         cell: (row: any) => {
          switch (row?.phone_verfication) {
            case (1): return (    <Button type="dashed"   >{t("done")} </Button>)
            case (0): return (   <ColumnsSwitch  name="status"  Front={t("in_active")} Back={t("active")} Checked />)

          }

        }
      },
      // {
      //   name: t("block_timer"),
      //   center: "true",
      //   cell: (row: any) => row?.block_timer
      // },

      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row?:any) => (
          <span style={{display:"flex" , alignItems:"center"}}>
              <Actions
              // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
                objectToEdit={row}
                showEdit={false}
                showDelete={false}
                onView={()=>navigate(`/information/driver/${row?.id}`) }
              />

          <MdOutlineBlock className="cursor-pointer primary" style={{display:row.status!=='blocked' ? "inline" : 'none', marginInline:5}} size={20}  onClick={(() =>{
            setIsopenBlock()
            setObjectId(row.id)
          })}
          />

          <AiOutlineGift  size={25 } className="cursor-pointer primary " style={{display:row.status!=='blocked' ? "inline" : 'none'}} onClick={(() =>{
            setIsopenGift()
            setObjectId(row.id)
          })}
          /> 

          <CiUnlock   size={25 } className="cursor-pointer primary " onClick={(() =>{
            setIsopenUnBlock()
            setObjectId(row.id)
          })}
          style={{display:row.status ==='blocked' ? "inline" : 'none'}}
        />  
          </span>
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

