interface DelimiterMatch extends RegExp {
  exec(str: string): RegExpExecArray | null;
}

const parseDelimiters = (header: string): string[] => {
  if (header.startsWith("[")) {
    const parts: string[] = [];
    const delimiterPattern: DelimiterMatch = /\[([^\]]+)\]/g;
    let match: RegExpExecArray | null;
    while ((match = delimiterPattern.exec(header)) !== null)
      parts.push(match[1]);
    return parts;
  }
  return [header];
};

export const calculateString = (input: string): number => {
  if (input === "") return 0;

  const n = Number(input);
  if (!isNaN(n)) return n;

  let delimiters: string[] = [",", "\n"];
  let numbersSection = input;

  const customDelimiter = input.match(/^\/\/(.+)\n(.*)/s);

  if (customDelimiter) {
    const header = customDelimiter[1];
    delimiters = parseDelimiters(header);
    numbersSection = customDelimiter[2];
  }

  const escapedDelimiters = delimiters.map((d) =>
    d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const splitRegex = new RegExp(escapedDelimiters.join("|"), "g");
  const numbers = numbersSection.split(splitRegex).filter(Boolean).map(Number);

  const negatives = numbers.filter((n) => n < 0);

  if (negatives.length)
    throw new Error("Negatives not allowed: " + negatives.join(","));

  return numbers.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
};
