import { prefix } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithoutCertificate({ url, method }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url }), method], fetcher);
  if (error && error.info?.match(/required/g)) {
    return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="OK" prefix={method} />;
  }
  if (error) {
    return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="FAIL" prefix={method} />;
  }
  return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="LOADING" prefix={method} />;
}
