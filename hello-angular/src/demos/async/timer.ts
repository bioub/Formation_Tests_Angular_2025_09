export class Timer {
  a = 0;
  b = 0;

  ngOnInit() {
    setTimeout(() => {
      this.a = 1;
    }, Math.random() * 4000);

    setTimeout(() => {
      this.b = 1;
    }, Math.random() * 4000);
  }
}
