#! /usr/bin/env node

"use strict";

const toDigit = (num, digit = 2) => ("000" + num).toString().slice(-digit);

const main = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let d = new Date();

  let year = toDigit(d.getFullYear(), 4);
  let month = toDigit(d.getMonth() + 1);
  let date = toDigit(d.getDate());
  let day = days[d.getDay()];

  let hours = toDigit(d.getHours());
  let minutes = toDigit(d.getMinutes());
  let seconds = toDigit(d.getSeconds());
  let milliseconds = toDigit(d.getMilliseconds(), 3);

  console.log(
    year +
      month +
      date +
      day +
      "\n" +
      hours +
      minutes +
      seconds +
      "." +
      milliseconds
  );

}

if (require.main === module) {
  main()
}
