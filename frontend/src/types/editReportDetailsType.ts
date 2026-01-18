import type { reportFieldType } from "../types/reportFieldType";
import type { recordFieldType } from "./recordFieldType";

export type editReportDetailsType = {
  reportDetails?: reportFieldType;
  reportId?: null | string;
  records: recordFieldType[];
};
