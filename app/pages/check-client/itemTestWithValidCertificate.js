import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithValidCertificate({ url, method, clientKey, certificate }) {
  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url, method, key: clientKey, certificate })], fetcher);
  if (error) {
    return <StatusedItem message="Expected response: <code>200 Success</code>" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem message="Expected response: <code>200 Success</code>" status="OK" prefix={method} />;
  }
  return <StatusedItem message="Expected response: <code>200 Success</code>" status="LOADING" prefix={method} />;
}
