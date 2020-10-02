const multiplier = {
  numbers: [5, 6, 1],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((multiplied) => this.multiplyBy * multiplied);
  },
};
console.log(multiplier.multiply());
