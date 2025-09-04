import { doSomething } from "./doSomething";

describe('doSomething function', () => {
  it('should call callback', () => {
    const calls: any[][] = [];

    doSomething((...params) => {
      calls.push(params);
    });

    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe('ABC');
  });

  it('should call callback with createSpy', () => {
    const spy = jasmine.createSpy();

    doSomething(spy);

    expect(spy.calls.all().length).toBe(1);
    expect(spy.calls.first().args[0]).toBe('ABC');
  });

  it('should call callback with createSpy', () => {
    const spy = jasmine.createSpy();

    doSomething(spy);

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('ABC');
  });
})