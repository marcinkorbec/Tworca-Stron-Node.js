const getParams = (args) => {
  const params = {};
  args.splice(2).forEach((x) => {
    const parts = x.split('=');
    params[parts[0]] = parts[1].split(',');
  })
  return params;
}

const generateClass = (className, params) => {
  let code = ``;
  code += `class ${className} {\n`
  params.methods.forEach(method => {
    code += `\t${method} (${className.toLowerCase()}) {}; \n`
  })
  code += `}`
  return code;
}

const arg = process.argv.splice(2);
const type = arg[0].split(':')[1];
const className = arg[1];
const params = getParams(arg);



if (type === 'class') {
  code = generateClass(className, params);
}

console.log(code);




