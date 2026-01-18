export const deleteReports = async (id: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/reports?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const json = await res.json();

  console.log("This is the response: ", json);
};
