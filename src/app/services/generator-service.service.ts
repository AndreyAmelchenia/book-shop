export class GeneratorServiceService {
  public arr: Array<() => number>;

  constructor() {
    this.arr = [this.one, this.two, this.three];
  }

  randomInteger(min: number, max: number): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  one = (): number => this.randomInteger(48, 57);

  two = (): number => this.randomInteger(65, 90);

  three = (): number => this.randomInteger(97, 122);

  generatorFactory(n: number): string {
    return new Array(n)
      .fill('')
      .reduce((acc) => String.fromCharCode(this.arr[this.randomInteger(0, 2)]()) + acc, '');
  }
}
