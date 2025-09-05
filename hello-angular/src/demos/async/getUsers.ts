export interface User {
  id: number;
  name: string;
}

export function getUsersWithCallback(cb: (users: string[]) => void) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status === 200) {
      cb(xhr.response);
    }
  };

  xhr.send();
}

export function getUsersWithPromise(): Promise<User[]> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json());
}

export async function getUsersWithAsync(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

