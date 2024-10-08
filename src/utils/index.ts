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



