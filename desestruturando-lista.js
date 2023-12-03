const listaAlunos = ["João", "Juliana", "Caio", "Ana"]
const notasAlunos = [10, 8, 8.5, 9]

const listaAlunosMedias = [listaAlunos, notasAlunos]

function exibeNomeENota(aluno) {
  if (listaAlunosMedias[0].includes(aluno)) {
    // const alunos = listaAlunosMedias[0]
    // const medias = listaAlunosMedias[1]

    const [alunos, medias] = listaAlunosMedias
    console.log(`${aluno} está cadastrado em nossa base de dados.`)

    const indice = alunos.indexOf(aluno)
    const media = medias[indice]
    console.log(`O aluno ${aluno} tem a média ${media}`)
  } else {
    console.log(`Aluno não foi encontrado em nossa base de dados.`)
  }
}

exibeNomeENota("João")
