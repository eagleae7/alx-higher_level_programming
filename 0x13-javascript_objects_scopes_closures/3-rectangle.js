#!/usr/bin/node

module.exports = class Rectangle
{
  constructor(w, h)
  {
    if (typeof w === 'number' && typeof h === 'number' && w > 0 && h > 0)
    {
      this.w = w;
      this.h = h;
    }
  }

  print()
  {
    for (let i = 0; i < this.h; ++i)
    {
      let j = 0;

      for (; j < this.w; ++j)
      {
        process.stdout.write('X');
      }

      if (j === this.w)
      {
        console.log('');
      }
    }
  }
};
