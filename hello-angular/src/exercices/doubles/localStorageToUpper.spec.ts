import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  beforeEach(() => {
    localStorage.clear();
  })
  it('should return value uppercased', () => {
    localStorage.setItem('prenom', 'romain');
    expect(localStorageToUpper('prenom')).toBe('ROMAIN');
  })
  it('should return value uppercased with spyOn', () => {
    spyOn(localStorage, 'getItem').and.returnValue('romain');
    expect(localStorageToUpper('prenom')).toBe('ROMAIN');
    expect(localStorage.getItem).toHaveBeenCalledWith('prenom');
  })
})
