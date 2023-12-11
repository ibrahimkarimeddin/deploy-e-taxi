
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteSocialMedia, useUpdateSocialMediaStatus } from "../../api/SocialMedia";

function fnDelete(props :any ){}

const useTableColumns :any = () => {
  const [t] = useTranslation();
  const toggleMutation = useUpdateSocialMediaStatus();
  const deleteMutation = useDeleteSocialMedia();

  return useMemo(
    () => [
 
      {
        name: t("link"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.social_media_link
      },
      // {
      //   // name: t("Image"),
      //   sortable: false,
      //   center: "true",
      //   cell: (row:any) => row?.social_media_link
      // },
      {
        name: t("image"),
        sortable: false,
        center: true,
        cell: (row:any) => (
          <HovarableImage
            id={`category_image_${row.id}`}
            src={`${BaseURL}${row.social_media_image}`}
            width="35"
          />
        ),
      },
      {
        name: t("status"),
        sortable: false,
        center: true,
        cell: (row) => (
          <ToggleStatus object={row} toggleMutation={toggleMutation} />
        ),
      },
      
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <Actions

            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => row}
              onView={()=>{}}
              objectToEdit={row}
              showEdit={true}
              showView={false}
              onDelete={() => deleteMutation.mutate({ id: row.id })}
              />
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

