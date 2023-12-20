
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


const useTableColumns: any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const {setIsopenBlock , setIsopenGift ,setIsopenUnBlock  , setObjectId} = useCommonModelState()

  const toggleMutation = useAcceptedDriver();
  const toggleMutation2= useToggleStatusDriver()
  const handleChange = (checked:any)=> {
    toggleMutation.mutate({driver_id:checked})
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
        // cell: (row: any) => {
        //   switch (row?.status) {
        //     case ("online"): return (    <Button type="primary" className="bg-success"  >{t("online")} </Button>)
        //     case ("pending"): return (   <ColumnsSwitch name="status" Front={t("pending")} Back={t("pending")}   Checked />)
        //     case ("offline"): return (    <Button type="primary" danger>{t("offline")} </Button>)
        //   }
        // }
        cell: (row:any) => {
          if(toggleMutation?.isLoading && row?.status === 'pending'){
            return <LoadingSpinner />  
          }
         if(!(row.status ==='pending')){
          return <span style={{color:"white" , background:row.status ==='online'?"#19ab27": 'red' , padding:"10px", width:80  ,fontSize:10  , borderRadius:12, textAlign:"center" }}>{t(row.status)}</span>
         }
          return (
            <div>
              <p style={{margin:"0"}}>{t('pending')}</p>
                <label>
                  <Switch onChange={()=>handleChange(row.id)} checked={false} />
                </label>
            </div>
          )
          
        },
      },
      {
        name: t("phone_verfication"),
        center: "true",
        //  cell: (row: any) => {
        //   switch (row?.phone_verfication) {
        //     case (1): return (    <Button type="dashed"   >{t("done")} </Button>)
        //     case (0): return (   <ColumnsSwitch  name="status"  Front={t("in_active")} Back={t("active")} Checked />)
        //   }
        // }
        cell: (row) => {

          row['is_active'] =false

          if(row?.phone_verfication == 0){
            return (
              <ToggleStatus object={row} toggleMutation={toggleMutation2} />
            )
          }
         
          return <p>{t('done')}</p>
        },
      },
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