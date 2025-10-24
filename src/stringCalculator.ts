export const calculateString = (input: string): number => {
  if (input === "") return 0;

  const n = Number(input);
  if (!isNaN(n)) return n;

  let sum = 0;
  return sum;
};
