import type { recordFieldProps } from "../../types/recordFieldProps";

const KPCRecordFieldComponent = ({
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
        <label htmlFor={`minister${index + 1}`} className="w-1/2 text-xs">
          Minister:
        </label>
        <input
          type="text"
          placeholder="Enter minister..."
          id={`minister${index + 1}`}
          name={`minister${index + 1}`}
          value={recordData?.minister}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`songTitle${index + 1}`} className="w-1/2 text-xs">
          Song Title:
        </label>
        <input
          type="text"
          placeholder="Enter song title..."
          id={`songTitle${index + 1}`}
          name={`songTitle${index + 1}`}
          value={recordData?.songTitle}
          onChange={handleChange}
          required
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor={`artist${index + 1}`} className="w-1/2 text-xs">
          Artist:
        </label>
        <input
          type="text"
          placeholder="Enter artist..."
          id={`artist${index + 1}`}
          name={`artist${index + 1}`}
          value={recordData?.artist}
          onChange={handleChange}
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

export default KPCRecordFieldComponent;
