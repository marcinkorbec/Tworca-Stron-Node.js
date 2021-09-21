const Generate = require('js-code-generator');

// const itrVar = generate.variable({
//   name: generate.uniqueIteratorName(),
//   value: "0"
// });
//
// const code =
//   generate.forLoop({
//     startCondition: `${itrVar.data.name} = 0`,
//     stopCondition: `${itrVar.data.name} < 10`,
//     incrementAction: `${itrVar.data.name} += 1`,
//     body: function() {
//       return generate.ifStatement({
//         condition: `${itrVar.data.name} % 2 == 0`,
//         body: function() {
//           return generate.consoleLog(["'even'"]).code;
//         }
//       }).code
//     }
//   }).code
//
// console.log(code);

var example = Generate.firstClassFunction({
  name: "func",
  args: ["a", "b", "c"],
  body: function() {
    return Generate.consoleLog("hi").code;
  }
})

console.log(example.code)