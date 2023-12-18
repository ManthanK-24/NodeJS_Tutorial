

// Common JS Module Way
//const smp = require('./modulesecond.mjs')
//smp();

// EcmaScript Module Way

// For below code to work we need to add type as Module in package.json
import {simple} from "./modulesecond.mjs"

simple();

import simple30 from "./modulesecond.mjs"
// above only works for single import still without func exits due to default import

simple30();


// Multiple Imports 
// import { simple,simple2 } from "./modulesecond.mjs";
// simple();
// simple2();

// import * as a2 from "./modulesecond.mjs"
// console.log(a2.simple())