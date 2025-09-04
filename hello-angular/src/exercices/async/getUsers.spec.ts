import { getUsersWithCallback, getUsersWithPromise } from "./getUsers";

describe('getUsersWithCallback', () => {
  it('should return users', (done) => {
    getUsersWithCallback((users) => {
      expect(users.length).toBe(10);
      done();
    });
  });
})

describe('getUsersWithPromise', () => {
  it('should return users', (done) => {
    getUsersWithPromise().then((users) => {
      expect(users.length).toBe(10);
      done();
    });
  });
})

describe('getUsersWithPromise', () => {
  it('should return users', () => {
    return getUsersWithPromise().then((users) => {
      expect(users.length).toBe(10);
    });
  });
})

describe('getUsersWithPromise', () => {
  it('should return users', async () => {
    const users = await getUsersWithPromise();
    expect(users.length).toBe(10);
  });
})

describe('getUsersWithPromise with spyOn', () => {
  it('should return users', async () => {
    spyOn(window, 'fetch').and.resolveTo({
      async json() {
        return [{id: 1, name: 'John Doe'}];
      }
    } as any);

    const users = await getUsersWithPromise();
    expect(users.length).toBe(1);
  });
})

