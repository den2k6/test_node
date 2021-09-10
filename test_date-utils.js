require('date-utils');

const dt = new Date();
const fdt = dt.toFormat("YYMMDD_HH24MISS");
console.log(fdt);
