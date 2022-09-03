#!/usr/bin/env node
import { questionName } from '../src/cli.js'

console.log('Welcome to the Brain Games!');
const usersName = questionName();
console.log(`Hello, ${usersName}!`);