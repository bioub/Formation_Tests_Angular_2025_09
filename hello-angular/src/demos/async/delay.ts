export function delay4s<T>(val: T) {
  return new Promise<T>((resolve) => setTimeout(() => resolve(val), 4000));
}

