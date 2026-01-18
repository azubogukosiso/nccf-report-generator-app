export const deleteRecords = async (id: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/records?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const json = await res.json();

  console.log("This is the response: ", json);
};
