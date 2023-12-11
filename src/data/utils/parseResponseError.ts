/* eslint-disable @typescript-eslint/no-explicit-any */

export type ResponseError = {
  body: unknown;
  message: string;
  status: number;
  ok: boolean;
};

export const parseResponseError = async (e: any): Promise<ResponseError> => {
  let body;
  try {
    body = (await e?.response?.json()) ?? null;
  } catch (e) {
    body = "Unable to parse response body";
  }
  const message = body?.message ?? e?.message ?? e?.response?.statusText ?? "Unknown error";
  const status = e?.response?.status ?? 500;
  const ok = e?.response?.ok ?? false;

  return {
    body,
    message,
    status,
    ok
  };
};
