const listaAlunos = ["João", "Juliana", "Caio", "Ana"]
const notasLunos = [10, 8, 8.5, 9]

let listaAlunosMedias = [listaAlunos, notasLunos]

for (i = 0; i < listaAlunosMedias[0].length; i++) {
  console.log(
    `Nome: ${listaAlunosMedias[0][i]} - Nota: ${listaAlunosMedias[1][i]}`
  )
}
