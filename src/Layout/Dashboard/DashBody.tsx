import { Spinner } from "reactstrap"
import { QueryStatusEnum } from "../../config/QueryStatus"
import LoadingPage from "../app/LoadingPage"
import { useTranslation } from "react-i18next"
import { BsEmojiFrown } from "react-icons/bs";


const DashBody = ({ children , status }: { children: React.ReactNode ,status?:QueryStatusEnum }) => {
  const {t} = useTranslation();

  // Add You Custom Loadaing Page
  if(status === QueryStatusEnum.LOADING){

    return <LoadingPage />
  }

  // Add Your Custom Error Page 
  if(status === QueryStatusEnum.ERROR){
    return (
    <div className="error_show">
      <span className="error_icon"><BsEmojiFrown/></span>
      <span className="error_text">
        {t("Ops")}...<br/>
        {t("An Error According")} <br/>
        {t("Please Try Again Later")}
      </span>
    </div>
    )
  }
  
  return (
    <div className='Page' >
      { children }
    </div>
  )
}

export default DashBody
