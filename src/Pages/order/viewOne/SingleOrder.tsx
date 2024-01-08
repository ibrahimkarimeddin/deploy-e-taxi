import React, { useEffect } from 'react';
import { Card, CardHeader, Button, CardTitle, CardBody } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { useCancelOrder, useGetSingleOrder } from '../../../api/order';
import { useNavigate, useParams } from 'react-router-dom';
import { useJsApiLoader } from '@react-google-maps/api';
import GoogleMaps from './GoogleMap';
import './OrderInfo.css';
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { FaRedRiver } from 'react-icons/fa';
import { HiQrcode } from 'react-icons/hi';
import { MdOutlinePaid } from 'react-icons/md';
import { LoadingButton } from '../../../Components/Ui/LoadingButton';
import LoadingSpinner from '../../../Components/Ui/LoadingSpinner';
import { useTranslation } from 'react-i18next';

interface Data {
  // Define the structure of your 'data' object
  code: string;
  status: string;
  // Add other properties and their types based on your data structure
}

const SingleOrderPage: React.FC = () => {
  const {t} = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetSingleOrder({ order_id: id });
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M',
    libraries: ['places'],
  });

  const Navigate = useNavigate();
  const { mutate, isLoading: LoadingCancelOrder } = useCancelOrder();

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  if (isLoading || !isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className='Single_order_title' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {t('order_information')}
          <div>
            <LoadingButton
              isLoading={LoadingCancelOrder}
              color="danger"
              style={{
                backgroundColor: 'danger',
                color: 'white',
                marginInline: '10px',
                display: data?.status === 'canceled' || data?.status === 'complete' ? 'none' : 'inline',
              }}
              onClick={() => mutate({ order_id: id })}
            >
              {t('cancel')}
            </LoadingButton>

            <Button onClick={() => Navigate('/Order')} color="primary">
              {t('back')}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      <CardBody>
        <div>
          <div style={{ display: "flex", justifyContent: 'space-between', margin: '0px 0px 30px 0' }}>
            <span >
              {/* Order Code  */}
              <h4 className='Single_order_body' style={{ color: "black" }}>{t('order_code')}: <p className='Single_order_body' style={{ display: "inline", color: "black" }}>{data?.code}</p> </h4>

              {/* Order Status  */}
              <h4 className='Single_order_body' style={{ display: "flex", color: 'black' , alignItems:"center"  , marginTop:"20px" , marginBottom:"20px" , justifyContent:"space-around"}}>
                {t('order_status')}
                :
                 <Button className="button-order" color={data?.status === "pending" ? "secondary" : data?.status === 'canceled' ? 'danger' : 'success'}  style={{borderRadius: 5, color: "white", marginInline:"20px"}}>{(data?.status)}</Button>

              </h4>

              <span className='Single_order_body' style={{ color: 'black' }}>{t('driver_order_rate')} :<Rating initialValue={data?.rate} size={23} readonly={true} /> </span>
            </span>
          </div>
          <div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around" }} className="single-order-info">

          <div style={{ width: "40%" }}>
            <h2 className='title_order' style={{ color: "var(--secondary)", fontSize: "20px", textAlign: "center" }}>{t("personal_information")}</h2>
            <div className='single_order_container' style={{ border: '1px solid var(--secondary)', padding: '8px 20px', width: '100%', borderRadius: "10px", marginInline: 5, boxShadow: " 2px 1px 3px var(--secondary)" }}>
              <span className="text-order-container"><p className="text-order-display"><FaRedRiver size={17} /> {t('driver_name')}</p><span className='response_span'>{data?.driver_name}</span></span >
              <span className="text-order-container"><p className="text-order-display"><AiOutlinePhone size={17} />{t('driver_phone')}</p><span className='response_span'>{data?.driver_phone}</span></span >
              <span className="text-order-container"><p className="text-order-display"><HiQrcode size={17} />{t('driver_code')}</p><span className='response_span'>{data?.driver_code}</span></span >
              <span className="text-order-container"><p className="text-order-display"><AiOutlineUser size={17} />{t('user_name')}</p><span className='response_span'>{data?.user_name}</span></span >
              <span className="text-order-container"><p className="text-order-display"><AiOutlinePhone size={17} />{t('user_phone')}</p><span className='response_span'>{data?.user_phone}</span></span >
              <span className="text-order-container"><p className="text-order-display"><HiQrcode size={17} />{t('user_code')}</p><span className='response_span'>{data?.user_code}</span></span >
              <span className="text-order-container"><p className="text-order-display"><MdOutlinePaid size={17} />{t('paid_type')}</p><span className='response_span'>{data?.payment_method}</span></span >

            </div>
          </div>
          <div style={{ width: "40%", background: "" }}>
            <h2 className='title_order' style={{ color: "var(--secondary)", fontSize: "20px", textAlign: "center" }}>{t("trip_information")}</h2>
            <div className='single_order_container' style={{ border: '1px solid var(--secondary)', padding: '8px 20px', width: '100%', borderRadius: "10px", marginInline: 5, boxShadow: " 2px 1px 3px var(--secondary)" }}>

              <span className="text-order-container"><p className="text-order-display">{t('start_point')}</p><span className='response_span'>{data?.place_from}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('end_point')}</p><span className='response_span'>{data?.place_to}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('money_received')}</p><span className='response_span'>{parseFloat((data?.real_cost) || 0) + parseFloat(data?.cash_remaining || 0)}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('start_time_trip')}</p><span className='response_span'>{data?.start_tripe_date}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('end_time_trip')}</p><span className='response_span'>{data?.end_tripe_date}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('distance_per_km')} </p><span className='response_span'>{data?.distance}</span></span >
              <span className="text-order-container"><p className="text-order-display">{t('time_per_m')}</p><span className='response_span'>{data?.trip_duration}</span></span >

            </div>
          </div>


        </div>
        {
          data && <GoogleMaps data={data} />
        }

      </CardBody>
    </Card>
  );
};

export default SingleOrderPage;