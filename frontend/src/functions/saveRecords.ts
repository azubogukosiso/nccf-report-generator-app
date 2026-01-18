import type { recordFieldType } from "../types/recordFieldType";

export const saveRecords = async (
  e: React.MouseEvent<HTMLButtonElement>,
  recordToSave: {
    records: recordFieldType[];
    month: string;
    year: string;
    unitId: number | undefined;
  }
) => {
  e.preventDefault();

  console.log("here we are: ", recordToSave);

  const res = await fetch(`${import.meta.env.VITE_API_URL}/records/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recordToSave),
  });

  const json = await res.json();

  console.log("This is the response: ", json);
};
