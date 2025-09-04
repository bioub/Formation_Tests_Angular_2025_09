import { racineCarre } from "./racineCarre"

describe('racineCarre function', () => {
  it('should return sqrt value', () => {
    expect(racineCarre(4)).toBe(2);
  })
  it('should throw error with negative val', () => {
    expect(() => racineCarre(-2)).toThrow();
  })
})