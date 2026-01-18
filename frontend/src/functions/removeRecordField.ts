import type { recordFieldType } from "../types/recordFieldType";

export const removeRecordField = (
  records: recordFieldType[],
  setRecords: React.Dispatch<React.SetStateAction<recordFieldType[]>>,
  index: number
) => {
  if (records.length !== 1) {
    const newRecordsArray = records.filter(
      (record: recordFieldType) => records.indexOf(record) !== index
    );
    setRecords(newRecordsArray);
  }
};
