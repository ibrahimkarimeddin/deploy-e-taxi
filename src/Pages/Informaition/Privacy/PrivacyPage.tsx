import React, { FC } from "react";
import { useGetPrivacy } from "../../../api/Information";

import PageStructure from "../../../Layout/Dashboard/PageStructure";
import PrivacyForm from "./PrivacyForm";

const PrivacyPage: FC = () => {
  const { data, isLoading, isError } = useGetPrivacy();

  const privacy: any = data?.translations;

  return (
    <PageStructure
      title="privacy"
      data={privacy}
      isLoading={isLoading}
      isError={isError}
    >
      <PrivacyForm privacy={privacy} />
    </PageStructure>
  );
};

export default PrivacyPage;