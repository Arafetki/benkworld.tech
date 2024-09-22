export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function wait(ms: number) {
  return new Promise((resolve)=>setTimeout(resolve,ms))
}

export async function safeAsync<T,E=Error> (promise :Promise<T>): Promise<[null,T] | [E,null]> {
  try {
    const res = await promise
    return [null,res]
  } catch (err) {
    return [err as E,null]
  }
}

export async function retryFetch(input: string | URL | globalThis.Request, options?: RequestInit, retries = 3, backoff = 1000): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(input, options);
      return response
    } catch (error) {
      if (i === retries - 1) {
        throw error; 
      }
      await wait(backoff);
      backoff *= 2; 
    }
  }
  throw new Error(`Failed to fetch after ${retries} retries.`);
}