import { hello } from "./hello"
import { extractEvenNumber } from "./totalPairs";

describe('totalPairs function', () => {
  it('should return hello Romain', () => {
    expect(extractEvenNumber([1, 2, 3, 4])).toEqual([2, 4]);
  })
})