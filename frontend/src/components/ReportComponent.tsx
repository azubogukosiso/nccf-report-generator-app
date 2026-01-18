import { Link } from "react-router-dom";

type RecordComponentProps = {
  index: number;
  month: string | undefined;
  year: string | undefined;
  id: string | undefined;
  recordNum: number;
  onDelete: () => void;
};

const RecordComponent = ({
  index,
  month,
  year,
  id,
  recordNum,
  onDelete,
}: RecordComponentProps) => {
  return (
    <div
      className={`flex w-full p-10 ${index !== recordNum - 1 && "border-b"}`}
    >
      <div className="w-[20%] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
        >
          <path d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21L3 21C2.45 21 2 20.55 2 20V4ZM10.5858 6L9.58579 5H4V7H9.58579L10.5858 6ZM4 9V19L20 19V7H12.4142L10.4142 9H4Z" />
        </svg>
      </div>
      <div className="w-[80%]">
        <h2 className="mb-5">
          {month} {year}
        </h2>
        <div>
          <Link
            to={`/edit-report?id=${id}`}
            className="px-3 py-[0.7rem] mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          >
            Edit Report
          </Link>
          <button
            onClick={onDelete}
            className="px-3 py-2 mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          >
            Delete Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;
