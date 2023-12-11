import { parseResponseError, ResponseError } from "./parseResponseError";

type ErrorStatusHandler<T> = Record<number, (e: ResponseError) => T>;

export const makeRequest = async <T>(apiPromise: Promise<T>, errorStatusHandler?: ErrorStatusHandler<T>) => {
  try {
    const data = await apiPromise;
    return data;
  } catch (e) {
    const error = await parseResponseError(e);
    if (typeof errorStatusHandler?.[error.status] === "function") {
      return errorStatusHandler?.[error.status](error);
    }
    throw error;
  }
};
