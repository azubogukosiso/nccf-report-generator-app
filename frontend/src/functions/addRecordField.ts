import type { recordFieldType } from "../types/recordFieldType";
import units from "../data/units.json";

// FUNCTION FOR ADDING MORE RECORD INPUT FIELDS
export const addRecordField = (
  records: recordFieldType[],
  setRecords: React.Dispatch<React.SetStateAction<recordFieldType[]>>,
  unit: { token: string; unitId: number; unitName: string } | null
) => {
  let record: recordFieldType;

  units.map((unitObj) => {
    if (unitObj.unitId === unit?.unitId) record = unitObj.recordFields;
  });

  setRecords([...records, record]);
};
