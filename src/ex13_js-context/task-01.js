/* eslint-disable func-names */

function Calculator() {
  this.result = 0;

  this.add = function (num) {
    if (num) {
      this.result += num;
    }
    return this;
  };

  this.subtract = function (num) {
    if (num) {
      this.result -= num;
    }

    return this;
  };

  this.divide = function (num) {
    if (num) {
      this.result /= num;
    }

    return this;
  };

  this.multiply = function (num) {
    if (num) {
      this.result *= num;
    }

    return this;
  };

  this.getResult = function () {
    return this.result;
  };

  this.reset = function () {
    this.result = 0;
    return this;
  };

  this.fetchData = function (cb) {
    const promise = new Promise((resolve) => {
      cb(500);
      resolve(500);
    });
    promise.then((res) => { this.result = res; });
  };

  this.setState = function (num) {
    if (num) {
      this.result = num;
    }
    return this;
  };
}

const calculator = new Calculator();

module.exports = calculator;
