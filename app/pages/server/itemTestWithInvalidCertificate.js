import { Trans } from "react-i18next";
export default function ItemTestWithInvalidCertificate() {
  return (
    <div>
      <span></span>
      <span>
        <Trans i18nKey="server.attemptToMakePOSTGETRequestWithAnotherCertificate" components={{ code: <code /> }} />
      </span>
    </div>
  );
}
