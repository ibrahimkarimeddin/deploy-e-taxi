import React from 'react'
import { useTranslation } from 'react-i18next'

const OrderInfo = () => {
  const {t} = useTranslation();
  return (
    <div>{t("order_info")}</div>
  )
}

export default OrderInfo