// Zadanie praktyczne: moduły


// 1. Napisz moduł [CommonJS] który można użyć w poniższy sposób:

// a)
//   const notification = require('./common-modules');
//   notification.success('Operacja udana');

// // b)
//   const {success} = require('./common-modules');
//   success('Operacja udana');

// // rezultat:
// "Sukces! Operacja udana."


// // 2. Napisz moduł [ES module] który można użyć w poniższy sposób:

// // a)
import notifications from './es-modules.js';
notifications.success('Operacja udana');

// // b)
import { success } from './es-modules.js';
success('Operacja udana');

// // rezultat:
// "Sukces! Operacja udana."


// commonJS
// module.exports.success = (text) => console.log('Sukces! ' + text)

// es module
// const success = (text) => console.log('Sukces! ' + text);

// export {
//   success
// };
// export default {
//   success
// }

