import { Trans } from "react-i18next";
export default function ItemTestWithoutCertificate() {
  return (
    <div>
      <span></span>
      <span>
        <Trans i18nKey="server.attemptToMakeRegularRequestWithoutCertificate" components={{ code: <code /> }} />
      </span>
    </div>
  );
}
