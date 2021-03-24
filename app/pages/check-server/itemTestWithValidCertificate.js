import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithValidCertificate({ url, method, clientKey, certificate, ca }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url, method, key: clientKey, certificate, ca })], fetcher);
  if (error) {
    return <StatusedItem message="sucess-200" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem message="sucess-200" status="OK" prefix={method} />;
  }
  return <StatusedItem message="sucess-200" status="LOADING" prefix={method} />;
}
