import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  it('should return undefined', () => {
    expect(dejaSaisis([])).toBeUndefined();
  })
  it('should return trop grand', () => {
    expect(dejaSaisis([2, 5])).toEqual('Vous avez déjà saisi : 2 | 5');
  })
})