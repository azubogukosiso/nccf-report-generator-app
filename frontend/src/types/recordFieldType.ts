export type recordFieldType =
  | {
      date: string;
      attendance: number;
      venue: string;
      text?: string;
      title?: string;
      minister?: string;
      numOfSoulsPreachedTo?: number;
      numConverted?: number;
      numOfSoulsHealed?: number;
      numFollowedUp?: number;
      songTitle?: string;
      artist?: string;
      program?: string;
    }
  | undefined;
