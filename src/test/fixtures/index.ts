const k = 2;
const sum = (a: number, b: number) => a + b;
let GG: number;
export const fixtures = {
  sum: (a: number, b: number) => a + b,
  sumAddK: (a: number, b: number) => a + b + k,
  // tslint:disable-next-line:object-literal-sort-keys
  sub: (a: number, b: number) => sum(a, -1 * b),
  pureSub: (a: number, b: number) => {
    const _sum = (_a: number, _b: number) => _a + _b;
    return _sum(a, -1 * b);
  },
  closureSub: (a: number, b: number) => {
    const _sum = sum;
    return _sum(a, -1 * b);
  },
  createsGlobalState: (a: number, b: number) => {
    GG = a + b;
    return GG;
  },
};
