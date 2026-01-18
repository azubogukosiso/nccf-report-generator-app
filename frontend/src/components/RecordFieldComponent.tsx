import { removeRecordField } from "../functions/removeRecordField";

import BattleAxeRecordFieldComponent from "./unitFieldComponents/BattleAxeRecordFieldComponent";
import BibleStudyRecordFieldComponent from "./unitFieldComponents/BibleStudyRecordFieldComponent";
import ChildrenEvangRecordFieldComponent from "./unitFieldComponents/ChildrenEvangRecordFieldComponent";
import EvangRecordFieldComponent from "./unitFieldComponents/EvangRecordFieldComponent";
import PrayerRecordFieldComponent from "./unitFieldComponents/PrayerRecordFieldComponent";
import SistersRecordFieldComponent from "./unitFieldComponents/SistersRecordFieldComponent";

import { useAuthContext } from "../hooks/useAuthContext";

import type { recordFieldType } from "../types/recordFieldType";
import KPCRecordFieldComponent from "./unitFieldComponents/KPCRecordFieldComponent";

type RecordFieldProps = {
  index: number;
  records: recordFieldType[];
  recordData: recordFieldType;
  setRecords: React.Dispatch<React.SetStateAction<recordFieldType[]>>;
};

const RecordFieldComponent = ({
  index,
  records,
  recordData,
  setRecords,
}: RecordFieldProps) => {
  const { unit } = useAuthContext();

  // HANDLE CHANGE FUNCTION
  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    const { name, value } = e.target;

    const key: string = name.replace(/[0-9]/g, ""); // STRIPS OFF NUMBER

    const updatedRecords: recordFieldType[] = [...records];

    if (updatedRecords[index] && typeof updatedRecords[index] === "object") {
      updatedRecords[index] = {
        ...updatedRecords[index],
        [key]: value,
      };
    }

    setRecords(updatedRecords);
  };

  return (
    <div
      className={`flex flex-col items-center ${
        index !== records.length - 1 && "mb-10"
      }`}
    >
      {unit?.unitId === 1 && (
        <BattleAxeRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 2 && (
        <BibleStudyRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 3 && (
        <ChildrenEvangRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 4 && (
        <EvangRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 5 && (
        <KPCRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 7 && (
        <PrayerRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 8 && (
        <SistersRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      <button
        className="inline px-3 py-2 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]"
        type="button"
        onClick={() => removeRecordField(records, setRecords, index)}
      >
        Remove record
      </button>
    </div>
  );
};

export default RecordFieldComponent;
