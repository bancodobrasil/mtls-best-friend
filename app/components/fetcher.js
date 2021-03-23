export const fetcher = async (url, body, method) => {
  const reqOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  };

  const res = await fetch(url, reqOptions);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.text();
    error.status = res.status;
    throw error;
  }
  const j = await res.json();
  return j;
};
