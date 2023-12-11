import React from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


interface RowData {
    driver_name: string;
    rate: number;
    driver_id: string;
}

const useTableColumns = () => {
    const navigate = useNavigate()
    const {t} = useTranslation();

    return useMemo(() => {
        const columns = [
            {
                name: t("full_name"),
                sortable: false,
                center: true,
                cell: (row: RowData) => row?.driver_name,
            },
            {
                name: t("rate"),
                sortable: false,
                center: true,
                cell: (row: RowData) => (
                    <Rating initialValue={row?.rate} size={23} readonly={true} />
                ),
            },
            {
                name: "#",
                selector: "action",
                sortable: false,
                center: true,
                cell: (row: RowData) => (
                    <GrView
                        onClick={() => navigate(`/information/driver/${row?.driver_id}`, {replace:true})}
                        size={22}
                        style={{ cursor: "pointer" }}
                    />
                ),
            },
        ];

        return columns;
    }, [t]);
};

export default useTableColumns;
