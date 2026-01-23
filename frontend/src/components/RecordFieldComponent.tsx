import { removeRecordField } from "../functions/removeRecordField";

import DiscipleshipRecordFieldComponent from "./unitFieldComponents/DiscipleshipRecordFieldComponent";
import FellowshipRecordFieldComponent from "./unitFieldComponents/FellowshipRecordFieldComponent";
import BattleAxeRecordFieldComponent from "./unitFieldComponents/BattleAxeRecordFieldComponent";
import BibleStudyRecordFieldComponent from "./unitFieldComponents/BibleStudyRecordFieldComponent";
import ChildrenEvangRecordFieldComponent from "./unitFieldComponents/ChildrenEvangRecordFieldComponent";
import EvangRecordFieldComponent from "./unitFieldComponents/EvangRecordFieldComponent";
import PrayerRecordFieldComponent from "./unitFieldComponents/PrayerRecordFieldComponent";
import SistersRecordFieldComponent from "./unitFieldComponents/SistersRecordFieldComponent";
import KPCRecordFieldComponent from "./unitFieldComponents/KPCRecordFieldComponent";

import { useAuthContext } from "../hooks/useAuthContext";

import type { recordFieldType } from "../types/recordFieldType";

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
        <DiscipleshipRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 2 && (
        <FellowshipRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 3 && (
        <BattleAxeRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 4 && (
        <BibleStudyRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 5 && (
        <ChildrenEvangRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 6 && (
        <EvangRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 7 && (
        <KPCRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 9 && (
        <PrayerRecordFieldComponent
          handleChange={handleChange}
          index={index}
          recordData={recordData}
        />
      )}

      {unit?.unitId === 10 && (
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
