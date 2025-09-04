import { getValue } from "./getValue";

describe('getValue function', () => {
  // it('should return value within field', () => {
  //   const prenomEl = document.createElement('input');
  //   prenomEl.id = 'prenom'
  //   prenomEl.value = 'Romain';
  //   document.body.append(prenomEl);

  //   expect(getValue('#prenom')).toBe('Romain');

  //   prenomEl.remove();
  // })


  it('should return value within field', () => {
    const prenomEl = document.createElement('input');
    prenomEl.id = 'prenom'
    prenomEl.value = 'Romain';

    const originalFunction = document.querySelector;
    document.querySelector = () => prenomEl;

    expect(getValue('#prenom')).toBe('Romain');

    document.querySelector = originalFunction;
  })

  it('should return value within field', () => {
    const prenomEl = document.createElement('input');
    prenomEl.id = 'prenom'
    prenomEl.value = 'Romain';

    // spyOn(document, 'querySelector').and.callFake(() => prenomEl);
    spyOn(document, 'querySelector').and.returnValue(prenomEl);

    expect(getValue('#prenom')).toBe('Romain');
    expect(document.querySelector).toHaveBeenCalledWith('#prenom');
  })

  // FAILED car à la fin d'un it, le spyOn est réinitialisé
  // it('should return value within field', () => {
  //   expect(getValue('#prenom')).toBe('Romain');
  // })
});