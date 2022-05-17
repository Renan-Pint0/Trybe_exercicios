let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem vinda, ' + info.personagem);
  info['recorrente'] = 'Sim';
  console.log(info);
  for(let key in info){
      console.log(key);
  }
  for(let key in info){
      console.log(info[key]);
  }
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };
  for(let key in info,info2){
      if (info.recorrente === info2.recorrente) {
          info.recorrente = 'Ambos são recorrentes'
          info2.recorrente = ''
          
      }
      console.log(info[key] + ' e '+ info2[key]);
  }

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  leitor['nomeCompleto'] = leitor.nome + ' ' + leitor.sobrenome;
  let livro = leitor.livrosFavoritos[0]
  console.log('O livro favorito da ' + leitor.nomeCompleto + ' se chama ' +  livro['titulo']);
  leitor.livrosFavoritos.push = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
  //console.log(leitor.livrosFavoritos);
  let quantLivros = leitor.livrosFavoritos
  console.log(leitor.nome + ' tem ' + (quantLivros.length + 1) + ' livros favoritos');