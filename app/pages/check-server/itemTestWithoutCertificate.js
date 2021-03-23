import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithoutCertificate({ url, method }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url }), method], fetcher);
  if (error && error.info?.match(/required/g)) {
    return <StatusedItem i18nMessaKey="sucess-400-no-cert" status="OK" prefix={method} />;
  }
  if (error) {
    return <StatusedItem i18nMessaKey="sucess-400-no-cert" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem i18nMessaKey="sucess-400-no-cert" status="FAIL" prefix={method} />;
  }
  return <StatusedItem i18nMessaKey="sucess-400-no-cert" status="LOADING" prefix={method} />;
}
