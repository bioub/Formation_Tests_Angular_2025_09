import { convertToNumber } from "./convertToNumber"

describe('convertToNumber function', () => {
  it('should return sqrt value', () => {
    expect(convertToNumber('4')).toBe(4);
  })
  it('should throw error with non convertible value', () => {
    expect(() => convertToNumber('ABC')).toThrow();
  })
})