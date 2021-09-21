
const [,,name, size] = process.argv;

if (name === 'juice')  {
  console.log(`Przygotowuję Sok o pojemności ${size} ml.`)
}
else if (name === 'coffe') {
  console.log(`Przygotowuję Kawę o pojemności ${size} ml.`)
}




