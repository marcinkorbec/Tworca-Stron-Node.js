// var parseArgs = require('minimist')

// var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

const sayHi = (name = '') => {
  const args = process.argv.splice(2)
  for (const a of args) {
    const arr = a.split('=');

    if (arr[0] === '--name') {
      name = arr[1];
    }
  }
  console.log(`Cześć ${name} :D`);
}

sayHi();


//console.log(args)