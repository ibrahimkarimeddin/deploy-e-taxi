
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { mapTranslatedProperties } from "../../utils/language/mapTranslatedProperties";
import { useDeleteCategory, useUpdateCategoryStatus } from "../../api/category";

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const deleteMutation = useDeleteCategory();
  const toggleMutation = useUpdateCategoryStatus();

  return useMemo(
    () => [
 
      {
        name: t("sort"),
        selector: "category_sort",
        sortable: true,
        center: true,
      },
      {
        name: t("image"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          <HovarableImage
            id={`category_image_${row.id}`}
            src={`${BaseURL}${row.category_image}`}
            width="35"
          />
        ),
      },
      {
        name: `${t("name")} (${t("en")})`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          mapTranslatedProperties(row.category_details, "category_name", 1),
      },
      {
        name: `${t("name")} (${t("ar")})`,
        sortable: false,
        center: true,
        cell: (row:any) =>
          mapTranslatedProperties(row.category_details, "category_name", 2),
      },
      {
        name: t("subcategories_count"),
        selector: "subcategories_count",
        sortable: true,
        center: true,
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row:any) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              // showDelete={false}
              onDelete={() => deleteMutation.mutate({ id: row.id })}
            />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

