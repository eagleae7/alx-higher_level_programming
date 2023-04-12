#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && typeof h === 'number' && w > 0 && h > 0) {
      this.w = w;
      this.h = h;
    }
  }

  print (char = 'X') {
    for (let i = 0; i < this.h; ++i) {
      let j = 0;

      for (; j < this.w; ++j) {
        process.stdout.write(char);
      }

      if (j === this.w) {
        console.log('');
      }
    }
  }

  rotate () {
    [this.w, this.h] = [this.h, this.w];
  }

  double () {
    this.w *= 2;
    this.h *= 2;
  }
};
