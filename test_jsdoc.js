#! /usr/bin/env node

'use strict'

/** 
 * descriptions of func
 * @param {number} x - number
 * @param {String} y - string
 * @returns {number} - x + Number(y)
 */
function func(x, y) {
    return x + Number(y);

}

console.log(func(100, 20));
