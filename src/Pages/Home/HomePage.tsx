import React from "react";
import StatisticsCard from "../../Components/Ui/StaticsCard/StaticCard";
import { FaRedRiver } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ChartTypeEnum } from "../../enums/ChartTypeEnum";
import { Card, Col, Row } from "reactstrap";
import { AiOutlineUser } from 'react-icons/ai';
import { useGetStatistics } from "../../api/statistics";
import { BsCart3 } from "react-icons/bs";
import YearChart from "./YearChart";
import HighDriverRateTable from "./tables/HighDriverRate/HighDriverRateTable";
import LastOrderTable from "./tables/LastOrder/LastOrderTable";
import LoadingSpinner from "../../Components/Ui/LoadingSpinner";
import LoadingPage from "../../Layout/app/LoadingPage";

export default function HomePage() {

  const { t } = useTranslation()

  const { data: statistics, isLoading } = useGetStatistics({
    order_daily_date: null
  });

  if(isLoading){
    return  <LoadingPage/>

  }

  return (
    <>


      <Row xs={1} sm={1} md={1} lg={3} xl={3} >
        <Col style={{ padding: "0.5rem" }}>
          <div style={{ cursor: "pointer" }}>
            <StatisticsCard
              pathWhenClick="Drivers"
              icon={<FaRedRiver className="warning" size={24} />}
              count={`${(statistics?.drivers_count) ?? 1}`}
              CardContent={t(`You_have`) + "  " + ((statistics?.drivers_count) ?? 1) + "  " + t(`Driver_in_your_Application`)}
              CardTitle={t("drivers")}
            />
          </div>
        </Col>
        <Col style={{ padding: "0.5rem" }}>
          <div style={{ cursor: "pointer" }}>

            <StatisticsCard
              icon={<AiOutlineUser className="warning" size={24} />}
              count={`${(statistics?.users_count) ?? 1}`}
              CardContent={t(`You_have`) + "  " + ((statistics?.users_count) ?? 1) + "  " + t(`User_in_your_Application`)}

              pathWhenClick="customers"
              CardTitle={t("users")}
            />
          </div>
        </Col>

        <Col style={{ padding: "0.5rem" }}>
          <div style={{ cursor: "pointer" }} >

            <StatisticsCard
              icon={<BsCart3 className="warning" size={24} />}
              count={`${(statistics?.orders_count) ?? 1}`}
              CardContent={t(`You_have`) + "  " + ((statistics?.orders_count) ?? 1) + "  " + t(`Order_in_your_Application`)}
              pathWhenClick="order"
              CardTitle={t('order')}
              
            />
          </div>
        </Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={2} xl={2} style={{margin:"30px 0 "}}>
      
        <Col>
           <LastOrderTable latest_Orders={statistics?.latest_orders}/>
        </Col>
        <Col>
        <HighDriverRateTable most_driver_rate={statistics?.most_driver_rate}/>
        </Col>
    </Row>
        <Card>
            <YearChart/>
        </Card>  
      </>
  );
}
