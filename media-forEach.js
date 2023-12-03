const notas = [10, 8, 8.5, 9]
let somaDasNotas = 0

notas.forEach(function (nota) {
  somaDasNotas += nota
})

const media = somaDasNotas / notas.length
console.log(media.toFixed(2))
