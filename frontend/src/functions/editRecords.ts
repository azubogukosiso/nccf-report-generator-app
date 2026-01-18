import type { recordFieldType } from "../types/recordFieldType";

export const editRecords = async (
  e: React.MouseEvent<HTMLButtonElement>,
  editedRecords: {
    records: recordFieldType[];
    month: string;
    year: string;
    recordId: null | string | undefined;
  }
) => {
  e.preventDefault();

  console.log("edited records: ", editedRecords);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/records?id=${editedRecords.recordId}`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedRecords),
    }
  );

  const json = await res.json();

  console.log("This is the response: ", json);
};
