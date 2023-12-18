const EventEmitter = require('node:events');
// We need to comment type = module in package.json 
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=>{
    console.log('Gentle Remider, Please turn off the motor!');
  },4000)
});

// Set Timeout works only after each line of code is executed.
console.log('Script is Running');
myEmitter.emit('WaterFull');
console.log('Script is still Running');