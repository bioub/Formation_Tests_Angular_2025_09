import { comparer } from "./comparer";

describe('comparer function', () => {
  it('should return trop petit', () => {
    expect(comparer(1, 2)).toEqual('Trop petit');
  })
  it('should return trop grand', () => {
    expect(comparer(2, 1)).toEqual('Trop grand');
  })
  it('should return Gagné', () => {
    expect(comparer(2, 2)).toEqual('Gagné');
  })
})