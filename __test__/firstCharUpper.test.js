import { firstCharUpper } from '../src/client/js/helperFunctions';

describe("should return string with first letter uppercase", () => {
  test("Should return true", () => {
    const str = 'new york';
    expect(firstCharUpper(str)).toBe('New York');
  });
});