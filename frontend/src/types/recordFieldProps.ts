import type { recordFieldType } from "./recordFieldType";

export type recordFieldProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  index: number;
  recordData: recordFieldType;
};
