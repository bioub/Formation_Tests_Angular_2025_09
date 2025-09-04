import { hello } from "./hello"

describe('hello function', () => {
  it('should return hello Romain', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  })
})