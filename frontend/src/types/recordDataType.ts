import type { recordFieldType } from "../types/recordFieldType";

export type recordDataType = {
  createdAt?: string;
  month?: string;
  records: recordFieldType[];
  updatedAt?: string;
  year?: string;
  _id?: string;
  __v?: number;
};
