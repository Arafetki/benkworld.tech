import { WORDS_PER_MINUTE } from "@/config/const";
import { parse, stringify } from "superjson";
import { unstable_cache } from "next/cache";

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function estimateReadTimeMinutes(contentLength: number): number {
  return Math.ceil(contentLength/WORDS_PER_MINUTE);
}

export function pluralize(value: number, unit : string) {
  return `${value} ${unit}${value > 1 ? 's' : ''}`;
}

export const cache = <T, P extends unknown[]>(
  fn: (...params: P) => Promise<T>,
  keys: Parameters<typeof unstable_cache>[1],
  opts: Parameters<typeof unstable_cache>[2],
) => {
  const wrap = async (params: unknown[]): Promise<string> => {
    const result = await fn(...(params as P));
    return stringify(result);
  };

  const cachedFn = unstable_cache(wrap, keys, opts);

  return async (...params: P): Promise<T> => {
    const result = await cachedFn(params);
    return parse(result);
  };
};