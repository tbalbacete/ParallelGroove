export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};
