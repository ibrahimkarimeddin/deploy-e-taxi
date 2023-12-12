
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useToggleStatusCustomer } from "../../api/Customer";
import { MdOutlineBlock } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import { useCommonModelState } from "../../lib/state mangment/driver&customer/ModelState";
import ColumnsImage from "../../Components/Columns/ColumnsImage";
import { useNavigate } from "react-router-dom";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const  toggleMutation = useToggleStatusCustomer()
  const navigate = useNavigate();
  const {setIsopenBlock , setIsopenGift ,setIsopenUnBlock  , setObjectId} = useCommonModelState()

  return useMemo(
    () => [
      {
        name: t("image"),
        sortable: false,
        center: "true",
        width:'12%',
        // padding:"10em",
        cell: (row:any) => (
          // <HovarableImage
          //   id={`customer_image_${row.id}`}
          //   src={`${BaseURL}${row.image}`}
          //   width="60"
          // />
          <ColumnsImage src={row?.image} />
        ),
      },
     
      {
        name: t("name"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) =>{
          return <p>{row.full_name}</p>
         }
      },

      {
        name: t("customer_code"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) => row?.code
      },

      {
        name: t("city"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) => row.city_name
      },

      {
        name: t("status"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) => (
          row.status==='unblocked'?<span style={{color:"white" ,background:"#28c76f" ,width:90, borderRadius:8, padding:'8px', textAlign:'center' , fontSize:10}}>{t(row.status)}</span> :
           <span style={{color:"white" ,background:"red" , borderRadius:8,width:80 , fontSize:10, padding:'8px', textAlign:'center'}}>{t(row.status)}</span>
          ),
      },

      {
        name: t("wallet"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) => row.wallet
      },

      {
        name: t("phone_verfication"),
        sortable: false,
        center: "true",
        width:'12%',
        cell: (row:any) => {

          row['is_active'] =false

          if(row?.phone_verfication == 0){
            return (
              <ToggleStatus object={row} toggleMutation={toggleMutation} />
            )
          }
         
          return <p>{t('done')}</p>
        },
      },
      // {
      //   name: t("date_blocking"),
      //   sortable: false,
      //   center: "true",
      //   width:'12%',
      //   cell: (row:any) => row?.block_timer
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
                // showView={false}
                onView={()=>navigate(`/information/customer/${row?.id}`) }
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

