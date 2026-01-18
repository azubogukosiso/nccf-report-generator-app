import type { recordFieldType } from "../types/recordFieldType";

export type reportDataType = {
  createdAt?: string;
  month?: string;
  records: recordFieldType[];
  updatedAt?: string;
  year?: string;
  appreciation: string;
  testimonies: string;
  conclusion: string;
  prayerRequest: string;
  signature: string;
  _id?: string;
  __v?: number;
};
