import useSWR from "swr";
import { fetcher } from "../../components/fetcher";
import StatusedItem from "./statusedItem";

export default function ItemTestWithInvalidCertificate({ url, method }) {
  const key = `-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEINdmPSTTw6c1zRFfGsuZigb2aUXE4cq9RCs5fjVKHQcGoAoGCCqGSM49\nAwEHoUQDQgAE49ktXBKcGcZ6phlac6SWZmkTwFwWkEfYw3vuiEc5igiIrzcoQeOY\ngb/tNKD7QuSJcm4i5WyF/KtfFyah+TOyoQ==\n-----END EC PRIVATE KEY-----`;
  const certificate = `-----BEGIN CERTIFICATE-----\nMIIBnjCCAUSgAwIBAgIUFb4bh4LOCjLLqlwKYl8rZXQqiLMwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIbXRscy5kZXYwHhcNMjEwMzIzMDA1NjAwWhcNMjIwMzIzMDA1\nNjAwWjAUMRIwEAYDVQQDEwlsb2NhbGhvc3QwWTATBgcqhkjOPQIBBggqhkjOPQMB\nBwNCAATj2S1cEpwZxnqmGVpzpJZmaRPAXBaQR9jDe+6IRzmKCIivNyhB45iBv+00\noPtC5IlybiLlbIX8q18XJqH5M7Kho3UwczAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0l\nBAwwCgYIKwYBBQUHAwIwDAYDVR0TAQH/BAIwADAdBgNVHQ4EFgQUULIQ96o61DHh\n6aaAEMtFt3OMq8AwHwYDVR0jBBgwFoAUxqMLTTWxs6g/+gw+uZ3Uyb3lIXYwCgYI\nKoZIzj0EAwIDSAAwRQIhAKYeMlfR9L3GHrs0e4+EFDv0G/Dnrqo7oR4pksdpE5Qm\nAiAorvWBDz5aUB39Hwsk5Ymhu0xFu8cqUvz4cXwC5/BmiQ==\n-----END CERTIFICATE-----`;
  const ca = `-----BEGIN CERTIFICATE-----\nMIIBajCCARCgAwIBAgIUG8tie/EeaDHiQmvmvEcNKAcouv4wCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIbXRscy5kZXYwHhcNMjEwMzIzMDA1NjAwWhcNMjYwMzIyMDA1\nNjAwWjATMREwDwYDVQQDEwhtdGxzLmRldjBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABI2mKAVvXaTtnBT0Z9a3BqlNas/Ih8H71ommzltwBVkF1uEIOXutXsMYv5Pv\nTn96p1xdVZ5OQIBBXNqdbONhbjWjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBTGowtNNbGzqD/6DD65ndTJveUhdjAKBggqhkjO\nPQQDAgNIADBFAiA9fpj7nR6XT1KaJ66yRYzA0mymPjnWo0zwqNKpiKbw7AIhAOmL\nvZ0jeKOCMu17VPwJostVWp07NkApTYMTsikC3h1l\n-----END CERTIFICATE-----`;

  const { data, error } = useSWR(["/api/request-mtls-server", JSON.stringify({ url, method, key, certificate, ca })], fetcher);

  if (error && error.info?.match(/error/g)) {
    return <StatusedItem message="sucess-400-invalid-cert" status="OK" prefix={method} />;
  }
  if (error) {
    return <StatusedItem message="sucess-400-invalid-cert" status="FAIL" prefix={method} />;
  }
  if (data) {
    return <StatusedItem message="sucess-400-invalid-cert" status="FAIL" prefix={method} />;
  }
  return <StatusedItem message="sucess-400-invalid-cert" status="LOADING" prefix={method} />;
}
