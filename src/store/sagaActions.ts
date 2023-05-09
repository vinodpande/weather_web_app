export const FETCH_DATA_SAGA = "FETCH_DATA_SAGA";

export interface sagaActions {
  type: typeof FETCH_DATA_SAGA;
  city: string;
}
