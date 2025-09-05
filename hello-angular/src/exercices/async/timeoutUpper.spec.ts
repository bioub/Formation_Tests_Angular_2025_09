import { timeoutUpper } from "./timeoutUpper";

describe('timeoutUpper', () => {
  it('should return upper case value after 1 second', (done) => {
    timeoutUpper('hello', (result) => {
      expect(result).toBe('HELLO');
      done();
    });
  });
  it('should call the callback with spy', () => {
    jasmine.clock().install();
    const callback = jasmine.createSpy('callback');
    timeoutUpper('hello', callback);
    jasmine.clock().tick(1000);
    expect(callback).toHaveBeenCalledOnceWith('HELLO');
    jasmine.clock().uninstall();
  });
})