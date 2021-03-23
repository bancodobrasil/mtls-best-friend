import { faCheck, faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Trans } from "react-i18next";

export default function StatusedItem({ status = "off", i18nMessaKey = "" }) {
  let statusIcon = faClock;
  let textColor = "text-gray";

  if (status === "FAIL") {
    textColor = "text-pink-600";
    statusIcon = faTimes;
  } else if (status === "OK") {
    textColor = "text-green-600";
    statusIcon = faCheck;
  }

  return (
    <div className="flex flex-row items-center justify-content-start">
      <FontAwesomeIcon icon={statusIcon} className={textColor} width={16} />
      <span className={`ml-2 ${textColor}`}>
        <Trans i18nKey={i18nMessaKey} components={{ code: <code /> }} />
      </span>
    </div>
  );
}
