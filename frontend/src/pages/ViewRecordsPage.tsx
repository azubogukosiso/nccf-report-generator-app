import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { recordDataType } from "../types/recordDataType";

import NavbarComponent from "../components/NavbarComponent";
import RecordComponent from "../components/RecordComponent";

import { useAuthContext } from "../hooks/useAuthContext";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";
import { deleteRecords } from "../functions/deleteRecords";

const ViewRecordsPage = () => {
  const { unit } = useAuthContext();

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["viewRecordsPageData"],
    queryFn: () =>
      fetch(
        `${import.meta.env.VITE_API_URL}/records?unitId=${unit?.unitId}`
      ).then((res) => res.json()),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRecords,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["viewRecordsPageData"] });
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
          <h1>All Records</h1>
        </div>

        <p>Unit: {unit?.unitName}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {data.map((record: recordDataType, index: number) => (
          <RecordComponent
            key={record?._id}
            index={index}
            month={capitalizeFirstLetter(record?.month)}
            year={record?.year}
            id={record?._id}
            recordNum={data.length}
            onDelete={() => handleDelete(record?._id)}
          />
        ))}
      </div>
    </>
  );
};

export default ViewRecordsPage;
