import { faCheck, faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function StatusedItem({ status = "off", prefix, message = "loading" }) {
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
        [ {prefix} ] {message}
      </span>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
