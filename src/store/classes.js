export class Rectangle {
  constructor(principal, interest, time) {
    this.principal = principal;
    this.interest = interest;
    this.time = time;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcSimpleInterest() {
    return this.principal * (1 + this.interest * this.time);
  }
}
