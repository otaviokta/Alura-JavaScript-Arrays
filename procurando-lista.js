const listaAlunos = ["João", "Juliana", "Caio", "Ana"]
const notasAlunos = [10, 8, 8.5, 9]

const listaAlunosMedias = [listaAlunos, notasAlunos]

function exibeNomeENota(aluno) {
  if (listaAlunosMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado em nossa base de dados.`)

    const indice = listaAlunosMedias[0].indexOf(aluno)
    const media = listaAlunosMedias[1][indice]
    console.log(`O aluno ${aluno} tem a média ${media}`)
  } else {
    console.log(`Aluno não foi encontrado em nossa base de dados.`)
  }
}

exibeNomeENota("João")
