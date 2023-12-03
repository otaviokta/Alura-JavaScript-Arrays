const notas = [10, 8, 8.5, 9]
let somaDasNotas = 0

for (let elemento of notas) {
  somaDasNotas += elemento
}

const media = somaDasNotas / notas.length
console.log(media.toFixed(2))
