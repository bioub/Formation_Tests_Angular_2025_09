export function getValue(cssSelector: string) {
  const element = document.querySelector(cssSelector);

  if (!element || !(element instanceof HTMLInputElement)) {
    return null;
  }

  return element.value;
}