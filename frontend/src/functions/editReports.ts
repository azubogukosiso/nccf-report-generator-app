import type { recordFieldType } from "../types/recordFieldType";

export const editReports = async (
  e: React.MouseEvent<HTMLButtonElement>,
  editedReports: {
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
    reportId: string | null | undefined;
  }
) => {
  e.preventDefault();

  console.log("edited reports: ", editedReports);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/reports?id=${editedReports.reportId}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedReports),
      }
    );

    const json = await res.json();

    console.log("This is the response: ", json);
};
