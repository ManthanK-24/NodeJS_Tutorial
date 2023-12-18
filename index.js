
const obj = require("./second")
// common js module method

console.log("Xello World",obj)

// In NodeJS Single Thread can manage multiple connection because it follows Non blocking IO Model

// node modules(NM) contains all the needed packages & the ones which we add like Express, Angular etc.
// NM gets added after npm install command

// Global Package Way => npm i -g nodemon

// npm init => adds packagejson

// Dev dependencies => npm install --save-dev nodemon

// npm uninstall nodemon

// package-lock.json consists information about entire dependency tree, 
// For eg nodemon may require some other packages & they have their specific version i.e dependency
// so package-lock.json takes care of it. 
