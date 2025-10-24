export const calculateString = (input: string): number => {
  if (input === "") return 0;

  const n = Number(input);
  if (!isNaN(n)) return n;

  let sum = 0;
  const numbers = input.split(",");
  for (const numStr of numbers) {
    const num = Number(numStr);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
};
