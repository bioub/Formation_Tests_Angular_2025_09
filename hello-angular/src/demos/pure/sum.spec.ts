import { sum } from "./sum";

describe('sum function', () => {
  it('should add positives numbers', () => {
    // Arrange / Given (défini les paramètres du test)
    const nb1 = 1;
    const nb2 = 2;

    // Act / When (on exécute le code à tester)
    const result = sum(nb1, nb2);

    // Assert / Then (vérification)
    expect(result).toBe(3);
  });
})