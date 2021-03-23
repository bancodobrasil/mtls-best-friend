import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithValidCertificate({ url, method, clientKey, certificate, ca }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url, key: clientKey, certificate, ca }), method], fetcher);
  if (error) {
    return <StatusedItem i18nMessaKey="server.sucess200" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem i18nMessaKey="server.sucess200" status="OK" prefix={method} />;
  }
  return <StatusedItem i18nMessaKey="server.sucess200" status="LOADING" prefix={method} />;
}
