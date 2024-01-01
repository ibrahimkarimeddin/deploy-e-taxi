
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { Button, Switch } from "antd";
import ColumnsSwitch from "../../Components/Columns/ColumnsSwitch";
import { MdOutlineBlock } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import { useCommonModelState } from "../../lib/state mangment/driver&customer/ModelState";
import { useNavigate } from "react-router-dom";
import { useAcceptedDriver, useToggleStatusDriver } from "../../api/Driver";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import TripleSwitch from "../../Components/Ui/ThreeSwitchState/TripleSwitch"
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const useTableColumns: any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const {setIsopenBlock , setIsopenGift ,setIsopenUnBlock  , setObjectId} = useCommonModelState()

  const toggleMutation = useAcceptedDriver();
  const toggleMutation2= useToggleStatusDriver()

  const handleChange = (checked:any,status:any)=> {    
    toggleMutation.mutate({driver_id:checked, auth_status:status.target.value})

  }
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
        cell: (row:any) => { 
          return (
            <Radio.Group  onChange={(checked)=>handleChange(row.id, checked)} defaultValue={row?.auth_status}>
              <Radio.Button value="3">{t("accepted")}</Radio.Button>
              <Radio.Button value="0">{t("pending")}</Radio.Button>
              <Radio.Button value="2">{t("rejected")}</Radio.Button>
            </Radio.Group>
        )  
        },
      },
      {
        name: t("phone"),
        center: "true",
        cell: (row: any) => row?.phone
      },
      
          // if(toggleMutation?.isLoading && row?.auth_status == '0'){
          //   return <LoadingSpinner />  
          // }
      // {
      //   name: t("phone_verfication"),
      //   center: "true",
      //   cell: (row) => {

      //     row['is_active'] =false

      //     if(row?.phone_verfication == 0){
      //       return (
      //         <ToggleStatus object={row} toggleMutation={toggleMutation2} />
      //       )
      //     }
         
      //     return <p>{t('done')}</p>
      //   },
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