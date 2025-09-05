import { Timer } from "./timer";

describe('timer class', () => {
  it('should increment a and b', (done) => {
    const timer = new Timer();
    timer.start();

    setTimeout(() => {
      expect(timer.a).toBe(1);
      expect(timer.b).toBe(1);
      done();
    }, 4000);
  });
});
