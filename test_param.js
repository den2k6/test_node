#! /usr/bin/env node

'use strict'

// get command line parameters

const params = process.argv;

for(let i = 0; i < params.length; i++) {
    console.log(params[i])
}

params.forEach(param =>{
    console.log(param)
})

for (let param of params) {
    console.log(param)
}

for (let param in params) {
    console.log(params[param])
}
