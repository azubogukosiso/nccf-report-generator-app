import type { recordFieldProps } from "../../types/recordFieldProps";

const EvangRecordFieldComponent = ({
  handleChange,
  index,
  recordData,
}: recordFieldProps) => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`date${index + 1}`} className="w-1/2 text-xs">
          Date:
        </label>
        <input
          type="date"
          placeholder="Select a date..."
          id={`date${index + 1}`}
          name={`date${index + 1}`}
          value={recordData?.date}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b text-black"
          style={{ colorScheme: "light" }}
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label
          htmlFor={`numOfSoulsPreachedTo${index + 1}`}
          className="w-1/2 text-xs"
        >
          Number of souls preached to:
        </label>
        <input
          type="number"
          placeholder="Enter number of souls preached to..."
          id={`numOfSoulsPreachedTo${index + 1}`}
          name={`numOfSoulsPreachedTo${index + 1}`}
          value={recordData?.numOfSoulsPreachedTo}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label
          htmlFor={`numOfSoulsHealed${index + 1}`}
          className="w-1/2 text-xs"
        >
          Number of souls healed:
        </label>
        <input
          type="number"
          placeholder="Enter number of souls healed..."
          id={`numOfSoulsHealed${index + 1}`}
          name={`numOfSoulsHealed${index + 1}`}
          value={recordData?.numOfSoulsHealed}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`numConverted${index + 1}`} className="w-1/2 text-xs">
          Number of souls converted:
        </label>
        <input
          type="number"
          placeholder="Enter number of souls converted..."
          id={`numConverted${index + 1}`}
          name={`numConverted${index + 1}`}
          value={recordData?.numConverted}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`numFollowedUp${index + 1}`} className="w-1/2 text-xs">
          Number of souls followed up:
        </label>
        <input
          type="number"
          placeholder="Enter number of souls followed up..."
          id={`numFollowedUp${index + 1}`}
          name={`numFollowedUp${index + 1}`}
          value={recordData?.numFollowedUp}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`attendance${index + 1}`} className="w-1/2 text-xs">
          Attendance:
        </label>
        <input
          type="number"
          placeholder="Enter attendance figure..."
          id={`attendance${index + 1}`}
          name={`attendance${index + 1}`}
          value={recordData?.attendance}
          onChange={handleChange}
          min="0"
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`venue${index + 1}`} className="w-1/2 text-xs">
          Venue:
        </label>
        <input
          type="text"
          placeholder="Enter venue..."
          id={`venue${index + 1}`}
          name={`venue${index + 1}`}
          value={recordData?.venue}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>
    </>
  );
};

export default EvangRecordFieldComponent;
