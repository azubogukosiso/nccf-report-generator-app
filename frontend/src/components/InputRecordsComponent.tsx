import { useState } from "react";

import { addRecordField } from "../functions/addRecordField";
import { saveRecords } from "../functions/saveRecords";
import { editRecords } from "../functions/editRecords";

import { useAuthContext } from "../hooks/useAuthContext";
import type { recordFieldType } from "../types/recordFieldType";
import type { editRecordDetailsType } from "../types/editRecordDetailsType";

import RecordFieldComponent from "./RecordFieldComponent";

import units from "../data/units.json";

const InputRecordsComponent = ({
  recordDetails,
  recordId,
}: editRecordDetailsType) => {
  const { unit } = useAuthContext();

  let unitRecordFields: recordFieldType;

  units.find((unitObj) => {
    if (unitObj.unitId === unit?.unitId)
      unitRecordFields = unitObj.recordFields;
  });

  const [records, setRecords] = useState(() => {
    if (recordDetails && Array.isArray(recordDetails.records)) {
      return recordDetails.records;
    }
    return unitRecordFields ? [unitRecordFields] : [];
  });
  const [month, setMonth] = useState(!recordDetails ? "" : recordDetails.month);
  const [year, setYear] = useState(!recordDetails ? "" : recordDetails.year);

  return (
    <form className="w-full mb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <label htmlFor="month" className="text-xs">
            Month:
          </label>
          <select
            id="month"
            required
            name="month"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value=""></option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>

        <div>
          <label htmlFor="year" className="text-xs">
            Year:
          </label>
          <select
            id="year"
            required
            name="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value=""></option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      {records.map((record, index) => (
        <RecordFieldComponent
          key={index}
          index={index}
          records={records}
          recordData={record}
          setRecords={setRecords}
        />
      ))}

      <div className="flex items-center mt-10 justify-evenly">
        <button
          className="px-3 py-2 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          type="button"
          onClick={() => addRecordField(records, setRecords, unit)}
        >
          Add new record
        </button>
        <button
          className="px-3 py-2 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
          type="button"
          onClick={(e) =>
            recordDetails
              ? editRecords(e, { records, month, year, recordId })
              : saveRecords(e, { records, month, year, unitId: unit?.unitId })
          }
        >
          Save all records
        </button>
      </div>
    </form>
  );
};

export default InputRecordsComponent;
