import { promiseRandomTimeout } from "./promiseRandomTimeout";

describe('promiseRandomTimeout', () => {
  it('should return upper case value after 1 second', (done) => {
    promiseRandomTimeout('hello').then((result) => {
      expect(result).toBe('hello');
      done();
    });
  });
  it('should return upper case value after 1 second', async () => {
    const result = await promiseRandomTimeout('hello');
    expect(result).toBe('hello');
  });

  it('should return upper case value after 1 second with spy', async () => {
    jasmine.clock().install();

    const promise = promiseRandomTimeout('hello');

    jasmine.clock().tick(1000);

    const result = await promise;
    expect(result).toBe('hello');

    jasmine.clock().uninstall();
  });
  
})