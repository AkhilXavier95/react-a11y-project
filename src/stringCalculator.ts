export const calculateString = (input: string): number => {
  if (input === "") return 0;

  const n = Number(input);
  if (!isNaN(n)) return n;

  let sum = 0;
  let delimiter = /,|\n/;

  let numbers = input.split(delimiter);
  const negatives = numbers.filter((n) => Number(n) < 0);

  if (negatives.length)
    throw new Error("Negatives not allowed: " + negatives.join(","));

  const delimited = input.match(/^\/\/(.)\n(.*)/);

  if (delimited) {
    delimiter = new RegExp(delimited[1]);
    numbers = delimited[2].split(delimiter);
  }

  for (const numStr of numbers) {
    const num = Number(numStr);

    if (!isNaN(num)) {
      sum += num;
    }
  }

  return sum;
};
