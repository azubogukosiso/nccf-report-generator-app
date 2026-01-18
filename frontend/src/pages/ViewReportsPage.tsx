import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { reportDataType } from "../types/reportDataType";

import NavbarComponent from "../components/NavbarComponent";
import ReportComponent from "../components/ReportComponent";

import { useAuthContext } from "../hooks/useAuthContext";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";
import { deleteReports } from "../functions/deleteReports";

const ViewReportsPage = () => {
  const { unit } = useAuthContext();

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["viewReportsPageData"],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_API_URL}/reports?unitId=${unit?.unitId}`
      ).then((res) => res.json()),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteReports,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["viewReportsPageData"] });
    },
  });

  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    deleteMutation.mutate(id);
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;
  return (
    <>
      <NavbarComponent />
      <div className="flex items-center justify-between mb-10">
        <div className="flex">
          <label
            htmlFor="my-drawer"
            className="flex items-center justify-center p-2 mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer drawer-button hover:bg-blue-900 active:scale-[0.95]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
          </label>
          <h1>All Reports</h1>
        </div>

        <p>Unit: {unit?.unitName}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.map((report: reportDataType, index: number) => (
          <ReportComponent
            key={report?._id}
            index={index}
            month={capitalizeFirstLetter(report?.month)}
            year={report?.year}
            id={report?._id}
            recordNum={data.length}
            onDelete={() => handleDelete(report?._id)}
          />
        ))}
      </div>
    </>
  );
};

export default ViewReportsPage;
