export function running(values: number[]): number[] {
  let total = 0;
  return values.map((one) => (total += one));
}

console.log(running([3, 1, 4, 1, 5]));
