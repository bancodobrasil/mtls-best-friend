import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithoutCertificate({ url }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url }), "POST"], fetcher);
  if (error && error.info.match(/required/g)) {
    return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="OK" />;
  }
  if (data) {
    return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="FAIL" />;
  }
  return <StatusedItem i18nMessaKey="server.sucess400NoCert" status="LOADING" />;
}
