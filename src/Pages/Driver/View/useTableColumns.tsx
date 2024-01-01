import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCommonModelState } from "../../../lib/state mangment/driver&customer/ModelState";

const useTableColumns: any = () => {
  const [t] = useTranslation();
  const navigate = useNavigate()
  const {setIsopenBlock , setIsopenGift ,setIsopenUnBlock  , setObjectId} = useCommonModelState()

  return useMemo(
    () => [
      {
        name: t("name"),
        center: "true",
        cell: (row: any) => row?.full_name
      },

    ],
    [t]
  );
};

export default useTableColumns;