
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Actions from "../../../Components/Ui/tables/Actions";
import { useNavigate } from "react-router";
import useDeleteMutation from "../../../api/helper/useDeleteMutation";
import { useDeleteAccount } from "../../../api/Account";
import { RiLockPasswordFill } from "react-icons/ri";


const useTableColumns :any = (setEditPasswordModal:any  ,setObjectToEdit: any) => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const deleteMutation = useDeleteAccount();

  return useMemo(
    () => [
      {
        name: t("full_name"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.full_name
      },
      {
        name: t("role"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.roles?.name
      },
      {
        name: t("email"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.email
      },
      {
        name: t("phone"),
        sortable: false,
        center: "true",
        cell: (row:any) => row?.phone
      },
     
      {
        name: "#",
        sortable: false,
        center: "true",
        cell: (row) => (
            <>
              <Actions
            // importnat to return the row in on Edit Function to store in objectToEdit That Upper in Edit Modal 
              onEdit={() => {
                navigate("/Account/Edit" ,{
                  state:row
                })
              }}
              showView={false}
              objectToEdit={row}
              showEdit={true}
              onDelete={() => deleteMutation.mutate({id:row.id })}
              />
              <RiLockPasswordFill
              onClick={() => {
                // navigate('/')
                setEditPasswordModal(true);
                setObjectToEdit(row);
              }}
              className="lock_icon"
              size={22}
            />
            </>
        ),
      },
    ],
    [t]
  );
};

export default useTableColumns;

