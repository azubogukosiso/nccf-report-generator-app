import type { recordFieldType } from "../types/recordFieldType";

export const saveReports = async (
  e: React.MouseEvent<HTMLButtonElement>,
  reportToSave: {
    records: recordFieldType[];
    month: string;
    year: string;
    unitId: number | undefined;
    appreciation: string;
    challenges: string;
    testimonies: string;
    prayerRequest: string;
    conclusion: string;
    signature: string;
  }
) => {
  e.preventDefault();

  console.log("here we are: ", reportToSave);

  const res = await fetch(`${import.meta.env.VITE_API_URL}/reports/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reportToSave),
  });

  const json = await res.json();

  console.log("This is the response: ", json);
};
