
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../Components/Ui/tables/Actions";
import { HovarableImage } from "../../Components/Ui";
import { BaseURL } from "../../api/config";
import { ToggleStatus } from "../../Components/Ui/ToggleStatus";
import { useDeleteSocialMedia, useUpdateSocialMediaStatus } from "../../api/SocialMedia";
import ColumnsImage from "../../Components/Columns/ColumnsImage";

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
        cell: (row:any) =>
        <a
            href={row.social_media_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {row.social_media_link}
        </a>
      },
      {
        name: t("image"),
        center: "true",
        cell: (row: any) => {
          return (
            <ColumnsImage src={row?.social_media_image} />
          )
        }
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

