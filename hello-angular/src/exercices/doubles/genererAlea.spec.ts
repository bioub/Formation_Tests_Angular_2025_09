import { genererAlea } from "./genererAlea";

describe('genererAlea function', () => {
  it('should return random int with Math random 0', () => {
    spyOn(Math, 'random').and.returnValue(0);
    expect(genererAlea(0, 100)).toBe(0);
  });
  it('should return random int with Math random 0.9999999', () => {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(genererAlea(0, 100)).toBe(50);
  });
  it('should return random int with Math random 0.9999999', () => {
    spyOn(Math, 'random').and.returnValue(0.9999999);
    expect(genererAlea(0, 100)).toBe(100);
  });
  
});