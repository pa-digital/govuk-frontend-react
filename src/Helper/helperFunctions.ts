export const clone = <T>(source: any): T => {
  if (source !== undefined && source !== null) {
    return JSON.parse(JSON.stringify(source)) as T;
  } else {
    return source;
  }
};
