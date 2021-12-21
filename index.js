'use strict';
const alfy = require('alfy');
const _ = require('lodash');

const text = alfy.input

const types = [
  'camelCase',
  'capitalize',
  'kebabCase',
  'lowerCase',
  'snakeCase',
  'upperCase',
  'upperFirst',
  'toUpper',
  'toLower'
];

const output = types.map(type => ({
  title: _[type](text),
  subtitle: type,
}))

alfy.output(output);
