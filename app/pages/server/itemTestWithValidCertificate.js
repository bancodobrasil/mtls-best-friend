import { useState } from "react";
import Image from "next/image";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Trans } from "react-i18next";

export default function ItemTestWithValidCertificate() {
  const [statusIcon, setStatusIcon] = useState("off");
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faCoffee} />
      </span>
      <span>
        <Trans i18nKey="server.attemptToMakePOSTGETRequestWithCertificate" components={{ code: <code /> }} />
      </span>
    </div>
  );
}
