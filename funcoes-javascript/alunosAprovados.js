const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
  },
  {
    nome: 'Miguel',
    nota: 3,
    turma: '2C'
  }
];

function alunosAprovados(array, media) {
  let aprovados = [];

  for (let i = 0; i < array.length; i++) {
    //utilizando o object destructuring
    const { nota, nome } = array[i];

    if (nota >= media) {
      aprovados.push(nome);
    }

    // if (array[i].nota >= media) {
    //   aprovados.push(array[i].nome);
    // }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 5));
