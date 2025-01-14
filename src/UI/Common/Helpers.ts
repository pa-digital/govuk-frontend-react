export const toCamelCase = (input: string): string => {
  return input
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[a-z]/, (char) => char.toUpperCase());
};
