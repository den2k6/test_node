#! /usr/bin/env node

'use strict'

// json file read and write

const json_in = require('./data.json');
console.log(json_in);

const fs = require('fs')
fs.writeFileSync("data_out.json", JSON.stringify(json_in, null, '  '));
