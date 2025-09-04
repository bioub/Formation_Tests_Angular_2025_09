import { delay4s } from "./delay";

describe('delay4s', () => {

  beforeEach(() => {
    jasmine.clock().install(); // window.setTimeout = ...
  })

  afterEach(() => {
    jasmine.clock().uninstall(); // window.setTimeout = originalSetTimeout
  })

  // it('should delay for 4 seconds', async () => {
  //   const val = await delay4s('test');
  //   expect(val).toBe('test');
  // });

  it('should delay for 4 seconds', (done) => {
    const promise = delay4s('test');

    jasmine.clock().tick(4000);

    promise.then((val) => {
      expect(val).toBe('test');
      done();
    });
  });

  it('should delay for 4 seconds', async () => {
    const promise = delay4s('test');

    jasmine.clock().tick(4000);

    const val = await promise;
    expect(val).toBe('test');
  });
})
