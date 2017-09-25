'use strict';

// var can be redefined and reassigned, scoped to function
var nameVar = 'Reiner';
nameVar = 'Leal';
console.log('nameVar', nameVar);

// let cannot be redefined but can be reassigned
var nameLet = 'Jessica';
nameLet = 'Serena';
console.log('nameLet', nameLet);

// const cannot be redefined or reassigned
var nameConst = 'Frank';
console.log('naneConst', nameConst);
