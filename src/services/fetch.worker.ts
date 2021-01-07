import ky, { Input, Options } from "ky";

export async function fetch<T = string[]>(
  url: Input,
  options?: Options,
): Promise<T> {
  const res = await ky(url, options);
  return await res.json();
}
