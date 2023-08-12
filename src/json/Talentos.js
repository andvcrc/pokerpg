const Talentos = [
  {
    nome: "Armas",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Este Talento emprega uma arma para atacar um pokémon ou um humano. Em posse da arma adequada, o dano de alguém será feito com o dano da arma em questão. Ataque desarmado é considerado mecanicamente um tipo de arma para fins deste Talento e de outra forma de dano de Armas. A menos que modificadas por Características de Classe ou Talentos, ataques de Armas são considerados Golpes causadores de dano Físico (não dano Especial) do Tipo Normal. O dano causado é determinado por este Talento e pelo Talento Arma de Escolha. As armas em si são consideradas de maneira conjunta e abstrata. As únicas mecânicas reais que as diferenciam é se são Corpo a Corpo, de Curto Alcance ou de Longo Alcance: Armas Corpo a Corpo têm alcance de um metro. Armas de Curto Alcance (que incluem aquelas de Arremesso) são consideradas com alcance de até 5 metros, mas, se usadas para atacar um alvo mais próximo que um metro, elas causam 1 de dano a menos. Armas de Longo Alcance possuem alcance de 4 a 10 metros (elas não atacam a menos de 4 metros). A Dificuldade de Acurácia de Armas é 6. O dano causado segue o padrão da tabela abaixo conforme seu Nível. Quando for causado dano de Armas, adicione seu melhor entre seu MA ou seu MV ao dano causado: (1 a 6) 1 1d10+4 Físico;  (7 a 14) 2 1d12+6 Físico;  15 ou mais 3 2d8+6 Físico;  * 4 2d10+8 Físico; * 5 3d8+10 Físico;  * 6 3d10+12 Físico; * 7 3d12+14 Físico;  * 8 4d12+16 Físico * Talentos, Características e outros podem melhorar seu Dano Basal além de 3.",
  },
  {
    nome: "Pokedex",
    classe: "Jogador",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ainda não identificado por sua pokéagenda a até 10 metros.",
    efeito:
      "apontando sua pokéagenda a um pokémon não identificado, ela o identifica. Uma vez que um pokémon possui variações de aparência – desde forma, coloração, pelugem, etc. – mesmo dentro de uma mesma espécie, uma pokéagenda demora um pouco para fazer a análise visual. O tempo necessário é de 12 segundos, ou duas rodadas de combate, para que ela lhe dê as informações. Pokéagendas são aparelhos personalizados, e constituem a identificação oficial de um alguém, portanto são licenciadas para serem entregues a pessoas a partir de 10 anos, e se espera que estejam sempre portadas por alguém para que este indivíduo não tenha problemas com autoridades. Elas são produzidas pela Liga Pokémon e pelas autoridades governamentais e informam a todos que aquele indivíduo possui autorização legal para passear por aí, é quem ele diz ser e porta pokémons. Elas são atualizadas por pesquisadores profissionais e contribuintes leigos. Todas as pokéagendas são a prova d'água, e extremamente resistentes a calor, ácido e muitas outras formas de dano. Costuma ser do melhor interesse de alguém manter uma pokéagenda íntegra, e as autoridades terão que se envolver se uma pokéagenda for destruída, perdida ou roubada.",
  },
  {
    nome: "Acredito em Você!",
    classe: "Jogador",
    requisitos: "Defesa Especial 15",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "pelo resto do combate atual, seu pokémon causa dano extra a cada vez que usar um Golpe. O dano extra é igual a um número de d6 igual a seu MDE.",
  },
  {
    nome: "Aguento Outra!",
    classe: "Jogador",
    requisitos: "Saúde 13.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando sofrer dano, reduza em 5 o dano sofrido. Isso não reduz o custo de ativar Talentos.",
  },
  {
    nome: "Aguento Outra! +",
    classe: "Jogador",
    requisitos: "Saúde 17.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Quando sofrer dano por qualquer razão, reduza em 10 o dano sofrido. Isso não reduz o custo de ativar Talentos. Este Talento substitui Aguento Outra!.",
  },
  {
    nome: "Ainda Não!",
    classe: "Jogador",
    requisitos: "Defesa 17.",
    frequencia: "Diária.",
    gatilho:
      "um pokémon seu cai a 0 Pontos de Vida ou menos, mas não a menos que uma quantidade de Pontos de Vida negativos igual a 100% de seus Pontos de Vida máximos.",
    alvo: null,
    efeito:
      "antes de desmaiar, o pokémon alvo pode executar uma única ação, que pode ser usada para um Golpe ou para se mover, e então ele desmaia. Os seguintes Golpes não são permitidos para tanto: Autodestruição, Esforço, Explosão, Mangual, Reversão, Sofrimento Mútuo.",
  },
  {
    nome: "Arma de Escolha",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Escolha um tipo de arma específico (como ataque desarmado, espada longa, besta, etc.). Quando usar a Arma de Escolha, sua Dificuldade de Acurácia é de apenas 4 e sua tabela de dano de Armas não é aquela apresentada no Talento Armas, sendo substituída pela seguinte: * 1 1d10 +4 Físico; 1 a 6 2 1d12+6 Físico; * 3 2d8+6 Físico; 7 a 14 4 2d10+8 Físico; * 5 3d8+10 Físico; 15 ou mais 6 3d10+12 Físico; * 7 3d12+14 Físico; * 8 4d12+16 Físico; * Talentos, Características e outros podem alterar seu Dano Basal.",
  },
  {
    nome: "Cuidado!",
    classe: "Jogador",
    requisitos: "Velocidade 14.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "Durante esta rodada, se seu pokémon alvo for atacado, jogue uma moeda várias vezes, até sair cara, e não coroa. Quando o inimigo for fazer o Teste de Acurácia, ele deve obter um resultado maior que o número de vezes que a moeda foi jogada ou ele errará.",
  },
  {
    nome: "Dê Tudo de Si!",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    efeito: "Este Golpe acerta e é Crítico.",
  },
  {
    nome: "Deixa Ajudar com Isso!",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: "um humano aliado está fazendo um teste.",
    alvo: null,
    efeito: "o aliado recebe +2 ao teste.",
  },
  {
    nome: "Deixa Ajudar Agora!",
    classe: "Jogador",
    requisitos: "Nível 10, Deixa Ajudar com Isso!",
    frequencia: "Diária. A cada 7 Níveis, receba um uso diário adicional.",
    gatilho: "um humano aliado está fazendo um teste.",
    alvo: null,
    efeito: "o aliado recebe +5 ao teste.",
  },
  {
    nome: "Dê-Me Espaço!",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Uso Único. A cada 10 Níveis, recebe um uso adicional.",
    gatilho: "um pokémon seu foi alvo de um ataque.",
    alvo: null,
    efeito:
      "seu pokémon imediatamente se desloca. Se ele se mover para fora da área do ataque original, ele não sofre os efeitos daquele ataque.",
  },
  {
    nome: "Filiação à Liga Oficial",
    classe: "Jogador",
    requisitos:
      "12 insígnias ou equivalentes, Nível 20, um Ginásio ou equivalente no valor de pelo menos 380000 créditos.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Receba +2 à sua Defesa Especial. Você assume as responsabilidades de um Líder de Ginásio ou equivalente (como Cérebro da Fronteira, por exemplo) e deve aceitar desafios pelo menos semanais. Se você perder, você deve dar ao vencedor uma insígnia (ou equivalente, como uma Medalha de Fronteira dada pelos Cérebros de Fronteira). Você não precisa estar fisicamente presente em seu Ginásio para aceitar desafios o tempo todo, mas precisar deixar claro à população geral que está disponível para ser desafiado e dedicar um tempo para as batalhas oficiais dos desafiantes. Semanalmente, desde que você aceite pelo menos três desafios, você receberá 2000 créditos por seus serviços como membro da Liga. Você deve criar insígnias em seu próprio Ginásio (elas só podem ser criadas oficialmente lá) para dá-las aos possíveis treinadores que vencerem você (você não deve ficar sem insígnias) e criar cada uma custa 1050 créditos. Você só pode ocupar um cargo oficial na Liga, mesmo que se qualifique para mais de um.",
  },
  {
    nome: "Galera, Vê Só!",
    classe: "Jogador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "De agora em diante, quando você subir de Nível (mas não no Nível que obteve este Talento), em vez de você ser obrigado a escolher um Talento, você ganha um Ponto de Talento. A qualquer momento que você poderia usar uma Ação Padrão (mas sem consumir uma Ação Padrão sua) você pode gastar um Ponto de Talento, e este gasto é permanente. Quando você fizer isso, você pode escolher um Talento imediatamente, desde que atenda aos requisitos.",
  },
  {
    nome: "Já Ouvi Falar!",
    classe: "Jogador",
    requisitos: "Ataque Especial 14 ou Defesa Especial 14.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "qualquer coisa que você esteja percebendo, até mesmo uma ideia ou frase.",
    efeito:
      "role 1d20 + MAE e MDE. Se o resultado for 14 ou mais, você sabe algo sobre o alvo, contudo, se o alvo for um pokémon, você já deve tê-lo tido como alvo de sua pokéagenda antes para poder usar este Talento nele.",
  },
  {
    nome: "Karma do Ash",
    classe: "Jogador",
    requisitos: "ter libertado três pokémons leais totalmente evoluídos.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma rolagem.",
    efeito: "você rola novamente um dado da rolagem.",
  },
  {
    nome: "Meditação",
    classe: "Jogador",
    requisitos: "um entre Saúde 12, Ataque Especial 12 ou Defesa Especial 12",
    frequencia: "À Vontade.",
    gatilho: "um humano ou pokémon tenta ler sua mente.",
    alvo: null,
    efeito:
      "Role 1d20 + MAE ou MDE. Se o resultado for 13 ou mais, você mantém sua mente se concentrando em um tópico único à sua escolha (ou em nada). A criatura que tentar ler sua mente não obterá nenhuma informação sobre seus pensamentos ou seus conhecimentos. Ao ativar este Talento sua mente está segura contra tentativas de ler mentes por uma hora.",
  },
  {
    nome: "Mega!",
    classe: "Jogador",
    requisitos: "todos os Atributos 10, uma Pedra-Chave.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon com uma Megapedra.",
    efeito:
      "o pokémon alvo megaevolui por 10 minutos ou até atingir 0 Pontos de Vida.",
  },
  {
    nome: "Mire no Chifre!",
    classe: "Jogador",
    requisitos: "Ataque Especial 13.",
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: "seu pokémon está executando um Golpe.",
    alvo: null,
    efeito:
      "se o resultado do Teste de Acurácia for 19 ou 20, o ataque do seu pokémon causará dano neutro, ignorando todas as resistências e imunidades.",
  },
  {
    nome: "Mire no Chifre! +",
    classe: "Jogador",
    requisitos: "Ataque Especial 16, Mire no Chifre.",
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: "seu pokémon está executando um Golpe.",
    alvo: null,
    efeito:
      "Se o resultado do Teste de Acurácia for 16 ou mais, o ataque do seu pokémon causará dano neutro, ignorando todas as resistências e imunidades. Este Talento substitui Mire no Chifre.",
  },
  {
    nome: "Multitarefa",
    classe: "Jogador",
    requisitos: "todos os Atributos 12, Nível 10.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode executar duas Ações Padrões por rodada. Você ainda não poderá usar ativar mais de uma vez por rodada Talentos (mesmo diferentes) que requerem Ações Padrões.",
  },
  {
    nome: "Não se Meta Comigo!",
    classe: "Jogador",
    requisitos: "Defesa Especial 13.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um humano desafia você para uma batalha não oficial.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for maior que 10, o humano é intimidado e recua de seu desafio.",
  },
  {
    nome: "O Escolhido",
    classe: "Jogador",
    requisitos: "Nível 20.",
    frequencia: "Diária.",
    gatilho: "você falha em um teste que não é de um pokémon.",
    alvo: null,
    efeito: "você tem sucesso no teste.",
  },
  {
    nome: "Rotina de Estudos",
    classe: "Jogador",
    requisitos: "ter comprado um livro pelo menos uma vez.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você deve comprar um livro em uma loja a cada cidade que visite. Se você não tiver pelo menos 70 créditos para comprar um livro quando chegar numa cidade, você perde os benefícios deste Talento até ser capaz de comprar o livro. Este Talento aumenta em um seu Ataque Especial ou sua Defesa Especial. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos se acumulam. Você precisa comprar apenas um livro para manter funcional este Talento mesmo que o possua várias vezes.",
  },
  {
    nome: "Rotina de Exercícios",
    classe: "Jogador",
    requisitos: "ter se exercitado pelo menos uma vez.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você deve se exercitar pelo menos uma vez a cada três dias. Uma prática de exercícios deve consumir pelo menos 30 minutos e ela lhe faz perder 10 PV. Se você não se exercitar pelo menos a cada três dias, você perde os benefícios deste Talento até ser capaz de retomar sua rotina de exercícios, fazendo exercício – neste caso – por dois dias consecutivos. Este Talento aumenta em um sua Saúde, seu Ataque, sua Defesa ou sua Velocidade. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos se acumulam. Você não precisa aumentar sua quantidade de exercícios para manter funcional este Talento mesmo que o possua várias vezes.",
  },
  {
    nome: "Socorrista",
    classe: "Jogador",
    requisitos: "um entre Ataque Especial 13 ou Defesa Especial 13.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um humano.",
    efeito:
      "role 1d20 + MAE ou MDE. Cure um número de Pontos de Vida do alvo igual ao resultado da rolagem.",
  },
  {
    nome: "Sorte do Ash",
    classe: "Jogador",
    requisitos: "ter libertado um pokémon leal totalmente evoluído.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma rolagem.",
    efeito:
      "ao custo de 15 Pontos de Vida (este sacrifício não pode ser ignorado de forma alguma), você pode rolar novamente um dado da rolagem.",
  },
  {
    nome: "Vai Abrir!",
    classe: "Jogador",
    requisitos: "Ataque Especial 15.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma fechadura ou trava não computadorizada.",
    efeito:
      "role 1d20 + MAE. Se o resultado for maior que 15, a fechadura ou a trava são arrombadas, e não haverá sinais de arrombamento.",
  },
  {
    nome: "Você Isso e Você Aquilo!",
    classe: "Jogador",
    requisitos: "Nível 10, todos os Atributos 12.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode controlar dois pokémons simultaneamente. Ambos os pokémons entram na ordem da iniciativa. Você ainda possui apenas uma Ação Padrão por rodada, mas pode usá-la para dar ordens a dois pokémons ao mesmo tempo. Este Talento não pode ser usado se o Talento Multitarefa estiver em uso.",
  },
  {
    nome: "Fama",
    classe: "Artista",
    requisitos: null,
    frequencia: null,
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons recebem 20% de pontos de experiência adicionais a cada vez que receberem pontos de  experiência por Concursos. Se você ganhar um Concurso, receba 15% a mais do prêmio financeiro que receberia.",
  },
  {
    nome: "Postura",
    classe: "Artista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons podem possuir uma soma de Aptidões igual a 24. Além disso, eles podem receber os efeitos de quaisquer Temperos até atingirem este máximo. Se um pokémon beneficiado por Postura alcança mais do que 20 pontos somando todas as suas Aptidões e é posteriormente trocado com alguém que não é um Artista, o pokémon mantém suas Aptidões melhoradas, mas o novo dono não poderá acessar mais do que 20 pontos de Aptidões por Concurso, a menos que possua outra característica que permita elevar as Aptidões de seus pokémons.",
  },
  {
    nome: "Acha Isso Impressionante?",
    classe: "Artista",
    requisitos: "Defesa Especial 17.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo ganha um dos seguintes efeitos, conforme o Golpe que usará na rodada atual. Se o Golpe possui o Descritor Explosão, aumente em 2 o tamanho da Explosão. Se o Golpe não possui este Descritor e é À Distância, aumente o alcance em 4. Finalmente, se o Golpe não possui este Descritor e é Corpo a Corpo, aumente em 4 os Deslocamentos do alvo por esta rodada. Em Concursos, o efeito deste Talento é outro: role 1d20 + MDE. Se o resultado for 13 ou mais, adicione o Descritor Perspectiva a um Golpe usado pelo alvo nesta rodada. Este Talento não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Aplausos",
    classe: "Artista",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "usa o Golpe Bis. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Originalidade. Enquanto em batalhas, este Talento é ilegal, em Concursos, ele é legal. Este Talento não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Clímax",
    classe: "Artista",
    requisitos: "Defesa Especial 15, 2 prêmios em Concursos.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o próximo Golpe cuja Frequência seja Batalha usado pelo alvo não terá seu uso consumido. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Abstração ou pelo Descritor Conquista. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Clímax +",
    classe: "Artista",
    requisitos: "Clímax.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o próximo Golpe cuja Frequência seja Diária ou Por Encontro usado pelo alvo não terá seu uso consumido. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Abstração, pelo Descritor Conquista ou por ambos os Descritores Abstração e Conquista. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe. Este Talento substitui Clímax.",
  },
  {
    nome: "Conquistando o Júri",
    classe: "Artista",
    requisitos: "2 prêmios em Concursos.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo usa imediatamente o Golpe Isca consumindo a Ação de Golpe dele. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Dedicatória. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Não Fique pra Trás!",
    classe: "Artista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "usa o Golpe Mão Amiga. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Reviravolta. Enquanto em batalhas, este Talento é ilegal, em Concursos, ele é legal. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Paciência",
    classe: "Artista",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "usa o Golpe Revogação. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Pausa. Enquanto em batalhas, este Talento é ilegal, em Concursos, ele é legal. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe.",
  },
  {
    nome: "Perfeccionismo",
    classe: "Artista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo ganha 30% de experiência extra pelo Concurso se obtiver o Segundo Lugar ou 80% de experiência extra se obtiver o Primeiro Lugar.",
  },
  {
    nome: "Performance Eletrizante",
    classe: "Artista",
    requisitos: "3 prêmios em Concursos.",
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo imediatamente usa o Golpe Mira sem consumir qualquer Ação. Ele não pode usar Mira para beneficiar um dos seguintes Golpes: Chifre Broca, Fissura, Guilhotina, Zero Absoluto. Você ainda pode fazer o Teste de Acurácia apenas para determinar se é um Crítico. Este Talento deve ser declarado antes que um Teste de Acurácia seja feito. Em Concursos, o efeito deste Talento é outro: adicione o Descritor Extravagância a um Golpe usado pelo alvo nesta rodada. Este Talento não afeta a Pontuação Basal do Golpe",
  },
  {
    nome: "Protagonismo",
    classe: "Artista",
    requisitos: "Velocidade 16.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo usa imediatamente o Golpe Isca consumindo a Ação de Golpe dele. Em Concursos, o efeito deste Talento é outro: substitua um Descritor de um Golpe usado por um pokémon seu pelo Descritor Dedicatória. Só é possível usar este Talento uma vez por Concurso e ele não afeta a Pontuação Basal do Golpe",
  },
  {
    nome: "Beleza",
    classe: "Beldade",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu com pelo menos um prêmio em Desfile de Beleza sobe de nível, você pode adicionar pontos de Atributos ao Ataque Especial, ignorando a Relação Basal.",
  },
  {
    nome: "Vantagem da Beldade",
    classe: "Beldade",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Adicione seu MDE à Pontuação de aparência durante a Apresentação de um Desfile de Beleza. Seus pokémons com Lealdade 2 ou mais são belos: eles são considerados com pelo menos um prêmio em um Desfile de Beleza para fins de seus Talentos. Todos os seus pokémons podem possuir até 20 pontos na Aptidão Beleza, e podem Apelar a até 5 pontos de Aptidão quando poderiam Apelar à Beleza.",
  },
  {
    nome: "Aliados da Beldade",
    classe: "Beldade",
    requisitos: "1 prêmios em Gincana ou Fisiculturismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "adicione seu MDE à Dificuldade de Acurácia de um Golpe que tenha o seu pokémon como alvo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Perspicácia ou Vigor, o Golpe pode não reduzir a Expectativa.",
  },
  {
    nome: "Arrebatar pela Beleza",
    classe: "Beldade",
    requisitos: "1 prêmios em Concurso de Fofura ou Espetáculo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "reduza em 2 a Dificuldade de Acurácia de um Golpe cuja Categoria de Concursos é Beleza. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Estilo ou Ternura, o Golpe aumenta a Expectativa.",
  },
  {
    nome: "Beleza Estonteante",
    classe: "Beldade",
    requisitos: "2 prêmios em Desfiles de Beleza.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "o alvo ganha a Habilidade Identificação até ser convocado de volta à pokébola.",
  },
  {
    nome: "Classe e Finura",
    classe: "Beldade",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou um pokémon aliado.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você pode mudar a Natureza do alvo para uma que beneficie o Ataque Especial à sua escolha.",
  },
  {
    nome: "Elegância",
    classe: "Beldade",
    requisitos: "um pokémon com Beleza 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Beleza 15 usa um Golpe com a Categoria Beleza.",
    alvo: null,
    efeito:
      "eleve uma Fase de Ataque Especial do pokémon. Em Concursos, o efeito deste Talento é outro: o alvo rola 1d4 adicional.",
  },
  {
    nome: "Encantadora",
    classe: "Beldade",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "o alvo ganha a Habilidade Proteção Mágica até ser convocado de volta à pokébola.",
  },
  {
    nome: "Fabulosa",
    classe: "Beldade",
    requisitos: "Defesa Especial 18.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Beleza 15 usa um Golpe com a Categoria Beleza.",
    alvo: null,
    efeito:
      "o Golpe recebe o Descritor Explosão 2, que será centrada em si se ele for Corpo a Corpo ou será centrada dentro do alcance se ele for À Distância. Se o Golpe já possui este Descritor, aumente a área da Explosão em 2.",
  },
  {
    nome: "Graça",
    classe: "Beldade",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "o alvo ganha a Habilidade Graça Serena até ser convocado de volta à pokébola.",
  },
  {
    nome: "Pele Maravilhosa",
    classe: "Beldade",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Desfile de Beleza ou um pokémon aliado com pelo menos um prêmio em Desfile de Beleza.",
    efeito:
      "o alvo ganha a Habilidade Escama Maravilhosa até ser convocado de volta à pokébola.",
  },
  {
    nome: "Sedução",
    classe: "Beldade",
    requisitos: "Defesa Especial 17.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "todos os seus pokémons com pelo menos um prêmio em Desfile de Beleza possuem a Capacidade Sedução. Quando alguém (qualquer um) estiver atacando um pokémon selvagem que atacou um dos seus pokémons com Sedução na mesma rodada ou na rodada anterior, a Dificuldade de Acurácia é reduzida em 2.",
  },
  {
    nome: "Ternura",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu com pelo menos um prêmio em Concurso de Fofura sobe de nível, você pode adicionar pontos de Atributos à Velocidade, ignorando a Relação Basal.",
  },
  {
    nome: "Vantagem do Cativante",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Adicione seu MDE à Pontuação de aparência durante a Apresentação de um Concurso de Fofura. Seus pokémons com Lealdade 2 ou mais são fofinhos: eles são considerados com pelo menos um prêmio em um Concurso de Fofura para fins de seus Talentos. Todos os seus pokémons podem possuir até 20 pontos na Aptidão Ternura, e podem Apelar a até 5 pontos de Aptidão quando poderiam Apelar à Ternura.",
  },
  {
    nome: "Aliados do Cativante",
    classe: "Cativante",
    requisitos: "1 prêmios em Espetáculo ou Fisiculturismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "adicione seu MDE à Dificuldade de Acurácia de um Golpe que tenha o seu pokémon como alvo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Estilo ou Vigor, o Golpe pode não reduzir a Expectativa.",
  },
  {
    nome: "Arrebatar pela Ternura",
    classe: "Cativante",
    requisitos: "1 prêmios em Concurso de Beleza ou Gincana.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "reduza em 2 a Dificuldade de Acurácia de um Golpe cuja Categoria de Concursos é Ternura. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Beleza ou Perspicácia, o Golpe aumenta a Expectativa.",
  },
  {
    nome: "Atenção para não Cair",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "o alvo ganha a Habilidade Catagem até ser convocado de volta à pokébola.",
  },
  {
    nome: "Brincadeiras",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com um prêmio em Concurso de Fofura.",
    efeito:
      "desde que o pokémon ainda não tenha executado um Golpe nesta rodada do combate, ele imediatamente executa um dos seguintes Golpes: Cativar, Charme, Choro ou Cócegas.",
  },
  {
    nome: "Delicadeza",
    classe: "Cativante",
    requisitos: "um pokémon com Ternura 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Ternura 15 usa um Golpe com a Categoria Ternura.",
    alvo: null,
    efeito:
      "eleve uma Fase da Velocidade do pokémon. Em Concursos, o efeito deste Talento é outro: o alvo rola 1d4 adicional.",
  },
  {
    nome: "Fofo Demais",
    classe: "Cativante",
    requisitos: "3 prêmios em Concursos de Fofura.",
    frequencia: "Diária.",
    gatilho:
      "um pokémon seu um prêmio em Concurso de Fofura é alvo de um ataque.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, seu pokémon convence o atacante a ter como alvo um pokémon diferente. O atacante ainda executará o mesmo Golpe e fará o mesmo Teste de Acurácia, mas deve escolher outro alvo válido. Caso não haja outro alvo válido, este Talento tem seu uso desperdiçado.",
  },
  {
    nome: "Infantilização",
    classe: "Cativante",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou um pokémon aliado.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você pode mudar a Natureza do alvo para uma que beneficie a Velocidade à sua escolha.",
  },
  {
    nome: "Miúdo",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "o alvo ganha a Habilidade Ligeiro até ser convocado de volta à pokébola.",
  },
  {
    nome: "Subestimado",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "o alvo ganha a Habilidade Sorte até ser convocado de volta à pokébola.",
  },
  {
    nome: "Tadinho de Mim!",
    classe: "Cativante",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fofura ou um pokémon aliado com pelo menos um prêmio em Concurso de Fofura.",
    efeito:
      "o alvo ganha a Habilidade Tentação até ser convocado de volta à pokébola.",
  },
  {
    nome: "Autor",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou aliado.",
    efeito:
      "esta Característica de Classe envolve escrever e planejar performances artísticas. Escolha um Golpe conhecido pelo pokémon alvo e adicione o Descritor Som ou o Descritor Dança aos Descritores daquele Golpe, mas apenas para o pokémon alvo. Um pokémon não pode, ao longo de sua lista de Golpes, possuir mais do que três Golpes com Descritores adicionados por esta Característica de Classe. Quando o alvo aprender um novo Golpe, você pode escolher remover o Descritor Som ou o Descritor Dança de um Golpe que ele já possuía para adicionar o Descritor Som ou o Descritor Dança ao novo Golpe aprendido. Isso só pode ser feito se o Descritor Som ou o Descritor Dança foram introduzidos no Golpe mediante esta Característica de Classe, de modo que o pokémon continue com no máximo três Golpes com Descritores adicionados por esta Característica de Classe. Finalmente, um mesmo Golpe pode receber tanto o Descritor Som quanto o Descritor Dança, contudo ele contará duas vezes para o máximo de três adições de Descritores permitido por esta Característica de Classe.",
  },
  {
    nome: "Nota de Palco",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "uma vez por concurso, quando seu pokémon executar uma Canção (ou seja, um Golpe com o Descritor Som), role 1d6 extra durante a Apelação. Uma vez por concurso, quando seu pokémon executar uma Dança (ou seja, um Golpe com o Descritor Dança), role 1d6 extra durante a Apelação.",
  },
  {
    nome: "Acompanhamento",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Diária.",
    gatilho:
      "um pokémon seu está executando um Golpe não causador de dano o Descritor Som.",
    alvo: null,
    efeito:
      "o Golpe usado pode ser usado por qualquer pokémon aliado que queira copiá-lo no lugar da Ação de Golpe daquele pokémon desde que isso ocorra ainda na rodada atual e se eles tiverem sucesso em rolar pelo menos 8 em 1d20. Se um pokémon falhar na rolagem, ele poderá executar sua Ação de Golpe normalmente. O pokémon a se beneficiar por este Talento deve conhecer o Golpe a ser reproduzido e isso consome usos deste Golpe.",
  },
  {
    nome: "Coro Coordenado",
    classe: "Coreógrafo",
    requisitos:
      "seis Talentos de Coreógrafo (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "na próxima rodada do combate, todos os aliados (humanos e pokémons) a até 10 metros de você causam dano extra quando fizerem rolagens de dano e reduzem dano sofrido quando forem sofrer danos. A quantidade de dano extra e a quantidade de redução de dano é a mesma: o maior entre seu MDE ou seu MV, mas não mais do que 5.",
  },
  {
    nome: "Deslumbrante",
    classe: "Coreógrafo",
    requisitos: "Nível 15.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu está executando um Golpe o Descritor Dança ou com o Descritor Som.",
    alvo: null,
    efeito:
      "escolha outro Golpe com o Descritor Som ou com o Descritor Dança. O Golpe escolhido deve ser conhecido pelo pokémon que ativou o Gatilho deste Talento e não pode ser causador de dano. Os efeitos do Golpe escolhido são adicionados aos efeitos do Golpe executado pelo pokémon. Contudo, também adicione o Descritor Exaustão ao Golpe. Efeitos que reduziriam um alvo a uma quantidade específica de Pontos de Vida não podem ser usados com Deslumbrante. Também não podem ser usados efeitos que criam Ameaças ou Barreiras. Um Golpe modificado por Deslumbrante não pode ser combinado mediante os Talentos do Síncrono.",
  },
  {
    nome: "Destacado",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu está executando um Golpe o Descritor Som com pelo menos um alvo.",
    alvo: null,
    efeito:
      "aqueles que forem atingidos pelo Golpe do seu pokémon devem atacar o seu pokémon na rodada seguinte. Se eles acertarem ataques contra o seu pokémon na rodada seguinte, reduza o dano que o seu pokémon sofreria por seu MDE + seu MV.",
  },
  {
    nome: "Fortíssimo",
    classe: "Coreógrafo",
    requisitos: "Nível 15.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu está executando um Golpe o Descritor Dança ou com o Descritor Som.",
    alvo: null,
    efeito:
      "o pokémon usa o Golpe duas vezes em uma só Ação de Golpe. Contudo, o pokémon ficará Exausto por duas rodadas. Ele não pode ser retornado à pokébola enquanto estiver Exausto a menos que fique inconsciente (com 0 PV ou menos). Se o próprio Golpe beneficiado por este Talento já possuía o Descritor Exaustão, o pokémon sofre os efeitos da Exaustão por duas rodadas extras.",
  },
  {
    nome: "Nas Pontas dos Pés",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu usa um Golpe com o Descritor Dança, ele não pode ser Empurrado nem Atordoado durante aquela rodada. Uma vez por encontro, quando seu pokémon está Paralisado, ele ainda pode executar um Golpe com o Descritor Dança como se não estivesse Paralisado.",
  },
  {
    nome: "Passos Acrobáticos",
    classe: "Coreógrafo",
    requisitos: "Velocidade 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "pelo resto do encontro, receba +3 à Evasão. Este Talento não pode ser usado novamente até o fim do encontro.",
  },
  {
    nome: "Roteiro Reproduzível",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu está executando um Golpe Corpo a Corpo com o Descritor Dança dentro do alcance de visão de um pokémon aliado (seu ou não).",
    alvo: null,
    efeito:
      "role 1d20 + MV. Se o resultado for 13 ou mais, o pokémon aliado pode, na rodada seguinte, executar o mesmo Golpe que o seu pokémon usou. O pokémon que copiou os passos pode escolher seu(s) próprio(s) alvo(s) do Golpe.",
  },
  {
    nome: "Toque Selvagem",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "uma vez por encontro, quando seu pokémon perderia uma Fase como resultado de um Golpe de um oponente, ignore a perda de Fase. Em Concursos, o efeito deste Talento é outro: quando seu pokémon usar um Golpe com o Descritor Dança, você pode elevar a Expectativa de um jurado específico em 1. Isso só pode ser feito se o seu pokémon receberia o Bônus Elemental por aquele Golpe se estivesse em combate comum.",
  },
  {
    nome: "Vibrato",
    classe: "Coreógrafo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu perderia uma ou mais Fases devido a um Golpe causador de dano usado por um oponente, o oponente deve ter rolado 19 ou 20 no Teste de Acurácia dele para ter sucesso em fazer seu pokémon perder Fases. Uma vez por encontro, quando seu pokémon usou um Golpe com o Descritor Som, todos os que o tiverem como alvo na mesma rodada do combate terão as Dificuldades de Acurácia aumentadas em 1.",
  },
  {
    nome: "Estilo",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu com pelo menos um prêmio em Espetáculo sobe de nível, você pode adicionar pontos de Atributos ao Ataque, ignorando a Relação Basal.",
  },
  {
    nome: "Vantagem do Descolado",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Adicione seu MDE à Pontuação de aparência durante a Apresentação de um Espetáculo. Seus pokémons com Lealdade 2 ou mais são descolados: eles são considerados com pelo menos um prêmio em um Espetáculo para fins de seus Talentos. Todos os seus pokémons podem possuir até 20 pontos na Aptidão Estilo, e podem Apelar a até 5 pontos de Aptidão quando poderiam Apelar ao Estilo.",
  },
  {
    nome: "Acha que é Inalcançável?",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "o alvo ganha a Habilidade Quebra Moldes até ser convocado de volta à pokébola.",
  },
  {
    nome: "Aliados do Descolado",
    classe: "Descolado",
    requisitos: "1 prêmios em Gincana ou Concurso de Fofura.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "adicione seu MDE à Dificuldade de Acurácia de um Golpe que tenha o seu pokémon como alvo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Perspicácia ou Ternura, o Golpe pode não reduzir a Expectativa..",
  },
  {
    nome: "Arrebatar pelo Estilo",
    classe: "Descolado",
    requisitos: "1 prêmio em Concurso de Beleza ou de Fisiculturismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "reduza em 2 a Dificuldade de Acurácia de um Golpe cuja Categoria de Concursos é Estilo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Beleza ou Vigor, o Golpe aumenta a Expectativa.",
  },
  {
    nome: "Atitude Radical!",
    classe: "Descolado",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou um pokémon aliado.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você pode mudar a Natureza do alvo para uma que beneficie o Ataque Especial à sua escolha.",
  },
  {
    nome: "Desafiador",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "o alvo ganha a Habilidade Agonista até ser convocado de volta à pokébola.",
  },
  {
    nome: "Fitar",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "o alvo ganha a Habilidade Intimidar até ser convocado de volta à pokébola.",
  },
  {
    nome: "Liderança",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "todos os seus pokémons com pelo menos um prêmio em Espetáculo e Estilo 10 possuem a Capacidade Hierarquia.",
  },
  {
    nome: "Minúcia",
    classe: "Descolado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Espetáculo ou um pokémon aliado com pelo menos um prêmio em Espetáculo.",
    efeito:
      "o alvo ganha a Habilidade Franco-Atirador até ser convocado de volta à pokébola.",
  },
  {
    nome: "Original",
    classe: "Descolado",
    requisitos: "um pokémon com Estilo 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Estilo 15 usa um Golpe com a Categoria Estilo.",
    alvo: null,
    efeito:
      "eleve uma Fase de Ataque do pokémon. Em Concursos, o efeito deste Talento é outro: o alvo rola 1d4 adicional.",
  },
  {
    nome: "Único",
    classe: "Descolado",
    requisitos:
      "Defesa Especial 18, 3 prêmios em Concurso de Beleza ou de Fisiculturismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Estilo 15 usa um Golpe com a Categoria Estilo.",
    alvo: null,
    efeito:
      "o Golpe não pode ser interceptado por outro alvo nem interrompido por nada.",
  },
  {
    nome: "Acessório Discreto",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após vinte minutos de trabalho, você cria um Acessório que concede +1 à Pontuação de aparência durante a Apresentação de um Concurso. Pokémons e humanos podem se beneficiar de até três Acessórios. Peças de Vestuário são Acessórios, mas só podem ser equipados e ativados por humanos. Itens Mantidos, ao contrário, só podem ser equipados e ativados por pokémons, a menos que também sejam considerados Peças de Vestuário, e apenas um item Mantido é aceito em batalhas porque apenas um item é levado para dentro da pokébola com o pokémon.",
  },
  {
    nome: "Personalização",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "um pokémon seu entra em um Concurso.",
    alvo: null,
    efeito:
      "adicione o número de Acessórios feitos por você usados pelo pokémon à Pontuação de aparência durante a Apresentação de um Concurso.",
  },
  {
    nome: "Acessório Personalizado",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho, escolha uma Aptidão. Você cria um Acessório Estiloso, que concede +1 às rolagens de Apelação de quaisquer Golpes associados àquela Aptidão. Não é possível combinar mais de um Acessório Estiloso para beneficiar a mesma Aptidão.",
  },
  {
    nome: "Alfaiataria Personalizada",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho, escolha uma Aptidão. Você cria uma Peça Estilosa, que é uma Peça de Vestuário para humanos, associada à Aptidão escolhida. A Peça Estilosa possui um valor igual a seu MDE no momento da criação dela. Quando o usuário da Peça Estilosa usá-la em um Concurso que usa aquela Aptidão, ele pode Apelar a pontos da Peça Estilosa quando poderia apelas à Aptidão, mas apenas se estiver ativando algum Talento ou Acessório. Não é possível combinar mais de uma Peça Estilosa para beneficiar a mesma Aptidão. Além disso, aquele que estiver usando a Peça Estilosa recebe +1 às rolagens de Defesa Especial.",
  },
  {
    nome: "Alfaiataria Prática",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho, escolha um Atributo. Você cria uma Peça Prática, que é uma Peça de Vestuário para humanos, associada ao Atributo escolhido. A Peça Prática pode ser ativada pelo usuário para adicionar +1 ao Modificador daquele Atributo por cinco minutos. Uma vez que tenha sido ativada pela terceira vez, ela perde suas habilidades, mas não se quebra. Não é possível combinar mais de uma Peça Prática para beneficiar o mesmo Atributo.",
  },
  {
    nome: "Alfaiataria Primorosa",
    classe: "Estilista",
    requisitos: "Defesa Especial 16.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cinco horas de trabalho, você cria uma Peça Primorosa, que é uma Peça de Vestuário para humanos. A Peça da Sorte pode ser ativada pelo usuário para adicionar +1d8 ao resultado de uma rolagem qualquer feita por ele. Uma vez que tenha sido ativada pela terceira vez, ela quebra. Não é possível ativá-la mais de uma vez na mesma rodada. Além disso, aquele que estiver usando a Peça Primorosa recebe +1 às rolagens de Defesa Especial.",
  },
  {
    nome: "Design de Capacitação",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após duas horas de trabalho, escolha uma Capacidade com um valor numérico ou um Deslocamento. Você cria um item Mantido que pode ser ativado uma vez diária para conceder, durante cinco minutos, +2 à Capacidade designada ou ao Deslocamento designado do pokémon. Se você escolher Força ou Inteligência, o bônus é de apenas +1. Uma vez que o item seja ativado pela terceira vez, ele se quebra.",
  },
  {
    nome: "Design de Habilitação",
    classe: "Estilista",
    requisitos: "Defesa Especial 18.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após duas horas de trabalho, escolha uma Habilidade que um dos seus pokémons possui (mas não a Habilidade Sem Alma). Você cria um item Mantido que pode ser ativado uma vez diária para conceder, por duas rodadas, a Habilidade escolhida ao pokémon.",
  },
  {
    nome: "Design de Técnica",
    classe: "Estilista",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho, escolha um Golpe que um dos seus pokémons conhece. Você cria um Acessório que pode ser ativado uma vez diária para simular aquele Golpe em Concursos. Uma vez que tenha sido ativado pela terceira vez, o Acessório perde suas habilidades, mas não se quebra.",
  },
  {
    nome: "Design Estável",
    classe: "Estilista",
    requisitos: "Design Volátil.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você cria um Acessório ou uma Peça de Vestuário que possui um número de usos limitado antes de quebrar, você pode passar três horas a mais trabalhando no objeto para que ele seja permanente. Acessórios e Peças de Vestuário permanentes não quebram por número de usos, mas só podem ser ativados uma vez diária.",
  },
  {
    nome: "Design Volátil",
    classe: "Estilista",
    requisitos: "ter criado 10 itens com Talentos de Estilista.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você cria um Acessório ou uma Peça de Vestuário que possui um número de usos limitado antes de quebrar, você pode passar três horas a mais trabalhando no objeto para que ele seja semipermanente. Acessórios e Peças de Vestuário semipermanentes não quebram por número de usos, mas, a cada vez que são ativados, o usuário rola 1d20. Se a rolagem for 4 ou menos, o Acessório ou a Peça de Vestuário perdem os benefícios que conferem.",
  },
  {
    nome: "Estilização",
    classe: "Estilista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um item.",
    efeito:
      "após trinta minutos de trabalho, o item alvo passa a adicionar +1 à Pontuação de aparência durante a Apresentação de um Concurso se estiver equipado. Se item alvo não era um Acessório, ele se torna um Acessório. Um mesmo item não pode receber Estilização mais de uma vez.",
  },
  {
    nome: "Perspicácia",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu com pelo menos um prêmio em Gincana sobe de nível, você pode adicionar pontos de Atributos à Defesa Especial, ignorando a Relação Basal.",
  },
  {
    nome: "Vantagem do Nerd",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Adicione seu MDE à Pontuação de aparência durante a Apresentação de uma Gincana. Seus pokémons com Lealdade 2 ou mais são perspicazes: eles são considerados com pelo menos um prêmio em uma Gincana para fins de seus Talentos. Todos os seus pokémons podem possuir até 20 pontos na Aptidão Perspicácia, e podem Apelar a até 5 pontos de Aptidão quando poderiam Apelar à Perspicácia.",
  },
  {
    nome: "Aliados do Nerd",
    classe: "Nerd",
    requisitos: "1 prêmios em Concurso de Beleza ou Espetáculo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.",
    efeito:
      "adicione seu MDE à Dificuldade de Acurácia de um Golpe que tenha o seu pokémon como alvo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Beleza ou Estilo, o Golpe pode não reduzir a Expectativa.",
  },
  {
    nome: "Arrebatar pela Perspicácia",
    classe: "Nerd",
    requisitos: "1 prêmios em Concurso de Fofura ou de Fisiculturismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.",
    efeito:
      "reduza em 2 a Dificuldade de Acurácia de um Golpe cuja Categoria de Concursos é Perspicácia. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Ternura ou Vigor, o Golpe aumenta a Expectativa.",
  },
  {
    nome: "Aula de Idiomas",
    classe: "Nerd",
    requisitos: "Mensal.",
    frequencia: null,
    gatilho: null,
    alvo: "um pokémon seu com Lealdade elevada e Inteligência 6.",
    efeito:
      "após 20 horas de ensino, o alvo agora pode falar idiomas humanos. Logo após Lição de Idiomas, o alvo poderá ter conversas incipientes com seres humanos, mas dentro de uma semana ele já poderá ter conversas tão complexas quanto um falante daquela linguagem. Lição de Idiomas pode ter como alvo um mesmo pokémon mais de uma vez, para ensinar outro idioma humano àquele pokémon.",
  },
  {
    nome: "Detalhista",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.",
    efeito:
      "o alvo ganha a Habilidade Antecipação até ser convocado de volta à pokébola.",
  },
  {
    nome: "Escolaridade",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Semanal",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana.",
    efeito:
      "após dez horas de ensino, o alvo ganha permanentemente +1 à Capacidade Inteligência. Isso não pode elevar a Inteligência do pokémon além de 6.",
  },
  {
    nome: "Intelectualizar",
    classe: "Nerd",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou um pokémon aliado.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você pode mudar a Natureza do alvo para uma que beneficie a Defesa Especial à sua escolha.",
  },
  {
    nome: "Jogos Online",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.",
    efeito:
      "o alvo ganha a Habilidade Download até ser convocado de volta à pokébola.",
  },
  {
    nome: "Potencial Mental",
    classe: "Nerd",
    requisitos: "um pokémon com Perspicácia 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu com Perspicácia 15 usa um Golpe com a Categoria Perspicácia.",
    alvo: null,
    efeito:
      "eleve uma Fase de Defesa Especial do pokémon. Em Concursos, o efeito deste Talento é outro: o alvo rola 1d4 adicional.",
  },
  {
    nome: "Sabe Tudo",
    classe: "Nerd",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.",
    efeito:
      "o alvo ganha a Habilidade Adaptabilidade até ser convocado de volta à pokébola.",
  },
  {
    nome: "Vantagem do Parrudo",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Adicione seu MD à Pontuação de aparência durante a Apresentação de um Concurso de Fisiculturismo. Seus pokémons com Lealdade 2 ou mais são vigorosos: eles são considerados com pelo menos um prêmio em um Concurso de Fisiculturismo para fins de seus Talentos. Todos os seus pokémons podem possuir até 20 pontos na Aptidão Vigor, e podem Apelar a até 5 pontos de Aptidão quando poderiam Apelar ao Vigor.",
  },
  {
    nome: "Vigor",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo sobe de nível, você pode adicionar pontos de Atributos ao Defesa, ignorando a Relação Basal.",
  },
  {
    nome: "Aliados do Parrudo",
    classe: "Parrudo",
    requisitos: "1 prêmios em Concurso de Beleza ou de Fofura.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "adicione seu MD à Dificuldade de Acurácia de um Golpe que tenha o seu pokémon como alvo. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Beleza ou Ternura, o Golpe pode não reduzir a Expectativa.",
  },
  {
    nome: "Arrebatar pelo Vigor",
    classe: "Parrudo",
    requisitos: "1 prêmios em Gincana ou Espetáculo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "reduza em 2 a Dificuldade de Acurácia de um Golpe cuja Categoria de Concursos é Vigor. Isso não pode ser feito mais de uma vez por combate. Em Concursos, o efeito deste Talento é outro: quando o alvo usar um Golpe de Estilo ou Perspicácia, o Golpe aumenta a Expectativa.",
  },
  {
    nome: "Corpulento",
    classe: "Parrudo",
    requisitos: "um pokémon com Vigor 5.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon com Vigor 5.",
    efeito:
      "o alvo recebe uma quantidade de Pontos de Vida temporários igual ao dobro de seu Vigor. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano).",
  },
  {
    nome: "Couro Duro",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "o alvo ganha a Habilidade Áspero até ser convocado de volta à pokébola.",
  },
  {
    nome: "Impassível",
    classe: "Parrudo",
    requisitos: "um pokémon com Vigor 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu com Vigor 15 usa um Golpe com a Categoria Vigor.",
    alvo: null,
    efeito:
      "eleve uma Fase de Defesa do pokémon. Em Concursos, o efeito deste Talento é outro: o alvo rola 1d4 adicional.",
  },
  {
    nome: "Impenetrável",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "o alvo ganha a Habilidade Armadura até ser convocado de volta à pokébola.",
  },
  {
    nome: "Musculação",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "após dez horas de treinamento, o alvo ganha permanentemente +1 à Capacidade Força. Isso não pode elevar a Força do pokémon além de 7. Os efeitos deste Talento são bem visíveis.",
  },
  {
    nome: "Postura Robusta",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "o alvo ganha os efeitos da Habilidade Bicudo até ser convocado de volta à pokébola.",
  },
  {
    nome: "Potência Muscular",
    classe: "Parrudo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos um prêmio em Concurso de Fisiculturismo ou um pokémon aliado com pelo menos um prêmio em Concurso de Fisiculturismo.",
    efeito:
      "o alvo ganha a Habilidade Imprudência até ser convocado de volta à pokébola.",
  },
  {
    nome: "Teimosia",
    classe: "Parrudo",
    requisitos: "Defesa 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu ou um pokémon aliado.",
    efeito:
      "role 1d20 + MD. Se o resultado for 16 ou mais, você pode mudar a Natureza do alvo para uma que beneficie a Defesa à sua escolha.",
  },
  {
    nome: "No Ponto Fraco!",
    classe: "Captor",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você arremessa uma pokébola.",
    alvo: null,
    efeito:
      "você causa ao alvo da pokébola uma quantidade de dano igual a seu MV que não pode ser reduzido pela Defesa ou Defesa Especial. Este Talento pode ser usado quando fizer uma rolagem para Captura ou quando arremessar uma pokébola para causar dano ao alvo usando-a como uma arma de arremesso conforme Armas.",
  },
  {
    nome: "Ponto de Captura",
    classe: "Captor",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "você arremessa uma pokébola.",
    alvo: null,
    efeito:
      "subtraia metade de seu MV das rolagens de d100 feitas quando jogar uma pokébola.",
  },
  {
    nome: "Captura Adiantada",
    classe: "Captor",
    requisitos: "Velocidade 16.",
    frequencia: "Por Encontro.",
    gatilho:
      "um pokémon ou humano obtém um resultado de 17 a 20 em um Teste de Acurácia contra um pokémon selvagem.",
    alvo: null,
    efeito:
      "você pode imediatamente arremessar uma pokébola contra o pokémon selvagem após o ataque ser resolvido.",
  },
  {
    nome: "Captura Chocante",
    classe: "Captor",
    requisitos: "Velocidade 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "você usa No Ponto Fraco!",
    alvo: null,
    efeito:
      "caso o pokémon não seja capturado, role 1d20 + MV. Se o resultado for 15 ou mais, o pokémon está Atordoado ao sair da pokébola.",
  },
  {
    nome: "Cartão com Descontos",
    classe: "Captor",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você recebe 20% de desconto em produtos regulares de pokélojas. Quando você gasta 2000 créditos ou mais em uma só compra, você recebe uma Pokébola Premiada de brinde.",
  },
  {
    nome: "Criar Pokébola",
    classe: "Captor",
    requisitos: "Reparar Pokébola.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho mecânico, role 1d20 + MV. Você cria uma pokébola de acordo com o resultado: Até 14 Pokébola Básica; 15 a 19 Superbola; 20 ou mais Ultrabola.",
  },
  {
    nome: "Jogar Rede",
    classe: "Captor",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você faz um Teste de Acurácia com Dificuldade 4 contra o alvo, que deve estar a até 4 metros. Se acertar, você arremessa uma rede de captura sobre ele para diminuir em 6 todos os Deslocamentos dele. O alvo pode gastar um turno para rolar 1d20 + Força (se for um pokémon) ou 1d20 + metade de seu Ataque (se for humano). Se o resultado for 12 ou mais, ele se liberta da rede.",
  },
  {
    nome: "Ponto de Captura +",
    classe: "Captor",
    requisitos: "Velocidade 16.",
    frequencia: "Constante.",
    gatilho: "você arremessa uma pokébola.",
    alvo: null,
    efeito:
      "subtraia seu MV das rolagens de d100 feitas quando jogar uma pokébola. Este Talento substitui Ponto de Captura.",
  },
  {
    nome: "Ponto de Captura ++",
    classe: "Captor",
    requisitos: "Velocidade 18, Ponto de Captura +.",
    frequencia: "Constante.",
    gatilho: "você arremessa uma pokébola.",
    alvo: null,
    efeito:
      "subtraia o dobro de seu MV das rolagens de d100 feitas quando jogar uma pokébola. Este Talento substitui Ponto de Captura +.",
  },
  {
    nome: "Professor de Cortes Falsos",
    classe: "Captor",
    requisitos: "um pokémon com Corte Falso.",
    frequencia: "Diária.",
    gatilho: "um pokémon sobe de Nível para um Nível múltiplo de 5.",
    alvo: null,
    efeito:
      "role 1d20 + MV. Se o resultado for 16 ou mais, o pokémon que está subindo de Nível para o Nível múltiplo de cinco aprende o Golpe Corte Falso.",
  },
  {
    nome: "Rastreador Informado",
    classe: "Captor",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "você identifica os habitantes da área, sabendo quais pokémons comumente habitam a região e quais Abricós crescem nela.",
  },
  {
    nome: "Rastreador Informado +",
    classe: "Captor",
    requisitos: "Rastreador Informado.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "você identifica os habitantes da área, sabendo quais pokémons comumente habitam a região e quais Abricós crescem nela. Se você tiver capturado pelo menos três pokémons na área, você sabe sobre qualquer pokémon raro que se diz habitar o local e subtrai 10 de quaisquer rolagens de Captura feitas na área pelo resto do dia. Este Talento substitui Rastreador Informado.",
  },
  {
    nome: "Reparar Pokébola",
    classe: "Captor",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma pokébola que falhou em capturar um pokémon e quebrou.",
    efeito:
      "após quinze minutos de trabalho, role 1d20 + MV. Se o resultado for 16 ou mais, a pokébola é consertada e pode ser usada.",
  },
  {
    nome: "Trabalho Manual",
    classe: "Captor",
    requisitos: "Reparar Pokébola.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um Abricó.",
    efeito:
      "após trinta minutos de trabalho mecânico cansativo (consumindo 20 PV), você transforma o Abricó alvo em uma Pokébola Básica.",
  },
  {
    nome: "Empoderador Elemental",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho cansativo (consumindo 20 PV) com os materiais adequados, você cria um Empoderador Elemental para um Tipo à sua escolha. Você pode dar a ele o formato e o nome que quiser.",
  },
  {
    nome: "Forja",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez horas de trabalho com os materiais adequados, você cria uma arma. Faça o seguinte cálculo para descobrir o Nível da Arma (cujo máximo é 100): seu Nível + um número de d6 igual a seu MV. A arma concede um bônus às rolagens de dano feitas com ela idêntico ao Bônus Elemental que um pokémon receberia no Nível igual ao Nível da Arma. Você pode usar até duas matérias-primas durante a forja da arma. A pokémons, uma arma é um item Mantido.",
  },
  {
    nome: "Armamento Elemental",
    classe: "Artífice",
    requisitos: "ter forjado três armas.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar um Empoderador Elemental como matéria-prima quando criar uma arma para que o dano causado por aquela arma passe a ser do Tipo do Empoderador Elemental usado. Infelizmente, isso reduz a Categoria de Dano Basal da arma em 1. Não é possível usar mais de um Empoderador Elemental como matéria-prima para uma arma.",
  },
  {
    nome: "Armeiro",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar as pedras listadas abaixo como matérias-primas quando criar armas. Uma vez diária, quando você faz um Teste de Acurácia para atacar com uma arma criada com uma destas pedras e o resultado é maior que 15, você pode ativar o poder da pedra como uma Ação Livre para usar o efeito descrito adiante no alvo do seu ataque. Se, em virtude de algum Talento ou outra característica sua, seu ataque de Armas pode acertar mais de um alvo, apenas o primeiro alvo sofre o efeito da pedra. Pedra Brilhante Crítico; Pedra da Água Confusão; Pedra da Folha Veneno; Pedra do Fogo Queimadura; Pedra do Sempre Perde uma Fase de Defesa; Pedra do Trovão Paralisia.",
  },
  {
    nome: "Aprendiz",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cinco horas de trabalho cansativo (consumindo 20 PV), role 1d20 + MV. Se o resultado for 20 ou mais, você cria um dos seguintes objetos à sua escolha: Argila, Garra Rápida, Orbe Ardente ou Orbe Tóxico. Se o resultado for menor que 20, você ainda cria um destes objetos, mas qual objeto é determinado aleatoriamente.",
  },
  {
    nome: "Artesão",
    classe: "Artífice",
    requisitos: "Aprendiz.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cinco horas de trabalho cansativo (consumindo 20 PV), role 1d20 + MV. Se o resultado for 20 ou mais, você cria um dos seguintes objetos à sua escolha: Cinturão do Campeão, Lente Larga, Polvilho Brilhante ou Sino de Conchas. Se o resultado for menor que 20, você ainda cria um destes objetos, mas qual objeto é determinado aleatoriamente.",
  },
  {
    nome: "Empoderador Potencial",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez horas de trabalho cansativo (consumindo 20 PV), você cria um Item que, ao ser Mantido, eleva uma Fase de um Atributo à sua escolha. Você pode dar a ele o formato e o nome que quiser.",
  },
  {
    nome: "Ferraria",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez horas de trabalho cansativo (consumindo 20 PV), você cria um objeto que pode ser ativado uma vez diária. Quando ativado, ele garante ao humano que o use uma Habilidade por uma hora. Criar este objeto exige o sacrifício de um item. A Habilidade que ele concederá depende do item usado para produzi-lo. O objeto frequentemente é uma armadura, mas pode assumir outras formas, de acordo com sua criatividade e se o Narrador julgar que a forma é apropriada. Armadura Robustez; Eletrizante Elasticidade; Escama de Dragão Espírito Vigoroso; Escama Marinha Revestimento Aquoso; Garra Afiada Armadura; Pedra do Rei Foco Interior; Pedra Oval Obtusidade; Presa Marinha Revestimento Aquoso; Revestimento Metálico Metabolização; Rocha Magmática Revestimento Magmático; Traje do Ceifador Ritmo Próprio.",
  },
  {
    nome: "Instrumental",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Mensal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez horas de trabalho cansativo (consumindo 20 PV), escolha uma Condição entre Confusão, Paixão ou Sono. Você cria um instrumento musical que, quando tocado, cura a Condição escolhida de todos os pokémons e humanos a até três metros. Este efeito do instrumento musical pode ser ativado até uma vez diária.",
  },
  {
    nome: "Mestre da Armaria",
    classe: "Artífice",
    requisitos: "Armeiro.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar as pedras listadas adiante como matérias-primas para criar armas. Uma vez diária, você pode ativar o poder da pedra. Pedra da Alvorada A qualquer momento com a arma Ataca um alvo adjacente com a arma reduzindo a Categoria de Dano Basal em 2. Pedra da Lua Ao atacar com a arma Ignore a Evasão do alvo e também os Golpes Detecção e Proteção. Pedra do Crepúsculo Ao obter um Crítico com a arma Recebe a Habilidade Franco-Atirador para aquele Crítico. Pedra do Frio Ao obter um Crítico com a arma Congelamento ao alvo. Pedra do Sol Ao acertar um ataque com a arma Causar dano Especial, em vez de dano Físico.",
  },
  {
    nome: "Mestre do Artesanato",
    classe: "Artífice",
    requisitos: "Artesão.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cinco horas de trabalho cansativo (consumindo 20 PV), role 1d20 + MV. Se o resultado for 20 ou mais, você cria um dos seguintes objetos à sua escolha: Bandana, Faixa Meditativa ou Orbe Vital. Se o resultado for menor que 20, você ainda cria um destes objetos, mas qual objeto é determinado aleatoriamente.",
  },
  {
    nome: "Perfumaria",
    classe: "Artífice",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após seis horas de trabalho cansativo (consumindo 20 PV), você cria um Incenso Relaxante, um Incenso Intenso ou um Incenso Místico.",
  },
  {
    nome: "Contagem",
    classe: "Colecionador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "de agora em diante, você recebe um Nível para cada 8 espécies diferentes de pokémons possuídas, em vez de para cada 10 espécies diferentes. Você tem uma estatística chamada Contagem, que é igual a seu MV somado ao número de Níveis que ganhou devido ao número de espécies diferentes de pokémons possuídas.",
  },
  {
    nome: "Maníaco por Captura",
    classe: "Colecionador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você faz um Teste de Captura.",
    alvo: null,
    efeito: "subtraia sua Contagem do resultado do Teste de Captura.",
  },
  {
    nome: "Assistência",
    classe: "Colecionador",
    requisitos: "Ponto de Captura ++.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um aliado faz uma rolagem de Captura.",
    alvo: null,
    efeito:
      "seu aliado pode subtrair sua Contagem do resultado do Teste de Captura e se beneficia de seu Talento Ponto de Captura ++.",
  },
  {
    nome: "Camuflagem",
    classe: "Colecionador",
    requisitos: "Peregrino Silencioso.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "por um número de rodadas igual a seu MV, você recebe a Capacidade Pokémon Camuflagem, desde que você se desloque no máximo metade de seu Deslocamento Terrestre durante seu turno.",
  },
  {
    nome: "Compulsão",
    classe: "Colecionador",
    requisitos: "Velocidade 16.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "você falha em um Teste de Captura.",
    alvo: null,
    efeito: "você joga outra pokébola imediatamente.",
  },
  {
    nome: "Cosplay",
    classe: "Colecionador",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após vinte e quatro horas ininterruptas de trabalho cansativo (consumindo 60 PV), você cria um Disfarce próprio. Você pode usá-lo para se disfarçar como uma espécie de pokémon para se aproximar de pokémons selvagens de Inteligência 4 ou menos. O pokémon reagirá a você enquanto disfarçado como reagiria a um pokémon daquela espécie. Você pode tentar se amigar com o pokémon selvagem se não o provocar. Estes disfarces são para suas medidas, não servindo em outras pessoas. Sua coleção pode ser guardada onde você quiser.",
  },
  {
    nome: "Inabalável",
    classe: "Colecionador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você e seus pokémons são imunes a efeitos que os obrigariam a fugir ou a trocar o pokémon ativo.",
  },
  {
    nome: "Maníaco por Captura +",
    classe: "Colecionador",
    requisitos: "Velocidade 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você faz um Teste de Captura.",
    alvo: null,
    efeito:
      "subtraia o dobro de sua Contagem do resultado do Teste de Captura.",
  },
  {
    nome: "Peregrino Silencioso",
    classe: "Colecionador",
    requisitos: "ter capturado pokémons em quatro biomas diferentes.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "você não faz barulho, como se tivesse sucesso em usar a Perícia Furtividade, desde que você se desloque no máximo metade de seu Deslocamento Terrestre durante seu turno.",
  },
  {
    nome: "Pokébola Múltipla",
    classe: "Colecionador",
    requisitos: "Velocidade 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode atirar duas pokébolas ao mesmo tempo como uma Ação Padrão. Você deve ter como alvo um pokémon diferente para cada pokébola.",
  },
  {
    nome: "Prêmio Raro",
    classe: "Colecionador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "qualquer pokémon shiny ou Lendário conta como oito novas espécies para propósitos de sua Contagem e de subir de Nível.",
  },
  {
    nome: "Rastreador",
    classe: "Colecionador",
    requisitos: "Rastreador Informado +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "role 1d20 + MV. Se o resultado for 21 ou mais, você inicia um encontro com um pokémon selvagem que você sabe existir naquela área. Se o resultado for 25 ou mais, você pode designar uma espécie de pokémon que ainda não capturou.",
    efeito: null,
  },
  {
    nome: "Zelo",
    classe: "Colecionador",
    requisitos: "Velocidade 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "você faz um Teste de Captura em uma pokémon cuja espécie não possuída.",
    alvo: null,
    efeito:
      "subtraia sua Contagem do resultado do Teste de Captura (em adição aos efeitos de Maníaco por Captura, se aplicar os dois Talentos).",
  },
  {
    nome: "Domação",
    classe: "Domador",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "você nomeia o alvo sua Presa. Quando calcular a Chance de Captura de sua Presa, reduza o Nível dela por metade de seu MV. Você só pode possuir uma Presa e só pode declarar um alvo uma Presa no início de sua rodada.",
  },
  {
    nome: "Laçar",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MV. Se o resultado for 12 ou mais, o alvo está Laçado. Um alvo Laçado não pode se mover além de seis metros de você. Ele pode tentar se libertar da Condição se não estiver também Confuso, inconsciente ou dormindo. Para tentar se libertar, ele deve sacrificar a ação dele para fazer uma rolagem. Se ele for um pokémon, ele rola 1d20 + Capacidade Força. Se for um humano, rola 1d20 + metade de seu MA. Em uma rolagem de 14 ou mais, ele se liberta.",
  },
  {
    nome: "Armadilha Paralisante",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano que passe na área onde a armadilha foi posicionada.",
    efeito:
      "você coloca uma armadilha em um espaço adjacente a você. Se um humano ou pokémon se Deslocar através deste espaço, ele ativa a armadilha, que o deixará Paralisado.",
  },
  {
    nome: "Bem Aqui!",
    classe: "Domador",
    requisitos: "um pokémon com um Golpe com o Descritor Prisão.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon Preso por um dos seus pokémons.",
    efeito:
      "quando tentar capturar o pokémon alvo, subtraia 10 do resultado do Teste de Captura.",
  },
  {
    nome: "Bomba Sonora",
    classe: "Domador",
    requisitos: "um pokémon com Supersônico.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito: "usa o Golpe Supersônico.",
  },
  {
    nome: "Derrubar",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon Laçado ou um humano Laçado.",
    efeito:
      "role 1d20 + MV. Quando o alvo é um pokémon, se o resultado exceder 10 + Capacidade Força do pokémon, o alvo está Preso por um número de rodadas igual a seu MV. Quando o alvo é um humano, se o resultado exceder 10 + metade do MA dele, ele está Preso por um número de rodadas igual a seu MV.",
  },
  {
    nome: "Doçura no Ar",
    classe: "Domador",
    requisitos: "um pokémon com Sedução.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito: "usa o Golpe Aromatizar.",
  },
  {
    nome: "Domação +",
    classe: "Domador",
    requisitos: "Velocidade 18.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "você nomeia o alvo sua Presa. Quando calcular a Chance de Captura de sua Presa, reduza o Nível dela por seu MV. Você só pode possuir uma Presa e só pode declarar um alvo uma Presa no início de sua rodada. Este Talento substitui Domação.",
  },
  {
    nome: "Espalhar Ferormônios",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "o alvo desenvolve Paixão pelo mais próximo pokémon do sexo oposto.",
  },
  {
    nome: "Falso Ataque",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você causa dano à sua Presa.",
    alvo: null,
    efeito:
      "quando você faz ataques de Armas que reduziriam sua Presa à inconsciência, você pode escolher mantê-la com 1 Ponto de Vida remanescente.",
  },
  {
    nome: "Pronto para Captura",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon Preso por Derrubar.",
    efeito:
      "enquanto o alvo estiver Preso, a Chance de Captura dele é facilitada em 15.",
  },
  {
    nome: "Rodeio",
    classe: "Domador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon Laçado tenta usar um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MV. Se o resultado for 16 ou mais, o pokémon Laçado sofre dano igual ao Bônus Elemental dele e não pode usar nenhum Golpe na rodada atual.",
  },
  {
    nome: "Tranquilizante",
    classe: "Domador",
    requisitos: "um pokémon com Esporos ou Pó Sonífero.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "usa o Golpe Bocejo em um alvo a até 30 metros. Após o alvo dormir devido aos efeitos do Tranquilizante, ele se torna imune ao Tranquilizante por seis horas.",
  },
  {
    nome: "Braço Mecânico",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você constrói uma prótese mecânica para seu braço direito ou para seu braço esquerdo. Ela adiciona +2 a seu Atributo Ataque. O Braço Mecânico pesa 20 kg, mas possui um sistema acoplador de modo que você não se cansa em carregá-lo.",
  },
  {
    nome: "Radar",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você legalmente altera sua própria pokéagenda para que ela adquira a função de Radar, ou seja, para que ela não precise ser direcionada para um pokémon para avaliá-lo, achando automaticamente qualquer pokémon que esteja parado dentro do alcance do Radar, mas não os pokémons em movimento. Você pode alterar o alcance do Radar a qualquer momento para qualquer valor de 5 metros a 15 metros.",
  },
  {
    nome: "Alinhar Curva",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "aumente seu MAE ou seu MDE por um valor igual ao número de espécies diferentes de pokémons possuídas dividido por dez.",
  },
  {
    nome: "Arma Acoplada",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "após doze horas de trabalho, você pode acoplar ao seu Braço Mecânico uma arma criada por um Artífice com matérias-primas especiais ou não. Você sempre é considerado possuindo o Talento Arma de Escolha para a arma que estiver atualmente acoplada a seu Braço Mecânico e nunca poderá ser desarmado de sua Arma Acoplada. Se preferir, a Arma Acoplada pode ser retrátil se encolhendo para dentro de seu Braço Mecânico quando você determinar. Com sua Arma Acoplada, você pode adicionar sua Velocidade às rolagens de dano em substituição a seu Ataque.",
  },
  {
    nome: "Armadilhas para Pokébolas",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "a qualquer momento, você pode ter uma quantidade de suas pokébolas igual a seu MV para serem usadas em armadilhas. Aplicar ou remover as modificações necessárias para tornar uma pokébola usável em uma armadilha requer dez minutos. Você deve instalar a pokébola em um lugar onde quer deixar a armadilha. Posteriormente, você poderá, usando uma Ação Padrão, disparar o gatilho deixado na Armadilha para Pokébola tanto para capturar um pokémon adjacente (se a pokébola estava vazia) quanto para liberar seu pokémon (se a pokébola contém um pokémon).",
  },
  {
    nome: "Canhão de Pokébolas",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seu Braço Mecânico pode agora atirar pokébolas tanto para enviar seus pokémons à batalha quanto para capturar pokébolas selvagens. Quando atirar um pokébola em um pokémon selvagem, subtraia 12 do resultado do Teste de Captura. Além disso, a pokébola causa 1d8 de dano ao pokémon selvagem, que não pode reduzir este dano usando Defesa ou Defesa Especial.",
  },
  {
    nome: "Hacker",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode acessar qualquer computador ou rede sem a necessidade de um teste de Perícia. Para qualquer outra rolagem da Perícia Programação, receba +5.",
  },
  {
    nome: "Meteoro",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Meteoro.",
  },
  {
    nome: "Óculos Digitalizadores",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "uma vez por rodada, você pode ver uma porcentagem quando olha para um pokémon. Esta porcentagem representa quantos Pontos de Vida ele possui remanescentes.",
    efeito: null,
  },
  {
    nome: "Perfuração",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Perfuração.",
  },
  {
    nome: "Propulsor",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "após doze horas de trabalho, seu Braço Mecânico agora é flutuante e possui um compartimento que revela um propulsor concedendo a você Deslocamentos de Natação 8 e Subaquático 6.",
  },
  {
    nome: "Robô",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez horas de trabalho cansativo (consumindo 40 PV), você consegue construir um pequeno robô em formato de um pokémon controlado remotamente. O robô possui até 50 centímetros de altura e pode ser de qualquer espécie que possua até este tamanho, e sua aparência pode variar. Ele possui Deslocamento Terrestre 5 e pode ter um Item Mantido próprio (ele pode segurar qualquer pequeno objeto). Ele pode ser controlado remotamente a até 25 metros por um dispositivo que consta em seu Braço Mecânico. Pokémons seus com a Capacidade Virtualidade podem possuir um robô seu sem precisar fazer rolagens. Um robô possui 20 Pontos de Vida e recebe dano superefetivo por Eletricidade, Fogo, Terra e Pedra, a menos que esteja possuído por um Pokémon com Virtualidade, caso em que ele é considerado do Tipo do pokémon em questão. Após dez horas de trabalho cansativo (consumindo 40 PV), você consegue atualizar um robô seu para que ele ganhe uma das seguintes funções: receber 20 Pontos de Vida extras, poder usar o Golpe Brasa uma vez diária, poder usar o Golpe Choque do Trovão uma vez diária, possuir um gravador e reprodutor de áudio, possuir uma câmera, receber Deslocamento Aéreo de Voo 5, poder se controlado remotamente a até 200 metros.",
  },
  {
    nome: "Soco Bala",
    classe: "Engenheiro",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco Bala.",
  },
  {
    nome: "Aferir Lealdade",
    classe: "Ladrão",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "",
    alvo: "um pokémon não selvagem.",
    efeito:
      "apontando um Catador a um pokémon, você pode determinar a Lealdade daquele pokémon. A Lealdade é mensurada de 0 a 4. Pokémons com Lealdade 0 odeiam seus donos e/ou são comumente usados para atacar pokémons ou pessoas em situações degradantes ou indefesas. Pokémons com Lealdade 1 foram capturados recentemente, eles eram previamente selvagens e não confiam em seus humanos e/ou são usados para cometer crimes. Um pokémon com Lealdade 2 gosta de seu dono ou foi trocado para um novo dono, mas já era domesticado (não selvagem). Pokémons com Lealdade 3 amam seus donos e/ou foram chocados por eles. Finalmente, pokémons com Lealdade 4 possuam laços inquebráveis com seus donos.",
  },
  {
    nome: "Furto",
    classe: "Ladrão",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon não selvagem com Lealdade igual ou menor a 1.",
    efeito:
      "você atira uma pokébola usando seu Catador como se o alvo fosse um pokémon selvagem. Você faz todo o processo da rolagem de Captura, e subtrai 5 do resultado do Teste de Captura. O pokémon é completamente desconfiado em relação a você, começando com Lealdade 0, a menos que você o tenha salvado de um perigo iminente (caso em que ele possuirá Lealdade 2).",
  },
  {
    nome: "Buscar o Ódio",
    classe: "Ladrão",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa Furto ou Furto +, subtraia 3 do resultado do Teste de Captura se a Lealdade do alvo for 1; ou subtraia 10 do resultado do Teste de Captura se a Lealdade do alvo for 0.",
  },
  {
    nome: "Calafrios de Sombras",
    classe: "Ladrão",
    requisitos: "ter um pokémon de Gelo capturado mediante Furto ou Furto +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade menor que 3.",
    efeito:
      "o alvo imediatamente usa o Golpe Raio de Gelo, mas, para fins de Tipo, o Golpe é considerado sem Tipo (ele causa dano neutro a todos os seres, ignorando resistências, imunidades e vulnerabilidades). O alvo não pode usar outro Golpe nesta rodada. Usar Calafrios de Sombras torna o pokémon menos propício a gostar de você.",
  },
  {
    nome: "Esmagamento de Sombras",
    classe: "Ladrão",
    requisitos: "ter um pokémon Lutador capturado mediante Furto ou Furto +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade menor que 3.",
    efeito:
      "o alvo imediatamente usa o Golpe Quebra Telha, mas, para fins de Tipo, o Golpe é considerado sem Tipo (ele causa dano neutro a todos os seres, ignorando resistências, imunidades e vulnerabilidades). O alvo não pode usar outro Golpe nesta rodada. Usar Esmagamento de Sombras torna o pokémon menos propício a gostar de você.",
  },
  {
    nome: "Explosão de Sombras",
    classe: "Ladrão",
    requisitos: "ter um pokémon de Fogo capturado mediante Furto ou Furto +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade menor que 3.",
    efeito:
      "o alvo imediatamente usa o Golpe Lança-Chamas, mas, para fins de Tipo, o Golpe é considerado sem Tipo (ele causa dano neutro a todos os seres, ignorando resistências, imunidades e vulnerabilidades). O alvo não pode usar outro Golpe nesta rodada. Usar Explosão de Sombras torna o pokémon menos propício a gostar de você.",
  },
  {
    nome: "Fúria de Sombras",
    classe: "Ladrão",
    requisitos: "ter um pokémon capturado mediante Furto ou Furto +.",
    frequencia: null,
    gatilho: null,
    alvo: "um pokémon seu com Lealdade menor que 3.",
    efeito:
      "o alvo imediatamente usa o Golpe Submissão, mas, para fins de Tipo, o Golpe é considerado sem Tipo (ele causa dano neutro a todos os seres, ignorando resistências, imunidades e vulnerabilidades). O alvo não pode usar outro Golpe nesta rodada. Usar Fúria de Sombras torna o pokémon mais propício a desgostar de você.",
  },
  {
    nome: "Furto +",
    classe: "Ladrão",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon não selvagem com Lealdade igual ou menor a 1.",
    efeito:
      "você atira uma pokébola usando seu Catador como se o alvo fosse um pokémon selvagem. Você faz todo o processo da rolagem de Captura, e subtrai 5 do resultado do Teste de Captura. O pokémon é  completamente desconfiado em relação a você, começando com Lealdade 0, a menos que você o tenha salvado de um perigo iminente (caso em que ele possuirá Lealdade 2). Este Talento substitui Furto.",
  },
  {
    nome: "Produto de Resgate",
    classe: "Ladrão",
    requisitos:
      "ter um pokémon com Lealdade 4 capturado mediante Furto ou Furto +.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "todos os seus pokémons com Lealdade 4 capturados mediante Furto ou Furto +.",
    efeito: "some seu MV às rolagens de dano causado pelos alvos.",
  },
  {
    nome: "Raio de Sombras",
    classe: "Ladrão",
    requisitos: "ter um pokémon Elétrico capturado mediante Furto ou Furto +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade menor que 3.",
    efeito:
      "o alvo imediatamente usa o Golpe Relâmpago, mas, para fins de Tipo, o Golpe é considerado sem Tipo (ele causa dano neutro a todos os seres, ignorando resistências, imunidades e vulnerabilidades). O alvo não pode usar outro Golpe nesta rodada. Usar Raio de Sombras torna o pokémon menos propício a gostar de você.",
  },
  {
    nome: "Resgate!",
    classe: "Ladrão",
    requisitos:
      "ter um pokémon com Lealdade 3 capturado mediante Furto ou Furto +.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você captura mediante Furto ou Furto + um pokémon com Lealdade 0 ou 1, a Lealdade dele em relação a você começa em no mínimo 1.",
  },
  {
    nome: "Rompimento do Vínculo",
    classe: "Ladrão",
    requisitos: "ter um pokémon capturado mediante Furto ou Furto +.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade 2.",
    efeito:
      "role 1d20 + MV. Se o resultado for 20 ou mais, você pode ter o alvo como alvo de Furto ou de Furto + mesmo tendo Lealdade 2, desde que o Furto aconteça em até 2 rodadas após o Rompimento do Vínculo.",
  },
  {
    nome: "Arremessador",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você recebe o Talento Arma de Escolha para todas as armas de arremesso de curto alcance. Vo- cê pode arremessar armas de curto alcance e pokébolas a um número de metros adicionais igual a seu MV.",
  },
  {
    nome: "Prestidigitação de Pokébolas",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "seu pokémon fica inconsciente ou um oponente envia um pokémon ao combate.",
    alvo: null,
    efeito:
      "você pode retornar um pokémon à pokébola e enviar outro pokémon no lugar como uma Ação Livre. Se for seu turno, você pode usar esta Característica de Classe mesmo que o Gatilho não seja satisfeito.",
  },
  {
    nome: "Bumerangue",
    classe: "Malabarista",
    requisitos: "Ricochete.",
    frequencia: "Constante.",
    gatilho: "acertar o segundo alvo usando Ricochete.",
    alvo: null,
    efeito: "o objeto arremessado ricocheteia de volta para sua mão.",
  },
  {
    nome: "Como um Raio!",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você coloca um pokémon seu para fora da pokébola.",
    alvo: null,
    efeito:
      "use o Golpe Clarão com centro da Explosão no local onde o pokémon saiu da pokébola. Na rodada atual, adicione seu MV ao Atributo Velocidade do pokémon para fins de determinar a Iniciativa.",
  },
  {
    nome: "Continue o que Ele Estava Fazendo!",
    classe: "Malabarista",
    requisitos: "Velocidade 18.",
    frequencia: "Diária.",
    gatilho: "você chama um pokémon de volta para a pokébola.",
    alvo: null,
    efeito:
      "o pokémon que está voltando para a pokébola não é meramente trocado, ele usa Passar o Bastão imediatamente.",
  },
  {
    nome: "Lançamento",
    classe: "Malabarista",
    requisitos: "Velocidade 18.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Lançamento, e qualquer item em sua posse pode ser considerado o Item Mantido para fins deste Golpe.",
  },
  {
    nome: "O Primeiro Golpe!",
    classe: "Malabarista",
    requisitos: "Como um Raio!",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você coloca um pokémon seu para fora da pokébola.",
    alvo: null,
    efeito:
      "seu pokémon pode usar um Golpe com o Descritor Impacto imediatamente assim que sair da pokébola como uma Ação de Interrupção. Golpes usados desta forma possuem o efeito extra de empurrar o alvo em cinco metros. Isso consome sua Ação de Comando da rodada.",
  },
  {
    nome: "Prestidigitação de Pokébolas +",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho:
      "seu pokémon fica inconsciente ou um oponente envia um pokémon ao combate.",
    alvo: null,
    efeito:
      "você pode retornar um pokémon à pokébola e enviar outro pokémon no lugar como uma Ação Livre. Se for seu turno, você pode usar este Talento mesmo que o Gatilho não seja satisfeito. Este Talento substitui Prestidigitação de Pokébolas.",
  },
  {
    nome: "Ricochete",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho:
      "um objeto (possivelmente uma arma ou uma pokébola) arremessado por você atinge o alvo.",
    alvo: null,
    efeito:
      "o objeto ricocheteia se movendo um número de metros igual a seu MV a uma direção à sua escolha. Se isso o faz atingir um segundo alvo, faça um novo Teste de Acurácia para atingir este alvo. Mediante este Talento, é possível expandir ainda mais o alcance de arremessos simplesmente ricocheteando em objetos inanimados (como paredes).",
  },
  {
    nome: "Saída de Emergência",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você envia um pokémon a partir de uma pokébola como uma Ação de Interrupção.",
  },
  {
    nome: "Saque Rápido",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Por Encontro.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar um item em si ou em um aliado (humano ou pokémon) como uma Ação Livre.",
  },
  {
    nome: "Sem as Mãos!",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode manter consigo até três objetos de tamanho igual ou menor que uma pokébola de maneira que sejam indetectáveis em uma revista. Você pode ativar pokébolas contendo seus pokémons sem usar as mãos.",
  },
  {
    nome: "Uma Rodada é uma Jornada!",
    classe: "Malabarista",
    requisitos:
      "quatro Talentos de Malabarista (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: "um pokémon seu usa um Golpe.",
    alvo: null,
    efeito:
      "você imediatamente troca seu pokémon que acabou de usar um Golpe por outro pokémon ativo, mas não pode dar comandos a este pokémon ainda nesta rodada.",
  },
  {
    nome: "Voleio de Pokébolas",
    classe: "Malabarista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons",
    efeito:
      "seus pokémons adicionam metade de seu MV aos valores de Velocidade deles para fins de calcular a Iniciativa no turno que eles saem das pokébolas.",
  },
  {
    nome: "Design Avançado",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 5 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quinze minutos de trabalho cansativo (consumindo 20 PV), você cria uma pokébola de um dos tipos a seguir: Curativa, Ligeira, Luxuosa, de Mergulho, de Ninho, de Penumbra, de Repetição, de Teia ou Temporizada.",
  },
  {
    nome: "Vantagem Condicional",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "você arremessa uma pokébola.",
    alvo: null,
    efeito:
      "se você estiver usando uma pokébola que condiciona a subtração de um número da rolagem de captura dentro de determinadas condições e estiver satisfazendo as condições adequadas (por exemplo, se usar uma Pokébola de Penumbra durante a noite), você subtrai também seu MV da rolagem de captura.",
  },
  {
    nome: "A Pokébola do Salvador",
    classe: "Pokebolista",
    requisitos: "Trabalho Manual.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "sete Abricós sendo um de cada cor.",
    efeito:
      "após três horas de trabalho mecânico cansativo (consumindo 25 PV), você combina um Abricó de cada cor (um branco, um rosado, um vermelho, um amarelo, um verde, um azul e um preto) para fazer uma pokébola chamada Pokébola do Salvador. Uma Pokébola do Salvador pode capturar um pokémon que foi deixado inconsciente na rodada anterior. Ela não possui bônus ou penalidades para captura.",
  },
  {
    nome: "Ferreiro de Abricós",
    classe: "Pokebolista",
    requisitos: "Ferreiro de Pokébolas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois Abricós.",
    efeito: "combine os dois Abricós alvos em outro Abricó de sua escolha.",
  },
  {
    nome: "Ferreiro de Pokébolas",
    classe: "Pokebolista",
    requisitos: "Trabalho Manual.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um Abricó.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), role 1d20 +MV. Se o resultado for 13 ou mais, você converte um Abricó em uma pokébola de um tipo específico, conforme o Abricó: Amarelo Lunar; Azul Atrativa; Branco Rápida; Preto Pesada; Rosa Do Amor; Verde Amigável; Vermelho De Nível.",
  },
  {
    nome: "Mais Poder para o Pokémon",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "uma Pokébola de Ninho.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), role 1d20 + MV. Se o resultado for 15 ou mais, quando a Pokébola de Ninho alvo for usada para capturar um pokémon, o pokémon sobe 1d4 Níveis ao ser capturado. Se o resultado for 25 ou mais, o pokémon recebe 2d4 Níveis, em vez de apenas 1d4.",
  },
  {
    nome: "Melhoria de Aptidão",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "qualquer pokébola.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV) e custoso (consumindo 500 créditos), você aplica uma Melhoria em uma pokébola. Escolha uma Aptidão. Um pokémon capturado em uma pokébola com Melhoria de Competência recebe +1d2 de bônus à Aptidão escolhida. Uma pokébola só pode possuir uma Melhoria, a menos que você possua o Talento Quebrar Cela, que permite fazer amplas alterações na mecânica de uma pokébola até que ela permita três Modificações. Neste caso, é possível aplicar Melhoria de Competência mais de uma vez na mesma pokébola, para a mesma Aptidão ou não.",
  },
  {
    nome: "Melhoria de Capacidade",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "qualquer pokébola.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), você aplica uma Melhoria em uma pokébola. Escolha uma Capacidade Pokémon ou um Deslocamento Pokémon. Se escolher um Deslocamento, o pokémon mantido dentro da pokébola com Melhoria de Capacidade recebe +2 àquele Deslocamento. Se escolher uma Capacidade (como Inteligência, Força ou Salto), o pokémon mantido dentro da pokébola com Melhoria de Capacidade recebe +1 àquela Capacidade. Uma pokébola só pode possuir uma Melhoria, a menos que você possua o Talento Quebrar Cela, que permite fazer amplas alterações na mecânica de uma pokébola até que ela permita três Melhorias. Neste caso, é possível aplicar Melhoria de Capacidade mais de uma vez na mesma pokébola, mas não para a mesma Capacidade nem para o mesmo Deslocamento.",
  },
  {
    nome: "Melhoria de Combate",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "qualquer pokébola.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), você aplica uma Melhoria em uma pokébola. Escolha um Atributo. Sempre que o pokémon mantido dentro da pokébola com Melhoria de Atributo sai de sua pokébola, ele eleva uma Fase do Atributo selecionado. Uma pokébola só pode possuir uma Melhoria de Batalha, mesmo que você possua Quebrar Cela.",
  },
  {
    nome: "Pokébola para cada Habitat",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "uma Pokébola de Mergulho.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), você altera o ambiente dentro do qual a Pokébola de Mergulho facilita a captura para um dos biomas a seguir à sua escolha (no lugar de funcionar enquanto em ambiente subaquático e subterrâneo): Água Doce, Ártico, Caverna, Cidade, Deserto, Floresta, Montanha, Pântano, Planície, Praia, Selva, Taiga ou Tundra. Altere o nome da pokébola em conformidade com sua nova função.",
  },
  {
    nome: "Pokébola para cada Tipo",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "uma Pokébola de Teia.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), você altera a Pokébola de Teia para trocar quais Tipos de pokémons ela facilita a captura. O novo nome da pokébola e os tipos cuja captura ela facilita estão listados na tabela abaixo: Aérea Gelo e Voador; Assombrosa Fantasma e Trevas; Encantadora Fada e Normal; Limosa Lutador e Venenoso; Mística Dragão e Psíquico; Quente Elétrico e Fogo; Sólida Metal e Pedra; Terrena Planta e Terra.",
  },
  {
    nome: "Quebrar Cela",
    classe: "Pokebolista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "qualquer pokébola.",
    efeito:
      "após quinze minutos de trabalho mecânico cansativo (consumindo 10 PV), você faz amplas alterações em uma pokébola. Uma pokébola comum pode receber uma Melhoria. Após este Talento ser usado, uma pokébola poderá receber uma Melhoria adicional. Ainda é possível usá-lo novamente para possibilitar uma terceira Melhoria na mesma pokébola. Três Modificações são o máximo que se pode ter. Também é possível usar este Talento para desativar uma Melhoria anteriormente vigente em uma determinada pokébola para abrir espaço para outra Melhoria em seu lugar.",
  },
  {
    nome: "Cuidado Parental",
    classe: "Criador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "adicione metade de seu MD a um Atributo Basal do pokémon que nascer e metade de seu MDE a outro Atributo Basal dele. O bônus concedido a cada Atributo Basal não pode exceder 6.",
  },
  {
    nome: "Fábrica de Ovos",
    classe: "Criador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode fazer até sete Testes de Procriação diários. As chances de sucesso em Testes de Procriação aumentam de 25 para 35 se os dois pokémons não pertencem à mesma família e de 50 para 70 se ambos pertencem à mesma família. Subtraia seu MD ou seu MDE do resultado do Teste de Procriação. É necessário que os pokémons passem apenas seis horas juntos para tentarem procriar, em vez de 8 horas. Analisando um ovo, você pode identificar qual é o pokémon que nascerá.",
  },
  {
    nome: "Amor e Carinho",
    classe: "Criador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um número de pokémons igual a seu MD ou seu MDE.",
    efeito:
      "após quatro horas cuidando dos alvos, eles são recuperados em todos os seus Pontos de Vida e são removidas quaisquer Condições deles. Não são recuperadas outras características.",
  },
  {
    nome: "Chocadeira",
    classe: "Criador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "ovos em sua posse.",
    efeito:
      "os ovos que você carrega consigo chocam em apenas 80% do tempo que precisariam.",
  },
  {
    nome: "Chocadeira +",
    classe: "Criador",
    requisitos: "Chocadeira, Defesa Especial 19.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "ovos em sua posse.",
    efeito:
      "os ovos que você carrega consigo chocam em apenas 70% do tempo que precisariam. Este Talento substitui Chocadeira.",
  },
  {
    nome: "Começo Promissor",
    classe: "Criador",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 12 ou mais, o pokémon que nascer sabe todos os Golpes que seriam aprendidos até um Nível igual à sua Defesa Especial.",
  },
  {
    nome: "Comida Caseira",
    classe: "Criador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora cozinhando, role 1d4 + MDE. O resultado representa a quantidade de porções de alimentos que você produz, que podem ser consumidos tanto por pokémons quanto por humanos, alimentando-os igualmente por um dia inteiro. Pokémons que comerem sua comida têm sua lealdade aumentada. Você sabe exatamente quais são as necessidades dietéticas de um pokémon seu.",
  },
  {
    nome: "Cuidado Parental +",
    classe: "Criador",
    requisitos: "Defesa 16, Defesa Especial 18.",
    frequencia: "Diária.",
    gatilho: "Diária.",
    alvo: null,
    efeito:
      "adicione seu MD a um Atributo Basal do pokémon que nascer seu MDE a outro Atributo Basal dele. O bônus concedido a cada Atributo Basal não pode exceder 6. Este Talento substitui Cuidado Parental.",
  },
  {
    nome: "Cuidarei Bem Dele!",
    classe: "Criador",
    requisitos: "Defesa Especial 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma fêmea pokémon não hostil com um ou mais ovos.",
    efeito:
      "role 1d100 - MD. Se o resultado for inferior à Chance de Captura do alvo, você pode receber dela um ovo. Esta rolagem pode ser modificada pelo Narrador conforme a disposição do alvo em relação a você. Uma falha neste teste tornará a fêmea hostil.",
  },
  {
    nome: "Ninhada",
    classe: "Criador",
    requisitos: "um pokémon que já produziu pelo menos dois ovos.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "pokémons que estão procriando.",
    efeito:
      "role 1d4. O resultado é o número de ovos que são produzidos se houver sucesso na procriação.",
  },
  {
    nome: "Ninhada +",
    classe: "Criador",
    requisitos: "Ninhada, um pokémon que já produziu pelo menos quatro ovos.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "pokémons que estão procriando.",
    efeito:
      "role 1d6 +1. O resultado é o número de ovos que são produzidos se houver sucesso na procriação. Este Talento substitui Ninhada.",
  },
  {
    nome: "Nunca Teria Acontecido!",
    classe: "Criador",
    requisitos:
      "seis Talentos de Criador (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons de sexos opostos que não compartilham um Grupo Reprodutivo.",
    efeito:
      "role 1d20 + MD e MDE. Se o resultado for 23 ou mais, eles são autorizados a se reproduzir, mas ainda devem fazer um Teste de Procriação.",
  },
  {
    nome: "Potencial Latente",
    classe: "Criador",
    requisitos: "Defesa 17.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu sobe de Nível para um Nível múltiplo de 5.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, este pokémon aprende um Golpe de sua lista de Golpes para um Nível anterior ao Nível atual.",
  },
  {
    nome: "Progressão Natural",
    classe: "Criador",
    requisitos: "Defesa 18.",
    frequencia: "Constante.",
    gatilho: "um pokémon seu sobe de Nível para um Nível múltiplo de 5.",
    alvo: null,
    efeito:
      "o pokémon recebe +1 a dois Atributos Basais diferentes. Todas as vezes que este bônus for aplicado subsequentemente, os mesmos dois Atributos devem ser beneficiados e se o pokémon recebeu os benefícios de Cuidado Parental ou Cuidado Parental +, os mesmos Atributos beneficiados por Cuidado Parental ou Cuidado Parental + devem ser aqueles beneficiados por Progressão Natural. Finalmente, o bônus concedido a cada Atributo Basal não pode exceder 6 quando somados os bônus concedidos por Cuidado Parental, Cuidado Parental + e Progressão Natural. Este Talento não beneficia seus pokémons retroativamente.",
  },
  {
    nome: "Zootecnista",
    classe: "Criador",
    requisitos: "Defesa Especial 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons compatíveis para reprodução conforme seus Grupos Reprodutivos.",
    efeito:
      "dando 8 horas juntos aos dois pokémons, você garante que um ovo será produzido.",
  },
  {
    nome: "Procurar Frutos Curativos",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 15 ou mais, você encontra uma Fruta. Para determinar qual fruta, role 1d10 e consulte a tabela abaixo: 1 Cereja (Cheri); 2 Castanha (Chesto); 3 Pêssego (Pecha); 4 Morango (Rawst); 5 Pera (Aspear); 6 Maçã (Leppa); 7 Laranja (Oran); 8 Caqui (Persim); 9 Ameixa (Lum); 10 Toranja (Sitrus).",
  },
  {
    nome: "Semeador",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você carrega consigo um vaso portátil usado como uma pequena horta para plantar e produzir plantas, que podem gerar Frutas ou Abricós. Ao plantar uma Fruta ou um Abricó em sua Horta, role 1d4 +1. A planta germinará e frutificará em um número de dias igual ao resultado. Quando pronta para colher, role 1d4 para determinar quantas Frutas ou Abricós são produzidos por aquela planta. Você pode ter crescendo em sua Horta portátil até duas plantas simultaneamente. Você não pode trocar qual a planta que está crescendo antes de colher suas Frutas ou seus Abricós abrindo espaço na terra para outro semeio. A Horta portátil pode ser feita dos materiais que você preferir, mas pesa 7 kg e possui as seguintes dimensões: 45 centímetros por 30 centímetros por 15 centímetros, tornando impossível carregar mais de uma consigo.",
  },
  {
    nome: "Busca Mundana",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 15 ou mais, você encontra uma Fruta à sua escolha que não possui qualquer efeito",
  },
  {
    nome: "Busca Rara",
    classe: "Botânico",
    requisitos:
      "já ter colhido uma das seguintes frutas em sua Horta: carambola (Starf), Enigma, fruta milagrosa (Micle), jabuticaba (Jaboca), jambo (Rowap), pinha (Custap).",
    frequencia: null,
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 20 ou mais, você encontra uma Fruta. Para determinar qual fruta, role 1d6 e consulte a tabela abaixo:1 Langsat (Lansat); 2 Carambola (Starf); 3 Enigma; 4 Fruta Milagrosa (Micle); 5 Pinha (Custap); 6 Jabuticaba (Jaboca).",
  },
  {
    nome: "Busca Saborosa",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 15 ou mais, você encontra uma Fruta. Para determinar qual fruta, role 1d6 e consulte a tabela abaixo: 1 Figo (Figy); 2 Kiwi (Wiki); 3 Manga (Mago); 4 Goiaba (Aguav); 5 Mamão (Iapapa); 6 Role novamente.",
  },
  {
    nome: "Coma Agora!",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Diária. A cada 7 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon aliado.",
    efeito:
      "o alvo imediatamente consome e se beneficia dos efeitos da fruta que ele carrega, ignorando fatores ativadores (como estar a menos da metade dos PV).",
  },
  {
    nome: "Conhecedor de Frutos",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode identificar qualquer Fruta, suas propriedades e seus sabores (portanto como ela influencia Aptidões). Receba +2 às rolagens para produzir Sucos ou Temperos. Quando seu pokémon come uma Fruta cujo sabor ele gosta, quaisquer ganhos de lealdade são dobrados.",
  },
  {
    nome: "Eficiência da Fruta",
    classe: "Botânico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "um pokémon se alimenta de uma fruta.",
    alvo: null,
    efeito:
      "o alvo não consumirá a fruta, mas ainda receberá seus benefícios. Na segunda vez que aquela fruta conceder seus benefícios, ela será consumida normalmente.",
  },
  {
    nome: "Fundir Frutas",
    classe: "Botânico",
    requisitos: "Defesa Especial 18.",
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "cinco frutas iguais.",
    efeito:
      "você usa as cinco frutas para produzir um Item que, ao ser Mantido, possui os mesmos efeitos  Frutas usadas para produzi-lo, mas que não é consumido ao ser usado enquanto Mantido. Se o item for usado mais de uma vez diária, ele se quebra, tornando-se lixo. Você pode chamar o item pelo nome que quiser e pode usar sua criatividade para dizer como ele é. Ele não é mais uma Fruta.",
  },
  {
    nome: "Hibridização",
    classe: "Botânico",
    requisitos: "já ter colhido dez frutos em sua Horta.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "frutos.",
    efeito:
      "quando plantar um fruto em sua Horta, você pode plantar dois frutos de modo a gerarem uma planta híbrida. Ela dará frutas mestiças que possuem os efeitos de ambas as frutas plantadas. Quando consumida, se ambos os efeitos da fruta híbrida não são aplicáveis, aplica-se somente o relevante. Frutas híbridas não podem ser usadas para Hibridização.",
  },
  {
    nome: "Procura Alterada",
    classe: "Botânico",
    requisitos:
      "quatro Talentos de Botânico (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 20 ou mais, você pode escolher um pokémon seu com pelo menos um Atributo 20. Você encontra uma Fruta que reduz o Atributo selecionado.",
  },
  {
    nome: "Procura Eficiente",
    classe: "Botânico",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 20 ou mais, você pode escolher um pokémon seu. Você encontra uma Fruta que reduz o dano sofrido por um Golpe ao qual o pokémon escolhido é vulnerável. Você pode alternativamente não escolher um pokémon seu, caso em que encontrará um sininho (Chilan).",
  },
  {
    nome: "Procura Melhorada",
    classe: "Botânico",
    requisitos: "um pokémon com um Atributo 30.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 15 ou mais, você pode escolher um pokémon seu com pelo menos um Atributo 20. Você encontra uma Fruta que aumenta uma Fase naquele Atributo quando o pokémon está com menos da metade dos PV.",
  },
  {
    nome: "Alimento da Alma",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "após cozinhar por trinta minutos (com ingredientes e equipamento adequado), você cria um Prato que serve até dez criaturas (pessoas ou pokémons). Pokémons que se alimentem desta comida ficam muito felizes, portanto não perderão lealdade se consumirem Ervas logo antes ou logo depois.",
  },
  {
    nome: "Explosão de Energia",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por quinze minutos (com ingredientes e equipamento adequado), você cria uma Bebida Energética que provê Pontos de Vida temporários em quantidade igual ao quíntuplo de seu MD. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano).",
  },
  {
    nome: "Arremessar Isca",
    classe: "Cozinheiro",
    requisitos: "Isca.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "desde que você tenha criado uma Isca naquele mesmo dia, você pode arremessar um pedaço dela (que foi reservado do todo prévio) para um pokémon selvagem. Role 1d20 + MD. Se o resultado for 13 ou mais, o pokémon abdica de uma ação dele para provar a comida. Se o resultado for 25 ou mais, ele sacrificará as próximas duas ações dele para comê-la completamente.",
  },
  {
    nome: "Calórico",
    classe: "Cozinheiro",
    requisitos: "Defesa 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por quinze minutos (com ingredientes e equipamento adequado), você cria um Prato que serve até dez criaturas (pessoas ou pokémons) que provê a pokémons Pontos de Vida Temporários igual ao dobro de seu MD. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano).",
  },
  {
    nome: "Envenenamento",
    classe: "Cozinheiro",
    requisitos: "Defesa Especial 17.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um Prato ou uma Isca que você está criando.",
    efeito:
      "escolha entre Paralisia, Sono ou Veneno. Quando o Prato ou a Isca é consumido, ele inflige a Condição sobre quem comer.",
  },
  {
    nome: "Herbalismo",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "",
    efeito:
      "após cozinhar por uma hora (com ingredientes e equipamento adequado), você cria um Polvilho Curativo ou um Polvilho Energizante.",
  },
  {
    nome: "Isca",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "",
    efeito:
      "após cozinhar por uma hora (com ingredientes e equipamento adequado), você cria uma comida e a coloca em algum ambiente selvagem. Então, se você se escondeu apropriadamente, após uma quantidade de tempo entre quinze minutos e uma hora, o Narrador deve fazer um pokémon selvagem aparecer em busca da Isca. Role 1d20 + MD. Se o resultado for 15 ou mais, um pokémon de Nível pelo menos igual ao seu pokémon leal de Nível mais alto aparecerá. Se a rolagem exceder 19, o pokémon terá 5 Níveis a mais que seu pokémon leal de Nível mais alto. Um pokémon capturado mediante este Talento não é considerado válido para determinar os Níveis dos futuros pokémons atraídos pela Isca.",
  },
  {
    nome: "Liquidificador",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um Suco.",
    efeito: "adicione seu MD ao valor do Suco.",
  },
  {
    nome: "Papinha de Bebê",
    classe: "Cozinheiro",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por trinta minutos (com ingredientes e equipamento adequado), você cria um Prato que serve até dez criaturas (pessoas ou pokémons) que, quando comido por um pokémon com Nível até 25, faz o pokémon receber 25% de experiência extra pelo resto do dia.",
  },
  {
    nome: "Refeição Proteica",
    classe: "Cozinheiro",
    requisitos: "Defesa 18.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por uma hora (com ingredientes e equipamento adequado), você cria uma Refeição Proteica, que provê humanos com energia suficiente para passarem um dia sem dormir. Após 48 horas insones, aquele que consumiu o item perde 10 Pontos de Vida a cada hora que não dormir. Enquanto sob os efeitos de uma Refeição Proteica, o humano é imune a Sono: se receberia esta Condição, ele começará a sentir os efeitos que sentiria só após 48 horas sem dormir com duas horas de antecipação (isso é acumulativo: a cada vez que receberia a Condição Sono, reduza duas horas).",
  },
  {
    nome: "Tempero Original",
    classe: "Cozinheiro",
    requisitos: "Defesa 14.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um Tempero que está sendo criado.",
    efeito: "adicione seu MD ao valor do Tempero.",
  },
  {
    nome: "Vitaminas e Sais Minerais",
    classe: "Cozinheiro",
    requisitos: "Defesa Especial 20.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por três horas (com ingredientes e equipamento adequado), você cria uma Vitamina. Role 1d6 para determinar qual: 1 Imunizante; 2 Proteína; 3 Ferro; 4 Cálcio; 5 Zinco; 6 Carburante",
  },
  {
    nome: "Vitaminas e Sais Minerais +",
    classe: "Cozinheiro",
    requisitos: "Vitaminas e Sais Minerais.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: null,
    efeito:
      "após cozinhar por três horas (com ingredientes e equipamento adequado), você cria um dos seguintes à sua escolha: Imunizante, Proteína, Ferro, Cálcio, Zinco ou Carburante. Este Talento substitui Vitaminas.",
  },
  {
    nome: "Fã em Ascensão",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Seus pokémons podem ter até 15 em qualquer Aptidão. Quando participando em um Concurso, você pode Apelar a um Ponto de Aptidão extra quando poderia Apelar à sua Aptidão.",
  },
  {
    nome: "Mimo",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "após dez minutos preparando a aparência e o maneirismo do alvo, ele estará com lealdade completa temporariamente e chamará mais atenção. Se ele subir de Nível sem nenhum incidente negativo dentro de dez minutos após esta preparação e possuir todos os outros requisitos para evolução, o requisito de Lealdade será suprido e ele poderá evoluir, mesmo que a Lealdade dele retorne ao valor padrão depois (a Lealdade retorna ao padrão após uma hora). O uso repetido deste Talento gradualmente eleva a Lealdade padrão do pokémon. Além disso, Mimo também restaura Confusão, Paralisia e Queimadura.",
  },
  {
    nome: "Arrumando-se",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "após dez minutos preparando a aparência e o comportamento do alvo, no início do próximo encontro dele, ele começa elevando uma Fase em um Atributo. O pokémon deve satisfazer um requisito para tanto e não pode ser alvo deste Talento mais de uma vez diária. Se ele satisfaz os requisitos para mais de um Atributo, escolha qual Atributo terá sua Fase elevada: Ataque Ter um prêmio em um Espetáculo; Defesa Ter um prêmio em um Concurso de Fisiculturismo; Ataque Especial Ter um prêmio em um Desfile de Beleza; Defesa Especial Ter um prêmio em uma Gincana; Velocidade Ter um prêmio em um Concurso de Fofura.",
  },
  {
    nome: "Arrumando-se +",
    classe: "Cuidador",
    requisitos: "Defesa Especial 20, Arrumando-se.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "após quinze minutos preparando a aparência e o comportamento do alvo, no início do próximo encontro dele, ele começa elevando duas Fases em um Atributo. O pokémon deve satisfazer um requisito para tanto e não pode ser alvo deste Talento mais de uma vez diária. Se ele satisfaz os requisitos para mais de um Atributo, escolha qual Atributo terá sua Fase elevada: Ataque Ter um prêmio em um Espetáculo; Defesa Ter um prêmio em um Concurso de Fisiculturismo; Ataque Especial Ter um prêmio em um Desfile de Beleza; Defesa Especial Ter um prêmio em uma Gincana; Velocidade Ter um prêmio em um Concurso de Fofura. Este Talento substitui Arrumando-se.",
  },
  {
    nome: "Código de Sinais",
    classe: "Cuidador",
    requisitos: "Treinamento em Agilidade.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons sob efeito de Treinamento em Agilidade.",
    efeito:
      "os alvos podem usar Golpes e se moverem recebendo seus comandos por comunicação não verbal ou codificada. Isso pode ocorrer de várias formas, por exemplo, por gestos manuais ou alguma outra forma que possa ser interpretada pelo pokémon.",
  },
  {
    nome: "Estrela",
    classe: "Cuidador",
    requisitos: "2 prêmios em Concursos.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu sobe de Nível para um Nível múltiplo de 5.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 10 ou mais, escolha uma Aptidão que o alvo já possui pelo menos um ponto e adicione +2 a ela. Isso não pode elevar aquela Aptidão acima de 15.",
  },
  {
    nome: "Herdou de Mim!",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um ovo seu choca, adicione seu MD ou seu MDE a uma Aptidão do pokémon nascido se você já venceu pelo menos um prêmio em um Concurso relacionado àquela Aptidão.",
  },
  {
    nome: "Pelugem Brilhosa",
    classe: "Cuidador",
    requisitos: "3 prêmios em Concursos.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon adjacente.",
    efeito:
      "após dez minutos preparando a aparência do alvo, role 1d20 + MDE. Se o resultado for 15 ou mais, o próximo ataque que o pokémon sofrer nas próximas 24 horas terá Dificuldade de Acurácia +5. Um mesmo pokémon não pode receber Pelugem Brilhosa mais de uma vez no mesmo dia.",
  },
  {
    nome: "Resplendor",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho:
      "dois pokémons estão procriando e tiveram sucesso em produzir um ovo.",
    alvo: null,
    efeito:
      "role 1d100. Subtraia o dobro de seu MD e de seu MDE do resultado. Se a rolagem for zero ou menos, do ovo nascerá um pokémon shiny.",
  },
  {
    nome: "Sangue de Vencedores",
    classe: "Cuidador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "escolha uma Aptidão de um dos progenitores do ovo. O pokémon nasce com metade do valor da Aptidão escolhida.",
  },
  {
    nome: "Sangue de Vencedores +",
    classe: "Cuidador",
    requisitos: "Defesa 16, Sangue de Vencedores.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "escolha uma Aptidão de um dos progenitores do ovo e outra Aptidão do outro progenitor. O pokémon nasce com metade dos valores das Aptidões escolhidas. Este Talento substitui Sangue de Vencedores.",
  },
  {
    nome: "Treinamento em Agilidade",
    classe: "Cuidador",
    requisitos: "2 prêmios em Concursos.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "após dez minutos preparando o alvo, este recebe +3 a todos os seus Deslocamentos pelas próximas 24 horas.",
  },
  {
    nome: "Escultor de Megapedras",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Mensal.",
    gatilho: null,
    alvo: "um pokémon seu totalmente evoluído com lealdade pelo menos 2.",
    efeito:
      "após quinze horas de foco e trabalho conjunto com o alvo, você cria uma Megapedra para uso exclusivo no alvo. Esta Megapedra exclusiva permite que o alvo acesse uma megaevolução única, não idêntica a uma megaevolução descrita (o pokémon nem precisa ter uma megaevolução descrita). Quando o pokémon megaevolui usando esta Megapedra, você adiciona 10 pontos aos Atributos Basais dele, mas nenhum Atributo Basal pode receber mais do que +4. A Saúde do pokémon não pode receber nenhum bônus e nenhum Atributo Basal pode ser reduzido. Discuta com seu Narrador como a megaevolução particular afeta o Tipo e a Habilidade de seu pokémon.",
  },
  {
    nome: "Evolução Precoce",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Subtraia seu MD do Nível mínimo necessário que um pokémon precisa atingir para evoluir. Outros requerimentos de evolução não são afetados por esta Característica de Classe.",
  },
  {
    nome: "Aperfeiçoar Pedra-Chave",
    classe: "Evolucionista",
    requisitos:
      "Pedra-Chave Elemental, Recarregar Pedra-Chave, Sobrecarga da Pedra-Chave.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons seus com Megapedras.",
    efeito:
      "megaevolua dois pokémons seus simultaneamente. Você não pode usar este Talento se já megaevoluiu um pokémon hoje. Após usar Aperfeiçoar Pedra-Chave, você não pode megaevoluir nenhum pokémon pelo resto do dia.",
  },
  {
    nome: "Conhecedor de Megaevoluções",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode identificar se qualquer pokémon possui uma Megapedra que ele pode usar para evoluir só de olhar para ela.",
  },
  {
    nome: "Desbloquear Potencial",
    classe: "Evolucionista",
    requisitos: "Defesa 16, Defesa Especial 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "se você possui uma Megapedra que corresponde a uma Megaevolução padrão (que aparece no Livro dos Pokémons, não uma Megapedra exclusiva produzida para um pokémon), você pode usá-la para megaevoluir para a forma megaevoluída um pokémon que ainda não está em sua última forma evolutiva. Por exemplo, você pode usar uma Blazikenita para megaevoluir um Torchic ou um Combusken a um Mega Blaziken.",
  },
  {
    nome: "Evolução Elemental",
    classe: "Evolucionista",
    requisitos:
      "Defesa 16, ter evoluído um pokémon usando uma Pedra Elemental.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon aliado (não necessariamente seu) que pode evoluir mediante o uso de uma Pedra Elemental",
    efeito:
      "role 1d20 + MD. Se o resultado for 19 ou mais, o pokémon evolui espontaneamente. Se você falhar no teste, o pokémon perde dois Níveis (não altere a quantidade de experiência que ele possui). Reduza os Atributos e os Golpes de acordo com a perda de Níveis.",
  },
  {
    nome: "Evolução Precoce +",
    classe: "Evolucionista",
    requisitos: "Defesa 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Subtraia o dobro de seu MD do Nível mínimo necessário que um pokémon precisa atingir para evoluir. Outros requerimentos de evolução não são afetados por este Talento. Este Talento substitui Evolução Precoce.",
  },
  {
    nome: "Involua!",
    classe: "Evolucionista",
    requisitos: "Defesa Especial 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon adjacente ao qual você causou dano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 22 ou mais e o alvo possui menos de 10% de seus PV máximos, ele regride para o estágio evolutivo anterior. Ajuste os Atributos de acordo, mas seus Golpes não são alterados. Se o Nível do pokémon for 50 ou menos, ele deverá esperar obter cinco Níveis antes de evoluir novamente.",
  },
  {
    nome: "Pedra-Chave Elemental",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons megaevoluídos recebem +2 a seus Bônus Elementais, mas sofrem dano igual a 1d20 – MD a cada vez que usarem isso.",
  },
  {
    nome: "Recarregar Pedra-Chave",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode ativar uma mesma Pedra-Chave duas vezes diárias. Você não pode ter como alvo o mesmo pokémon duas vezes no mesmo dia. Sua Pedra-Chave só pode megaevoluir um pokémon de cada vez.",
  },
  {
    nome: "Sobrecarga da Pedra-Chave",
    classe: "Evolucionista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "suas megaevoluções duram por até meia hora ou até o pokémon megaevoluído ficar inconsciente.",
  },
  {
    nome: "Assim que se Faz!",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon que você chocou, a até 20 metros de um de seus progenitores.",
    efeito:
      "quando o progenitor ganha Pontos de Experiência, ele pode transferir metade dos pontos de experiência que receberia para o alvo. Se ambos os progenitores receberem pontos de experiência simultaneamente, apenas um pode transferir para o alvo.",
  },
  {
    nome: "Vantagem da Ascendência",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "o pokémon que nascer saberá um número de Golpes Herdados igual a seu MDE. Os Golpes Herdados deverão constar na lista de Golpes de seus progenitores que podem ser aprendidos subindo de Nível naturalmente ou por Tutor. Você não escolhe quais os Golpes que serão passados adiante ao pokémon, eles são determinados aleatoriamente. Se seu MDE é maior do que o número de Golpes aplicáveis, ele aprende todos os possíveis.",
  },
  {
    nome: "Ainda Não!",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "um ovo está chocando.",
    alvo: null,
    efeito:
      "se um ovo que você (ou um humano aliado) possui está chocando, você pode atrasar o nascimento por 48 horas. Se você não é o dono do ovo, você precisará de permissão deste para usar este Talento.",
  },
  {
    nome: "Chocadeira ++",
    classe: "Incubador",
    requisitos: "Defesa Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "ovos em sua posse.",
    efeito:
      "os ovos que você carrega consigo chocam em apenas 50% do tempo que precisariam. Este Talento substitui Chocadeira e até mesmo Chocadeira +.",
  },
  {
    nome: "Direito de Nascença",
    classe: "Incubador",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, escolha qual a Habilidade do pokémon que nascer dentre as possibilidades normais para ele.",
  },
  {
    nome: "Herança Infundida",
    classe: "Incubador",
    requisitos: "Defesa Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Golpes Herdados e Golpes Naturais (aqueles aprendidos subindo de Nível) também são considerados dentro das listas de Golpes que podem ser aprendidos por TM ou Tutor para os seus pokémons.",
  },
  {
    nome: "Hiperlexia Parental",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons acima do Nível 15 chocados por você.",
    efeito:
      "você entende os alvos como se estivessem falando seu idioma e eles também entendem você através de linguagem corporal como se você estivesse falando com eles.",
  },
  {
    nome: "Nascimento Poderoso",
    classe: "Incubador",
    requisitos: "Defesa 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um ovo seu está chocando.",
    alvo: "um ovo seu está chocando.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 13 ou mais, o pokémon nasce com +1 a todos os seus Deslocamentos e também à Capacidade Força. Estes benefícios continuam válidos a seus próximos estágios evolutivos, mas isso não pode elevar a Força de um pokémon além de 7.",
  },
  {
    nome: "Paleta de Atitudes",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, escolha 6 Naturezas. O pokémon que nascer possuirá uma destas seis Naturezas definindo aleatoriamente.",
  },
  {
    nome: "Paleta de Atitudes +",
    classe: "Incubador",
    requisitos: "Defesa Especial 18, Paleta de Atitudes.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um ovo seu está chocando.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, escolha a Natureza do pokémon que nascer. Este Talento substitui Paleta de Atitudes.",
  },
  {
    nome: "Procriação Minuciosa",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons que você chocou que são filhos de pelo menos um pokémon seu que você também chocou.",
    efeito:
      "os alvos recebem 50% de pontos de experiência adicionais a cada vez que receberem pontos de experiência.",
  },
  {
    nome: "Protetor da Prole",
    classe: "Incubador",
    requisitos: null,
    frequencia: "Por Encontro.",
    gatilho:
      "um pokémon que você chocou é acertado por um Golpe e está dentro do alcance do seu Deslocamento.",
    alvo: null,
    efeito:
      "você pode se deslocar imediatamente para interceptar o Golpe. Você sofre o dano e os efeitos do Golpe e, se ele causar dano, você subtrai do dano que sofreria seu MD e seu MDE.",
  },
  {
    nome: "Tutor de Golpes Herdados",
    classe: "Incubador",
    requisitos: "Defesa Especial 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon que você chocou.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 23 ou mais, você pode ensinar ao alvo um Golpe Herdado que ele não conhecia. Isso pode ser feito até quatro vezes para cada pokémon.",
  },
  {
    nome: "Relaxantes Musculares",
    classe: "Médico",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano Paralisado.",
    efeito: "restaura a Paralisia.",
  },
  {
    nome: "Tratar Ferimentos Mínimos",
    classe: "Médico",
    requisitos: null,
    frequencia: "Diária. A cada 7 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "o alvo recupera 20 Pontos de Vida.",
  },
  {
    nome: "Analgésicos",
    classe: "Médico",
    requisitos: "Defesa 15.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano Envenenado ou Queimado.",
    efeito: "restaura a Queimadura ou o Veneno.",
  },
  {
    nome: "Alta Medicina",
    classe: "Médico",
    requisitos: "Defesa 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "o pokémon recupera todos os usos de Golpes cujas Frequências são Diárias.",
  },
  {
    nome: "Médico Especialista",
    classe: "Médico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa um item restaurativo (por exemplo: uma Poção ou um item que restaura Condições, como um Antídoto), ele cura uma quantidade de PV extras igual à sua Defesa.",
  },
  {
    nome: "Não Morrerá Comigo Aqui!",
    classe: "Médico",
    requisitos: "Defesa 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano que falhou em um Teste de Morte há menos de cinco minutos.",
    efeito:
      "o alvo pode refazer o Teste de Morte falho. Ele subtrai 5 de sua rolagem se for humano ou 25 se for um pokémon.",
  },
  {
    nome: "Não Morrerá Comigo Aqui! +",
    classe: "Médico",
    requisitos: "Não Morrerá Comigo Aqui!.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano que falhou emum Teste de Morte há menos de cinco minutos.",
    efeito:
      "o alvo pode refazer o Teste de Morte falho. Ele subtrai sua Defesa de sua rolagem se for humano ou a soma de sua Defesa e sua Defesa Especial se for um pokémon. Este Talento substitui Não Morrerá Comigo Aqui!",
  },
  {
    nome: "Sobreviveu Graças à Medicina!",
    classe: "Médico",
    requisitos:
      "quatro Talentos de Médico (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar dois itens restaurativos ou dois Talentos de Médico em uma mesma Ação Padrão. Alternativamente, você pode usar um item restaurativo e um Talento de Médico em uma mesma Ação Padrão.",
  },
  {
    nome: "Terapia de Choque",
    classe: "Médico",
    requisitos: "Analgésicos.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano Congelado ou Sonolento.",
    efeito: "restaura o Congelamento ou o Sono.",
  },
  {
    nome: "Tratar Ferimentos Críticos",
    classe: "Médico",
    requisitos: "Defesa 18.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "o alvo recupera 80 Pontos de Vida.",
  },
  {
    nome: "Tratar Ferimentos Graves",
    classe: "Médico",
    requisitos: "Defesa 16.",
    frequencia: "Diária. A cada 9 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "o alvo recupera 60 Pontos de Vida.",
  },
  {
    nome: "Tratar Ferimentos Leves",
    classe: "Médico",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "o alvo recupera 40 Pontos de Vida.",
  },
  {
    nome: "Introjeção",
    classe: "Tutor",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "um de seus pokémons aprende um Golpe por Registro ou Tutor.",
    alvo: null,
    efeito:
      "você pode posicionar o Golpe aprendido na lista de Golpes que são aprendidos por aquele pokémon naturalmente subindo de Nível. Isso só pode ser feito até duas vezes por pokémon.",
  },
  {
    nome: "Tutorial",
    classe: "Tutor",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "Efeito: após quinze minutos treinando e instruindo o alvo, role 1d20 + MDE. Se o resultado for 16 ou mais, escolha um Golpe que ele pode aprender a partir de um Tutor. O alvo aprende este Golpe. Uma vez que tenha usado esta Característica de Classe em um pokémon, ela jamais poderá ser usada novamente para aquele pokémon. Este Talento consome dois Pontos de Tutoria.",
  },
  {
    nome: "Desbloqueio Elemental",
    classe: "Tutor",
    requisitos: "Defesa Especial 20.",
    frequencia: "Uso Único.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, escolha um Tipo. O alvo poderá aprender todos os Golpes daquele Tipo a partir de Registros. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele pokémon. Este Talento consome três Pontos de Tutoria. Especial: Este Talento pode ser escolhido até três vezes.",
  },
  {
    nome: "Ensinar Capacidades",
    classe: "Tutor",
    requisitos: "Ensinar Capacidades",
    frequencia: "Diária.Ensinar Capacidades",
    gatilho: null,
    alvo: "um pokémonum pokémon.",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, escolha um Golpe de qualquer lista do alvo, desde que o Golpe garanta ao alvo uma Capacidade (salvo Aura) ou modifique alguma Capacidade (novamente salvo Aura). O pokémon ganha aquela Capacidade. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele pokémon. Este Talento consome um Ponto de Tutoria.",
  },
  {
    nome: "Imortalizar o Conhecimento",
    classe: "Tutor",
    requisitos: "Defesa Especial 20.",
    frequencia: "Mensal.",
    gatilho: null,
    alvo: "um Registro.",
    efeito:
      "após quatro horas de trabalho diligente, você converte um Registro de uso único a um Registro Permanente.",
  },
  {
    nome: "Instrução de Efeito",
    classe: "Tutor",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, role 1d20 + MDE. Se o resultado for 16 ou mais, escolha um Golpe que ele pode aprender a partir de um Registro e que não usa nem Ataque nem Ataque Especial. O alvo aprende este Golpe. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele pokémon. Este Talento consome quatro Pontos de Tutoria.",
  },
  {
    nome: "Instrução Especial",
    classe: "Tutor",
    requisitos: "um pokémon com Ataque Especial 30.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, role 1d20 + MDE. Se o resultado for 16 ou mais, escolha um Golpe que ele pode aprender a partir de um Registro e que usa o Ataque Especial. O alvo aprende este Golpe. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele pokémon. Este Talento consome quatro Pontos de Tutoria.",
  },
  {
    nome: "Instrução Física",
    classe: "Tutor",
    requisitos: "um pokémon com Ataque 30.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, role 1d20 + MDE. Se o resultado for 16 ou mais, escolha um Golpe que ele pode aprender a partir de um Registro e que usa o Ataque. O alvo aprende este Golpe. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele pokémon. Este Talento consome quatro Pontos de Tutoria.",
  },
  {
    nome: "Inventor de Técnicas",
    classe: "Tutor",
    requisitos: "Recordador.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho diligente, role 1d20 + MDE. Se o resultado for 21 ou mais, escolha um Golpe que um dos seus pokémons conhece, mas para o qual não existe um Registro normalmente. Você cria um Registro não permanente contendo o Golpe. Não é possível criar o mesmo Registro mais de uma vez com este Talento.",
  },
  {
    nome: "Recordador",
    classe: "Tutor",
    requisitos:
      "Defesa Especial 17, ter usado a Característica de Classe Tutorial três vezes com sucesso.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quatro horas de trabalho diligente, role 1d20 + MDE. Se o resultado for 21 ou mais, escolha um Golpe que você já ensinou mediante Tutorial. Você cria um Registro contendo o Golpe. Não é possível criar o mesmo Registro mais de uma vez com este Talento.",
  },
  {
    nome: "Sabedoria de Eras",
    classe: "Tutor",
    requisitos: "Recordador, Inventor de Técnicas.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "você pode agora criar o mesmo Registro quantas vezes desejar usando Recordador e Inventor de Técnicas e também pode escolher o mesmo Golpe inúmeras vezes com Sabedoria Didática.",
  },
  {
    nome: "Sabedoria Didática",
    classe: "Tutor",
    requisitos:
      "Defesa Especial 16 e um dos seguintes: Instrução de Efeito, Instrução Especial ou Instrução Física.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon",
    efeito:
      "após quinze minutos treinando e instruindo o alvo, role 1d20 + MDE. Se o resultado for 16 ou mais, escolha um Golpe que ele pode aprender a partir de um Registro. O alvo aprende este Golpe. Uma vez que tenha usado este Talento em um pokémon, ele jamais poderá ser usado novamente para aquele Golpe. Este Talento consome quatro Pontos de Tutoria.",
  },
  {
    nome: "Tutor Excepcional",
    classe: "Tutor",
    requisitos: "ter usado a Característica de Classe Tutorial cinco vezes.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você agora pode usar Tutorial várias vezes em um mesmo pokémon.",
  },
  {
    nome: "Foco Combativo",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "adicione seus MA e MD às rolagens de dano causado por você.",
  },
  {
    nome: "Resistência Marcial",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "some as metades de seus MA e MD e multiplique esta soma por 5. Adicione o resultado deste cálculo ao seus Pontos de Vida máximos.",
  },
  {
    nome: "Calejar",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando sofrer dano (inclusive por dano causado a si mesmo), reduza o dano sofrido por seu MA. Obviamente, isso não afeta danos irredutíveis.",
  },
  {
    nome: "Chute Duplo",
    classe: "Guerreiro",
    requisitos: "ter um pokémon que conhece o Golpe Chute Duplo.",
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Chute Duplo.",
  },
  {
    nome: "Fachada",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Fachada.",
  },
  {
    nome: "Foco Combativo +",
    classe: "Guerreiro",
    requisitos: "Ataque 15, Defesa 15.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione o dobro de seu MA e o dobro de seu MD às rolagens de dano causado por você. Este Talentos substitui Foco Combativo.",
  },
  {
    nome: "Golpe de Caratê",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Golpe de Caratê.",
  },
  {
    nome: "Megassoco",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Megassoco.",
  },
  {
    nome: "Nada Pode me Parar!",
    classe: "Guerreiro",
    requisitos: "Velocidade 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "escolha uma Condição que está afligindo você (como Paralisia, Sono ou Veneno, por exemplo). Você se cura desta Condição.",
  },
  {
    nome: "Quebra Telha",
    classe: "Guerreiro",
    requisitos:
      "seis Talentos de Guerreiro (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Quebra Telha.",
  },
  {
    nome: "Resistência Marcial +",
    classe: "Guerreiro",
    requisitos: "Ataque 14, Defesa 14.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "some seus MA e MD e multiplique esta soma por 5. Adicione o resultado deste cálculo ao seus Pontos de Vida máximos. Este Talento substitui Resistência Marcial.",
  },
  {
    nome: "Soco Focalizado",
    classe: "Guerreiro",
    requisitos: "Ataque 18.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco Focalizado.",
  },
  {
    nome: "Voadora",
    classe: "Guerreiro",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Voadora.",
  },
  {
    nome: "Corpo a Corpo",
    classe: "Artista Marcial",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Corpo a Corpo.",
  },
  {
    nome: "Sensei",
    classe: "Artista Marcial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "pokémons e humanos.",
    efeito:
      "escolha uma Arte Marcial específica (como caratê, judô, etc.). Você é um mestre neste estilo de arte marcial, podendo executar feitos performáticos relacionados a ela sem testes. Quando usar sua arte marcial, seus ataques desarmados possuem Dificuldade de Acurácia de apenas 2, e você pode causar dano do Tipo Normal ou do Tipo Lutador a seu critério.",
  },
  {
    nome: "Amortecer",
    classe: "Artista Marcial",
    requisitos: "Arrojado.",
    frequencia: "Constante.",
    gatilho: "você sofre dano por um Golpe que você já sofreu antes na vida.",
    alvo: null,
    efeito:
      "reduza o dano sofrido por seu MA e por seu MD. Isso não reduz dano causado a si mesmo por Golpes.",
  },
  {
    nome: "Arremesso Circular",
    classe: "Artista Marcial",
    requisitos: "Vá para Longe!",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Arremesso Circular.",
  },
  {
    nome: "Arrojado",
    classe: "Artista Marcial",
    requisitos: "Defesa 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "receba a Habilidade Imprudência.",
  },
  {
    nome: "Calejar +",
    classe: "Artista Marcial",
    requisitos: "Calejar.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando sofrer dano (mas não dano causado a si mesmo), reduza o dano sofrido pelo seu MA e pelo seu MD. Obviamente, isso não afeta danos irredutíveis.",
  },
  {
    nome: "Chute Giratório",
    classe: "Artista Marcial",
    requisitos: "ter sofrido o Golpe Soco de Fogo.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Chute Giratório.",
  },
  {
    nome: "Defesa Aberta",
    classe: "Artista Marcial",
    requisitos: "Durão.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Defesa Aberta.",
  },
  {
    nome: "Faca de Dois Gumes",
    classe: "Artista Marcial",
    requisitos: "Ataque 20.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Faca de Dois Gumes.",
  },
  {
    nome: "Fortão",
    classe: "Artista Marcial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você faz um teste que adiciona seu MA, adicione +3 à rolagem.",
  },
  {
    nome: "Múltiplos Estilos",
    classe: "Artista Marcial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "pokémons e humanos.",
    efeito:
      "escolha outra Arte Marcial específica (como caratê, judô, etc.). Você é um mestre neste estilo de arte marcial, podendo executar feitos performáticos relacionados a ela sem testes. Quando usar sua arte marcial, seus ataques desarmados possuem Dificuldade de Acurácia de apenas 2, e você pode causar dano do Tipo Normal ou do Tipo Lutador a seu critério. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos não se acumulam. A cada vez que é escolhido, ele se aplica a uma arte marcial distinta.",
  },
  {
    nome: "Pontapé",
    classe: "Artista Marcial",
    requisitos: "Chute Giratório.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Pontapé.",
  },
  {
    nome: "Soco Rápido",
    classe: "Artista Marcial",
    requisitos: "ter sofrido o Golpe Soco Rápido.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco Rápido.",
  },
  {
    nome: "Supervoadora",
    classe: "Artista Marcial",
    requisitos: "Voadora.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Supervoadora.",
  },
  {
    nome: "Vá para Longe!",
    classe: "Artista Marcial",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você empurra o alvo um número de metros igual a seu MA. Se o alvo for empurrado a um Terreno Bloqueador, ele sofre 2d10 de dano. Caso ele seja Empurrado em direção a outra criatura, tanto esta quanto o ele sofrem 1d10 de dano.",
  },
  {
    nome: "Porradaria",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Porrada. Se você tiver sucesso em acertar o alvo, o próximo aliado que tentar atacar o alvo pode ignorar toda a Evasão do alvo.",
  },
  {
    nome: "Rapidez",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione seu MA aos seus Deslocamentos Terrestre, de Natação e Subaquático até o final da rodada. Rapidez não pode ser ativada mais de uma vez por rodada e só pode ser ativada no início da rodada.",
  },
  {
    nome: "Esquiva",
    classe: "Atleta",
    requisitos: "Defesa 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Detecção.",
  },
  {
    nome: "Explosão Muscular",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "a qualquer momento que você usaria seu MV, você pode usar seu MA no lugar.",
  },
  {
    nome: "Hora Extra",
    classe: "Atleta",
    requisitos: "Ataque 26.",
    frequencia: "Diária.",
    gatilho:
      "você é reduzido a inconsciente (0 PV ou menos), mas não a -100% de seus PV ou menos.",
    alvo: null,
    efeito:
      "antes de desmaiar, você pode se deslocar uma vez e executar uma Ação Padrão tendo como alvo um inimigo.",
  },
  {
    nome: "Jogo Duplo",
    classe: "Atleta",
    requisitos: "um pokémon com Força 5.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu acerta um Golpe Corpo a Corpo causador de dano em um inimigo ao qual você já causou dano na rodada atual.",
    alvo: null,
    efeito:
      "o seu pokémon causa uma quantidade de dano extra igual à Força dele e empurra o alvo uma quantidade de metros igual à Força dele. Se o inimigo atingido for Empurrado a um Terreno Bloqueador, ele sofre 2d12 de dano extra. Caso ele seja Empurrado em direção a outra criatura, tanto esta quanto o inimigo original sofrem 1d12 de dano.",
  },
  {
    nome: "Na Zona",
    classe: "Atleta",
    requisitos: "Ataque 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa Rapidez, você pode usar seu Ataque ou sua Defesa no lugar de sua Velocidade para fins de calcular sua Iniciativa e sua Evasão até o fim da próxima rodada.",
  },
  {
    nome: "Precisa ser Rápido",
    classe: "Atleta",
    requisitos: "Ataque 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Extrema Velocidade.",
  },
  {
    nome: "Protegendo as Costas",
    classe: "Atleta",
    requisitos: "Ataque 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu é acertado por um ataque.",
    alvo: null,
    efeito:
      "se você ainda não se moveu na rodada, você pode tentar interceptar o ataque direcionado ao seu pokémon. Se seu Ataque for 20 ou menos, você rola 1d20 e tem sucesso se o resultado for 11 ou mais. Se seu Ataque for de 21 a 30, você rola 1d20 e tem sucesso se o resultado for 6 ou mais. Se seu Ataque for maior que 30, você não precisa fazer nenhuma rolagem para ativar este Talento. Não é possível usar este Talento mais de uma vez por rodada.",
  },
  {
    nome: "Resultado do Esforço",
    classe: "Atleta",
    requisitos: "Trabalhe este Corpo!",
    frequencia: "À Vontade.",
    gatilho:
      "um pokémon com Força pelo menos 5está subindo de Nível para um Nível múltiplo de 5.",
    alvo: null,
    efeito:
      "role 1d20 + MA. Se o resultado for 16 ou mais, o pokémon aprende o Golpe Superforça.",
  },
  {
    nome: "Ringue",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você usa o Golpe Porrada.",
    alvo: null,
    efeito:
      "a Dificuldade de Acurácia da Porrada se torna 4. Se você tiver sucesso em acertar com a Porrada um inimigo que causou dano a um aliado na rodada atual ou na rodada anterior, na próxima vez que um aliado (não necessariamente o mesmo) causar dano a ele, o dano é aumentado em um número de d6s igual à metade de seu MA.",
  },
  {
    nome: "Trabalhe este Corpo!",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "após dez horas de treinamento, o alvo ganha permanentemente +1 à Capacidade Força ou a um de seus Deslocamentos. Isso não pode elevar a Força do pokémon além de 7. Um dado Deslocamento não pode ser beneficiado mais de três vezes por este Talento. Se o valor numérico da Força ou do Deslocamento escolhido for menor que 4, ele não pode ser melhorado por este Talento.",
  },
  {
    nome: "Você vai Ver!",
    classe: "Atleta",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Retaliação.",
  },
  {
    nome: "Leitura de Auras",
    classe: "Àugure",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "pokémons e humanos.",
    efeito:
      "você pode ler a aura do alvo. Todos os pokémons e humanos possuem auras, mas a maioria não pode acessá-las. Auras variam em coloração: quanto mais vívida é a cor (ou seja, menos clara e transparente), mais emoção domina aquela pessoa naquele momento; e quanto mais escura, mais intenções ruins aquela pessoa possui. A Leitura de Auras não permite ler mentes, mas auras são pessoais e visíveis mesmo na escuridão. Você pode tornar sua própria aura aparente em coloração para outros, indicando sua intenção a pokémons e humanos, que instintivamente receberão as mesmas informações como se estivesse lendo a sua aura.",
  },
  {
    nome: "Onda de Vácuo",
    classe: "Àugure",
    requisitos: null,
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Onda de Vácuo, mas use seu Ataque, e não seu Ataque Especial, para definir o dano.",
  },
  {
    nome: "Corpo e Alma",
    classe: "Àugure",
    requisitos:
      "quatro Talentos de Áugure (desconte as Características de Classe para este cálculo), Ataque 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "no momento que escolher este Talento, escolha um Tipo elemental. Todas as vezes que fizer um ataque de Armas, você pode causar dano daquele Tipo a seu critério.",
  },
  {
    nome: "Esfera da Aura",
    classe: "Àugure",
    requisitos: "ter visto o Golpe Esfera da Aura ser usado.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Esfera da Aura.",
  },
  {
    nome: "Expansão da Aura",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Expansão da Aura.",
    frequencia: "Semanal. A cada 15 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Expansão da Aura, mas use seu Ataque, e não seu Ataque Especial, para definir o dano.",
  },
  {
    nome: "Intenções na Aura",
    classe: "Àugure",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémons e humanos.",
    efeito:
      "após se concentrar por dez minutos, você sabe o curso geral de ações que o alvo pretende fazer. Exemplos são “encontrar um sócio”, “combater seu inimigo”, “destruir este lugar”, “impressionar seu amigo”. Estas intenções são vagas, e podem ser mal interpretadas, mas nunca são literalmente mentiras. Por exemplo, você pode ler “lutar contra o vizinho” e achar que há uma rixa ou desentendimento, enquanto a realidade é que pode ser uma competição amigável. Estas intenções são aparentes para você pela aura, e não pela leitura da mente, portanto não podem ser ocultadas pelo Talento Meditação nem pela Capacidade Ininteligível.",
  },
  {
    nome: "Pulso d'Água",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Pulso d'Água.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Pulso d'Água, mas use seu Ataque, e não seu Ataque Especial, para definir o dano.",
  },
  {
    nome: "Pulso do Dragão",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Pulso do Dragão.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Pulso do Dragão, mas use seu Ataque, e não seu Ataque Especial, para definir o dano.",
  },
  {
    nome: "Pulso Sombrio",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Pulso Sombrio.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Pulso Sombrio, mas use seu Ataque, e não seu Ataque Especial, para definir o dano.",
  },
  {
    nome: "Soco de Drenagem",
    classe: "Àugure",
    requisitos: "um pokémon que conhece o Golpe Soco de Drenagem.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco de Drenagem.",
  },
  {
    nome: "Soco de Fogo",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Soco de Fogo.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco de Fogo.",
  },
  {
    nome: "Soco de Gelo",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Soco de Gelo.",
    frequencia: "Diária. A cada 18 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco de Gelo.",
  },
  {
    nome: "Soco do Trovão",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Soco do Trovão.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco do Trovão.",
  },
  {
    nome: "Soco Sombrio",
    classe: "Àugure",
    requisitos: "ter sofrido o Golpe Soco Sombrio.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Soco Sombrio.",
  },
  {
    nome: "Tela de Luz",
    classe: "Àugure",
    requisitos: "um pokémon que conhece o Golpe Tela de Luz.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si mesmo.",
    efeito: "você usa o Golpe Tela de Luz.",
  },
  {
    nome: "Ludibriar",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "escolha um dos seguintes Golpes: Adulação, Bravata ou Provocação. Você usa o Golpe escolhido. Este Talento não pode ser usado mais de uma vez contra o mesmo durante o mesmo combate, mesmo que um Golpe diferente fosse escolhido.",
  },
  {
    nome: "Psique",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Pelas Costas.",
  },
  {
    nome: "Afiar",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma de suas armas.",
    efeito:
      "role 1d20 + MA. Se o resultado for 12 ou mais, a arma alvo causa 1d10 de dano adicional até o fim do combate. Este Talento deve ser declarado no início do combate, e indica que você preparou aquela arma previamente.",
  },
  {
    nome: "Ataque Furtivo",
    classe: "Bandido",
    requisitos:
      "Arma de Escolha para uma arma pequena e real (não ataque desarmado).",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "outros não são conscientes que você carrega sua Arma de Escolha consigo. Quando você usa pela primeira vez sua Arma de Escolha para atacar em um combate, a Dificuldade de Acurácia é de apenas 2 e você ignora a Evasão do alvo. Além disso, se você acertar, você causa dano dobrado.",
  },
  {
    nome: "Desarme",
    classe: "Bandido",
    requisitos:
      "seis Talentos de Bandido (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: "você ataca um humano com um ataque de Armas e tem sucesso.",
    alvo: null,
    efeito:
      "role 1d20 + MA. Se o resultado for 16 ou mais, uma pokébola contendo um pokémon que o alvo do ataque possui (determinada aleatoriamente se houver mais de uma) é danificada, e não pode ter seu pokémon liberado. Pokébolas danificadas desta forma podem ser reparadas instantaneamente por um Captor ou em um Centro Pokémon, numa Pokéloja ou em qualquer estabelecimento policial.",
  },
  {
    nome: "Desespero",
    classe: "Bandido",
    requisitos: "Ataque 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Último Recurso. Só é possível usar este Talento se você já usou pelo menos quatro Talentos de Bandido no combate atual.",
  },
  {
    nome: "Encare!",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Cabeçada.",
  },
  {
    nome: "Lágrimas de Crocodilo",
    classe: "Bandido",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho:
      "você faz um Teste de Acurácia para atacar um pokémon ou um humano que causou dano a você na última ação dele.",
    alvo: null,
    efeito:
      "reduza em 5 a Dificuldade de Acurácia. Este Talento não pode ser usado mais de uma contra o mesmo inimigo no mesmo combate. Além disso, os efeitos deste Talento não se acumulam com os efeitos de Pensa Rápido!",
  },
  {
    nome: "No Saco!",
    classe: "Bandido",
    requisitos: "Ataque 17.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um humano.",
    efeito:
      "você usa o Golpe Megachute. Se o resultado do Teste de Acurácia for 14 ou mais, o alvo está Paralisado.",
  },
  {
    nome: "Olha Lá!",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "o alvo role 1d20 + MAE se for um humano ou 1d20 + Inteligência se for um pokémon. Se a rolagem for menor que 13, o alvo perde a Ação Padrão da rodada atual se for humano ou a Ação de Golpe da rodada atual se for pokémon. Este Talento não pode ser usado mais de uma contra o mesmo alvo no mesmo combate.",
  },
  {
    nome: "Pensa Rápido!",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "você erra um ataque de Armas.",
    alvo: null,
    efeito:
      "reduza em 3 a Dificuldade de Acurácia se atacar o mesmo alvo novamente na próxima rodada.",
  },
  {
    nome: "Riposta",
    classe: "Bandido",
    requisitos: "Arma de Escolha.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "você recebe um ataque de Armas usando uma arma real (não ataque desarmado).",
    alvo: null,
    efeito:
      "role 1d20 + MA. Se o resultado for 16 ou mais, o ataque falha e a arma do inimigo é arremessada em 5 metros para longe. Pegar uma arma do chão consome uma Ação Padrão. Riposta só pode ser usada uma vez por rodada.",
  },
  {
    nome: "Roubo",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Roubo. Se você acertar um humano, você pode tirar dele qualquer coisa que possa ser vista, salvo roupas.",
  },
  {
    nome: "Você Vai Pagar por Isso!",
    classe: "Bandido",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Retribuição.",
  },
  {
    nome: "Ataque Atordoante",
    classe: "Monge",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você acerta um ataque desarmado.",
    alvo: null,
    efeito:
      "o alvo está Atordoado. Este Talento não pode ser usado mais de uma vez contra o mesmo alvo durante um mesmo combate.",
  },
  {
    nome: "Ioga",
    classe: "Monge",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "após cinco minutos de meditação, o alvo estará com Lealdade completa temporariamente e chamará mais atenção. Se ele subir de Nível sem nenhum incidente negativo dentro de uma hora após esta preparação e possuir todos os outros requisitos para evolução, o requisito de Lealdade será suprido e ele poderá evoluir, mesmo que a Lealdade dele retorne ao valor padrão depois (a Lealdade retorna ao padrão após uma hora).",
  },
  {
    nome: "Alongamento",
    classe: "Monge",
    requisitos: "Exercícios Revigorantes.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Ioga.",
    alvo: null,
    efeito:
      "o alvo de Ioga recebe a Habilidade Elasticidade até o fim do próximo encontro naquele dia.",
  },
  {
    nome: "Contorcionismo",
    classe: "Monge",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você é imune a Paralisia.",
  },
  {
    nome: "Estímulo",
    classe: "Monge",
    requisitos: "Técnica Milenar.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Estímulo.",
  },
  {
    nome: "Exercícios Revigorantes",
    classe: "Monge",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Ioga.",
    alvo: null,
    efeito:
      "o alvo de Ioga recebe um número de Pontos de Vida temporários igual à sua Defesa. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano). Você pode agora usar Ioga em humanos.",
  },
  {
    nome: "Iluminação",
    classe: "Monge",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você faz qualquer rolagem que requer a adição de seu MV, adicione +5 ao resultado.",
  },
  {
    nome: "Liberdade de Movimento",
    classe: "Monge",
    requisitos: "Contorcionismo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma criatura adjacente Atordoada ou Paralisada.",
    efeito: "o alvo é curado do Atordoamento ou da Paralisia.",
  },
  {
    nome: "Relaxamento",
    classe: "Monge",
    requisitos: "Exercícios Revigorantes.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Ioga.",
    alvo: null,
    efeito:
      "o alvo de Ioga recebe a Habilidade Foco Interior até o fim do próximo encontro naquele dia.",
  },
  {
    nome: "Técnica Milenar",
    classe: "Monge",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Golpes de Braço. Se o alvo for atingido quatro ou mais vezes por este Golpe, ele fica Paralisado.",
  },
  {
    nome: "Terapia",
    classe: "Monge",
    requisitos: "Exercícios Revigorantes.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Ioga em um humano.",
    alvo: null,
    efeito:
      "escolha um Atributo. O humano recebe +2 ao Atributo escolhido por doze horas. Um humano só pode ter um Atributo beneficiado por Terapia.",
  },
  {
    nome: "Tratamento",
    classe: "Monge",
    requisitos: "Defesa 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "após dez minutos de práticas de iluminação e cura, o alvo cura uma quantidade de PV igual a 2d12 +10 + seu MD.",
  },
  {
    nome: "Envenenamento",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Pó Venenoso. Você pode escolher usá-lo como um Golpe Corpo a Corpo sem o Descritor Explosão.",
  },
  {
    nome: "Vivacidade",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "para fins de fazer feitos acrobáticos, adicione metade de seu MA à sua Velocidade e aos seus Deslocamentos e trate Terreno Acidentado como Terreno Normal. Além disso, você pode correr em superfícies verticais por uma quantidade de metros igual a seu MA antes de ter que saltar. Finalmente, você pode se mover silenciosamente sem a necessidade de fazer testes.",
  },
  {
    nome: "Antídotos",
    classe: "Ninja",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma criatura adjacente Envenenada.",
    efeito:
      "role 1d20 + MD. Se o resultado for 13 ou mais, o alvo é curado do Veneno. Se o veneno foi infligido por você, o alvo é automaticamente curado sem necessidade de rolagem.",
  },
  {
    nome: "Armas Untadas",
    classe: "Ninja",
    requisitos: "um pokémon Venenoso.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "receba a Habilidade Toque Tóxico.",
  },
  {
    nome: "Bomba de Fumaça",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Cortina de Fumaça. Além disso, como um efeito constante, suas Dificuldades de Acurácia nunca são afetadas por Cortinas de Fumaça.",
  },
  {
    nome: "Borrão",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "ataques que o tenham como alvo e que por qualquer razão acertam automaticamente (dispensando Teste de Acurácia) agora requerem um Teste de Acurácia cuja Dificuldade é 2 + seu MD. Este efeito perfura até o fim do encontro.",
  },
  {
    nome: "Desaparecer",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode se misturar ao ambiente muito facilmente. Se for de sua vontade, enquanto você estiver parado, você está invisível. Se você se mover, demora 6 segundos parado para que sua camuflagem volte a funcionar.",
  },
  {
    nome: "Do Céu",
    classe: "Ninja",
    requisitos: "Ataque 16.",
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Golpe Aéreo.",
  },
  {
    nome: "Farpas",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um lugar.",
    efeito:
      "você usa o Golpe Espinhos ou o Golpe Espinhos Venenosos a seu critério.",
  },
  {
    nome: "Injetar Veneno",
    classe: "Ninja",
    requisitos: "um pokémon Venenoso.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Injetar Veneno.",
  },
  {
    nome: "Mortífero",
    classe: "Ninja",
    requisitos:
      "cinco Talentos de Ninja (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "você Envenena um alvo.",
    alvo: null,
    efeito: "em vez de apenas Envenenado, o alvo está com Veneno Mortal.",
  },
  {
    nome: "Multiplicar",
    classe: "Ninja",
    requisitos: "Borrão, Velocidade 15.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Multiplicar.",
  },
  {
    nome: "Sonífero",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Pó Sonífero, mas como Corpo a Corpo e sem o Descritor Explosão.",
  },
  {
    nome: "Trocar de Lugar",
    classe: "Ninja",
    requisitos: "Ataque 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um aliado a até 5 metros a quem você possui linha de visão",
    efeito: "você usa o Golpe Trocar de Lugar.",
  },
  {
    nome: "Venochoque",
    classe: "Ninja",
    requisitos: null,
    frequencia: "Diária.Diária.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Venochoque.",
  },
  {
    nome: "Armado",
    classe: "Soldado",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "as Dificuldades de Acurácia para seus ataques de Armas com sua(s) Arma(s) de Escolha são de apenas 2. Isso não pode beneficiar um ataque desarmado.",
  },
  {
    nome: "Ataque Poderoso",
    classe: "Soldado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você acerta um ataque de Armas com uma Arma de Escolha.",
    alvo: null,
    efeito: "aumente a Categoria de Dano Basal da arma em 2.",
  },
  {
    nome: "Abrir Caminhos",
    classe: "Soldado",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você declara um ataque de Armas.",
    alvo: null,
    efeito:
      "se sua arma é Corpo a Corpo, seu ataque ganha o Descritor Investida. Se sua arma é de Alcance, o ataque atinge uma área em linha com um metro de largura e 15 metros de comprimento. Um Golpe beneficiado por Abrir Caminhos não pode receber o benefício dos seguintes Talentos: Ferimento Profundo, Manobra Infalível, Matador, Sangramento, Tiro Múltiplo.",
  },
  {
    nome: "Égide",
    classe: "Soldado",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto empunhar uma arma, receba +5 à sua Defesa para fins de reduzir dano sofrido.",
  },
  {
    nome: "Ferimento Profundo",
    classe: "Soldado",
    requisitos: "Ataque 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "você obtém um resultado maior que 15 em um Teste de Acurácia para um ataque de Armas.",
    alvo: null,
    efeito:
      "o ataque é um Crítico. Um Golpe beneficiado por Sangramento não pode receber o benefício dos seguintes Talentos: Abrir Caminhos, Manobra Infalível, Matador, Sangramento, Tiro Múltiplo.",
  },
  {
    nome: "Foco Kiai",
    classe: "Soldado",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito: "você usa o Golpe Focar Energia.",
  },
  {
    nome: "Kata",
    classe: "Soldado",
    requisitos:
      "quatro Talentos de Soldado (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você usa o Golpe Dança das Espadas e seu próximo ataque de Armas possuirá o Descritor Saraivada.",
  },
  {
    nome: "Manobra Infalível",
    classe: "Soldado",
    requisitos:
      "Ataque 16, cinco Talentos de Soldado (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 20 Níveis, receba um uso diário adicional.",
    gatilho: "você declara um ataque de Armas.",
    alvo: null,
    efeito:
      "seu ataque acerta automaticamente o alvo, que deve usar a Defesa Especial – não a Defesa – para reduzir o dano. Um Golpe beneficiado por Manobra Infalível não pode receber o benefício dos seguintes Talentos: Abrir Caminhos, Ferimento Profundo, Matador, Sangramento, Tiro Múltiplo.",
  },
  {
    nome: "Matador",
    classe: "Soldado",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "você obtém um resultado maior que 15 em um Teste de Acurácia para um ataque de Armas.",
    alvo: null,
    efeito:
      "o alvo do ataque fica Confuso. Um Golpe beneficiado por Sangramento não pode receber o benefício dos seguintes Talentos: Ferimento Profundo, Manobra Infalível, Matador, Sangramento, Tiro Múltiplo.",
  },
  {
    nome: "Sangramento",
    classe: "Soldado",
    requisitos: "Ataque 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "você obtém um resultado maior que 15 em um Teste de Acurácia para um ataque de Armas.",
    alvo: null,
    efeito:
      "o alvo do ataque perde uma Fase de Defesa e de Defesa Especial. Um Golpe beneficiado por Sangramento não pode receber o benefício dos seguintes Talentos: Abrir Caminhos, Ferimento Profundo, Manobra Infalível, Matador, Tiro Múltiplo.",
  },
  {
    nome: "Tiro Múltiplo",
    classe: "Soldado",
    requisitos:
      "Ataque 17, quatro Talentos de Soldado (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "você declara um ataque de Armas feito com uma arma de Alcance (curto ou longo).",
    alvo: null,
    efeito:
      "seu ataque ganha o Descritor Explosão com um número de metros igual à metade de seu MA. Um Golpe beneficiado por Tiro Múltiplo não pode receber o benefício dos seguintes Talentos: Abrir Caminhos, Ferimento Profundo, Manobra Infalível, Matador, Sangramento.",
  },
  {
    nome: "Canalizar",
    classe: "Místico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon selvagem ou um pokémon aliado.",
    efeito:
      "faça um Teste de Captura para o pokémon alvo subtraindo sua Defesa do resultado da rolagem. Se o resultado final for menor que a Chance de Captura do pokémon alvo, você o canalizou. O pokémon é considerado Prestativo (como pelas regras descritas na Capacidade Hierarquia). Até que ele seja atacado ou muito distraído, ele ouvirá as suas sugestões e seguirá você (um pokémon selvagem só o fará dentro do território dele). Você tem conhecimento sobre as Habilidades, as Capacidades e o Golpes do pokémon canalizado e acessa as memórias dele ocorridas a até uma hora. Vocês dois podem se comunicar telepaticamente. Enquanto o pokémon é canalizado, ele é imune a capturas, e se você tentar fazer isso, ele tem sucesso automático em fugir. O pokémon canalizado segue as suas sugestões por amizade: considere que ele obedece você, mas não se houver um combate, caso em que age por conta própria (se você está canalizando um pokémon que já é seu, ele o obedece durante o combate normalmente). Você só pode canalizar um pokémon. A canalização é rompida se o pokémon se afastar de você mais distante que um número de metros igual ao dobro de seu MD. Canalizar exaure 10 Pontos de Vida.",
  },
  {
    nome: "Permissão",
    classe: "Místico",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "escolha um Golpe conhecido pelo pokémon que você está canalizando. Você pode usar o Golpe selecionado uma vez dentro de 24 horas, mesmo que não esteja mais canalizando o pokémon.",
  },
  {
    nome: "Ancestral",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode identificar as funções e as habilidades de itens inorgânicos não eletrônicos e sabe como os ativar e usar.",
  },
  {
    nome: "Canalizar Amigo",
    classe: "Místico",
    requisitos: "um pokémon com Lealdade 4.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Canalizar em um pokémon seu com Lealdade 2 ou mais, você obtém sucesso automático.",
  },
  {
    nome: "Canalizar Amigo +",
    classe: "Místico",
    requisitos: "Canalizar Amigo, Defesa 17.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Canalizar em um pokémon seu com Lealdade 2 ou mais, você obtém sucesso automático e não perde Pontos de Vida. Quando usar Canalizar em um pokémon de alguém com Lealdade 2 ou mais, você obtém sucesso automático se houver permissão de ambos humano e pokémon. Agora você pode canalizar dois pokémons simultaneamente. Este Talento substitui Canalizar Amigo.",
  },
  {
    nome: "Clérigo",
    classe: "Místico",
    requisitos: "Nível 10.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você pode canalizar até três pokémons simultaneamente.",
  },
  {
    nome: "Compartilhar Mente",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "todos os pokémons que você está canalizando são tratados como se suas Inteligências fossem a Inteligência do pokémon com mais alta Inteligência que você está canalizando no momento. Alternativamente, todos os pokémons que você está canalizando são tratados como se suas Inteligências fossem iguais a seu MA ou seu MAE. Em nenhum caso a Inteligência de um pokémon pode exceder 6 por este Talento.",
  },
  {
    nome: "Compartilhar Percepção",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode ver através dos olhos de um pokémon canalizado, e pode ouvir qualquer coisa que ele estiver ouvindo. Se canalizar mais de um pokémon, você pode trocar os sentidos de um pokémon para outro uma vez por rodada.",
  },
  {
    nome: "Druida",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode falar com plantas que possuam pelo menos vinte anos. Elas podem responder de maneira limitada para informar algumas coisas: sobre qualquer coisa que as tocou nas últimas 24 horas, sobre frutos delas ou sobre pokémons que vivem nas redondezas a visitando com frequência.",
  },
  {
    nome: "Esponja",
    classe: "Místico",
    requisitos:
      "ter usado Permissão para usar um Golpe de um pokémon seu leal que já subiu pelo menos 20 Níveis com você.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Permissão ou Empréstimo, você obtém três Golpes, em vez de apenas um (e não é possível selecionar o mesmo Golpe mais de uma vez).",
  },
  {
    nome: "Grunhidos e Piados",
    classe: "Místico",
    requisitos: "Canalizar Amigo.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon adjacente.",
    efeito:
      "você ativa este Talento exaurindo 10 Pontos de Vida. Pelas próximas quatro horas, você poderá falar com os pokémons da espécie do pokémon adjacente.",
  },
  {
    nome: "Misticismo",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione o triplo de seu MD a seus Pontos de Vida máximos. Isso só se aplica ao seu corpo humano.",
  },
  {
    nome: "Profeta",
    classe: "Místico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você tem o conhecimento relacionado a qualquer Lendário local.",
  },
  {
    nome: "Vodu",
    classe: "Místico",
    requisitos: "Clérigo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode fazer duas tentativas de Canalizar em uma mesma Ação Padrão.",
  },
  {
    nome: "Balada",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Tom Fatigante três rodadas seguidos, você usa o Golpe Canção.",
  },
  {
    nome: "Melodia",
    classe: "Bardo",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um Lendário que você possa ver.",
    efeito: "o alvo recupera 100 PV.",
  },
  {
    nome: "Cântico",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Cântico quatro rodadas seguidos, você usa um dos Golpes a seguir a seu critério: Dança da Chuva, Dia de Sol, Granizo.",
  },
  {
    nome: "Cantiga",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Cantiga três rodadas seguidas, você usa o Golpe Aromaterapia.",
  },
  {
    nome: "Concerto",
    classe: "Bardo",
    requisitos:
      "sete Talentos de Bardo (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MD. Se o resultado for 16 ou mais, o alvo recupera 100 PV.",
  },
  {
    nome: "Coro",
    classe: "Bardo",
    requisitos:
      "cinco Talentos de Bardo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho:
      "você usou Balada, Cântico, Cantiga, Hino, Lamento, Opera, Poema, Ritual ou Verso na rodada anterior.",
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Coro conta como um uso do Talento usado na rodada anterior para fins do Talento que ativou o Gatilho. Além disso, durante as três próximas rodadas, se você usar outro Talento de Bardo, o uso deste outro Talento conta como um uso do Talento que ativou o Gatilho.",
  },
  {
    nome: "Épica",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Épica três rodadas seguidas, você usa o Golpe Rajada de Vento.",
  },
  {
    nome: "Hino",
    classe: "Bardo",
    requisitos:
      "cinco Talentos de Bardo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Hino sete rodadas seguidas, cada aliado adjacente escolhe um Atributo e eleva duas Fases daquele Atributo. Na rodada seguinte, se o Hino for mantido, os aliados adjacentes não são beneficiados (sejam os mesmos ou outros), mas aqueles que estavam adjacentes na hora que receberam o benefício o mantêm. Depois de três rodadas em efeito, Hino novamente elevará duas Fases de Atributos dos aliados que estiverem adjacentes no momento (sejam eles os mesmos ou não). Assim continuará de três em três rodadas.",
  },
  {
    nome: "Lamento",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Locução duas rodadas seguidas, um pokémon a até 10 metros perde uma Fase para o Atributo à sua escolha (salvo Saúde) até o fim da rodada.",
  },
  {
    nome: "Opera",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Opera quatro rodadas seguidos, você usa um dos Golpes a seguir a seu critério: Gravidade, Sala de Truques, Sala Mágica.",
  },
  {
    nome: "Réquiem",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Poema quatro rodadas seguidas, você usa o Golpe Réquiem.",
  },
  {
    nome: "Ritual",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Nota quatro rodadas seguidas, você usa o Golpe Dança Caótica.",
  },
  {
    nome: "Verso",
    classe: "Bardo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "assim que declarar o uso deste Talento, seu turno acaba. Quando usar Verso duas rodadas seguidas, você usa o Golpe Olhar Paralisante.",
  },
  {
    nome: "Refletor",
    classe: "Guardião",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você usa o Golpe Refletor e pode, se quiser, tornar a Barreira do Refletor um Terreno Bloqueador.",
  },
  {
    nome: "Tela de Luz",
    classe: "Guardião",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você usa o Golpe Tela de Luz e pode, se quiser, tornar a Barreira da Tela de Luz um Terreno Bloqueador.",
  },
  {
    nome: "Aqui!",
    classe: "Guardião",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "se o alvo usar um Golpe ou um Talento que possui uma rolagem de dano na próxima ação dele, ele deve ter você como alvo. Este Talento só pode ser usado uma vez por rodada.",
  },
  {
    nome: "Bênção do Guardião",
    classe: "Guardião",
    requisitos: "Salvaguarda.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon ou um humano (possivelmente si mesmo).",
    efeito:
      "você pode usar Refletor, Salvaguarda e Tela de Luz como uma Cobertura – em vez de como uma Barreira – no alvo. Neste caso, ela durará até o fim do encontro ou até o alvo ser convocado de volta à pokébola.",
  },
  {
    nome: "Desgaste da Guerra",
    classe: "Guardião",
    requisitos:
      "Pelo Time!, cinco outros Talentos de Guardião (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 20 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Guarda-Costas ou Pelo Time!",
    alvo: null,
    efeito:
      "subtraia seu Ataque do dano que sofreria. Isso é uma exceção à regra de Defender.",
  },
  {
    nome: "Guarda-Costas",
    classe: "Guardião",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho:
      "um aliado (pokémon ou humano) adjacente é acertado por um ataque.",
    alvo: null,
    efeito:
      "você sofre metade do dano que seria causado ao aliado e ele só sofre a outra metade. Nem você nem o aliado podem usar Defesa, Defesa Especial ou qualquer habilidade ou Talento para reduzir ainda mais o dano sofrido.",
  },
  {
    nome: "Já foi o Bastante!",
    classe: "Guardião",
    requisitos:
      "ter usado Contra-Ataque mediante Permissão ou ter um pokémon leal que sabe Contra-Ataque.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Contra-Ataque.",
  },
  {
    nome: "Mártir",
    classe: "Guardião",
    requisitos:
      "sete Talentos de Guardião (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 25 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você pode usar qualquer Talento que tenha só possa ter você mesmo como alvo consumindo apenas uma Ação Livre.",
  },
  {
    nome: "Não Tão Rápido!",
    classe: "Guardião",
    requisitos: "Salvaguarda.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar Refletor, Salvaguarda e Tela de Luz como uma Ação de Interrupção. Se possuir o Talento Substituição, inclua-o nesta lista.",
  },
  {
    nome: "Reflexos",
    classe: "Guardião",
    requisitos: "Místico.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "você ou um pokémon canalizado é acertado por um ataque superefetivo e você está canalizando pelo menos um pokémon que é resistente ou imune ao ataque.",
    alvo: null,
    efeito: "a rolagem de ataque causa dano neutro, não dano superefetivo.",
  },
  {
    nome: "Repelir!",
    classe: "Guardião",
    requisitos:
      "ter usado Escudo Espelho mediante Permissão ou ter um pokémon leal que sabe Escudo Espelho.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Escudo Espelho.",
  },
  {
    nome: "Salvaguarda",
    classe: "Guardião",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Salvaguarda.",
  },
  {
    nome: "Substituição",
    classe: "Guardião",
    requisitos:
      "cinco Talentos de Guardião (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você usa o Golpe Substituição. Não é possível usar este Talento mais de uma vez por encontro.",
  },
  {
    nome: "Imitação",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um humano.",
    efeito:
      "role 1d20 + MD. Se o resultado for maior que a Defesa ou a Defesa Especial do alvo (use o menor entre a Defesa ou a Defesa Especial), você conseguiu imitar o alvo. Enquanto imitando o alvo, você é igual a ele na aparência e no comportamento, que vem a você instintivamente. A sua aura, contudo, permanece sua. Pelas próximas 24 horas ou até você dormir ou ficar inconsciente, você pode usar esta Imitação à vontade. Você pode trocar livremente entre sua forma verdadeira e a forma de qualquer um ao qual teve sucesso em usar Imitação nas últimas 24 horas e antes de dormir. A troca de forma requer apenas uma Ação Padrão. Se você falhar em usar Imitação em um alvo, ele é imune à sua Imitação por 24 horas. A Imitação é uma ilusão, portanto qualquer um que possa ver através de ilusões poderá ver sua verdadeira forma. Impostor consome 10 Pontos de Vida.",
  },
  {
    nome: "Indiscernível",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "o humano cuja forma você está imitando no momento.",
    efeito:
      "escolha um Talento do alvo. Pelas próximas 24 horas, enquanto você não abandonar a forma do alvo, você pode usar o Talento na frequência padrão para aquele Talento (usando o seu Nível, não o do alvo, caso seja relevante). Não é possível escolher um Talento de Uso Único.",
  },
  {
    nome: "Caça-Talentos",
    classe: "Ilusionista",
    requisitos:
      "três Talentos de Ilusionista (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar Indiscernível três vezes diárias, mas só uma vez por indivíduo.",
  },
  {
    nome: "Gosto deste Corpo!",
    classe: "Ilusionista",
    requisitos: "Mais um Pouquinho!",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "o humano cuja forma você está imitando há pelo menos 72 horas.",
    efeito:
      "você cria uma ligação entre o seu corpo e o do alvo. Você pode abdicar desta ligação quando quiser como uma Ação Livre durante seu turno. Enquanto a ligação for mantida, você pode usar Imitação no alvo independente da distância e da necessidade de ele estar dentro do seu campo visual. Você só pode possuir uma ligação. A cada 25 Níveis, receba uma ligação adicional.",
  },
  {
    nome: "Identidade",
    classe: "Ilusionista",
    requisitos: "ter usar Imitação em cinco pessoas que não eram suas aliadas.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa Imitação, você pode duplicar também o equipamento e o vestuário do alvo. Diferente de sua aparência, estes objetos não são ilusões, mas são réplicas físicas reais. Contudo nenhum destes objetos oferece qualquer bônus ou efeito especial que ele pudesse possuir. Se um destes itens é consumível e for usado, ele simplesmente não funciona. Assim, haverá de fato um frasco contendo um líquido colorido e diversos adereços, mas nenhum deles tem função estatística. Quando você usa Imitação em alguém, você copia também a aura dele, mascarando a sua própria aura.",
  },
  {
    nome: "Mais Um Pouquinho",
    classe: "Ilusionista",
    requisitos:
      "três Talentos de Ilusionista (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você não perde mais acesso a uma Imitação por dormir ou por inconsciência. Você ainda perde o acesso depois de 24 horas, a menos que reduza seus Pontos de Vida máximos por 10 para escolher automaticamente manter a forma que você está por mais 24 horas. Manter uma forma não é a mesma coisa que usar uma Imitação de novo, de modo que não serve para gatilhos que envolvem usar ativamente a Imitação.",
  },
  {
    nome: "Mórfico",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: null,
    gatilho: "Constante.",
    alvo: null,
    efeito:
      "quando você usa Imitação, você pode reter sua forma atual, sem mudar para a forma do alvo automaticamente, mas ainda a considerando dentro de sua lista de opções dentro das próximas 24 horas.",
  },
  {
    nome: "Parecidíssimo com Você!",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você tem sucesso em usar Imitação.",
    alvo: null,
    efeito:
      "escolha um Atributo. Se o Modificador do Atributo da pessoas que você está imitando é maior que o seu Modificador daquele Atributo, o seu Modificador aumenta para ser igual ao da pessoa imitada -1 enquanto você não abandonar a forma dela. Isso não muda o seu Atributo, apenas o Modificador.",
  },
  {
    nome: "Ressonância",
    classe: "Ilusionista",
    requisitos: "Defesa 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Imitação em um aliado, você obtém sucesso automático, e não perde Pontos de Vida. Se possuir o Talento Um Pouquinho Mais!, você pode acessar até três Imitações diárias em aliados antes que seus Pontos de Vida máximos sejam reduzidos.",
  },
  {
    nome: "Só Meu!",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "o Talento que você obteve mediante Indiscernível.",
    efeito:
      "ninguém pode usar o Talento alvo na sua presença por dez minutos. Depois deste período, você perde o acesso ao Talento.",
  },
  {
    nome: "Talentoso",
    classe: "Ilusionista",
    requisitos:
      "cinco Talentos de Ilusionista (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar os Talentos obtidos por Indiscernível em qualquer forma imitada ou na sua própria forma.",
  },
  {
    nome: "Transeunte",
    classe: "Ilusionista",
    requisitos: "Defesa 18.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você muda sua aparência para uma forma genérica, alguém bastante comum e discreto. Você não pode designar uma característica (como altura, tipo físico ou mesmo gênero), assumindo simplesmente um aspecto muito mundano, nunca parecido com alguém específico. Transeunte consome 10 Pontos de Vida.",
  },
  {
    nome: "Voz",
    classe: "Ilusionista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "você tem sucesso em usar Imitação.",
    alvo: null,
    efeito:
      "você aprende a fazer ilusões sonoras, assim quando tiver sucesso em usar Imitação, você pode copiar a voz do alvo de Imitação. Uma vez que tenha copiado a voz, você pode falar usando a voz daquela pessoa quando quiser para sempre no futuro, desde que esteja forma dela ou em sua forma verdadeira (não na forma de outra pessoa). Voz consome 50 Pontos de Vida.",
  },
  {
    nome: "Acupunturista",
    classe: "Médium",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Acupuntura.",
  },
  {
    nome: "Empoderamento",
    classe: "Médium",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon canalizado.",
    efeito:
      "você perde todas as Fases positivas que possuía, de modo a anulá-las. Elas são transferidas ao alvo nos mesmos Atributos como estavam afetando você. Empoderamento exaure 10 Pontos de Vida.",
  },
  {
    nome: "Agilidade",
    classe: "Médium",
    requisitos: "ter usado Agilidade ou Polimento mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Agilidade.",
  },
  {
    nome: "Amnésia",
    classe: "Médium",
    requisitos: "ter usado Amnésia mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Amnésia.",
  },
  {
    nome: "Aumento de Massa",
    classe: "Médium",
    requisitos:
      "ter usado dois Golpes que elevam Fases de Ataque ou Defesa mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Aumento de Massa.",
  },
  {
    nome: "Conspiração",
    classe: "Médium",
    requisitos: "ter usado Brilho ou Conspiração mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Conspiração.",
  },
  {
    nome: "Dança das Espadas",
    classe: "Médium",
    requisitos: "ter usado Dança das Espadas mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Dança das Espadas.",
  },
  {
    nome: "Defesa de Ferro",
    classe: "Médium",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão: Armadura Ácida, Barreira ou Defesa de Ferro.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Defesa de Ferro.",
  },
  {
    nome: "Magia Natural",
    classe: "Médium",
    requisitos:
      "já ter comido uma das seguintes frutas: damasco (Apicot), lichia (Liechi), longana (Ganlon), pitaia (Petaya), salak (Salac).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma fruta.",
    efeito:
      "escolha uma fruta entre damasco (Apicot), lichia (Liechi), longana (Ganlon), pitaia (Petaya) e salak (Salac). Após cinco minutos encantando a fruta alvo, ela perde as propriedades normais dela e ganha as propriedades da fruta escolhida. Ela mantém o sabor e a aparência que possuía antes. Magia Natural exaure 5 Pontos de Vida.",
  },
  {
    nome: "Mente Calma",
    classe: "Médium",
    requisitos:
      "ter usado dois Golpes que elevam Fases de Ataque Especial ou Defesa Especial mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Mente Calma.",
  },
  {
    nome: "Poder Cósmico",
    classe: "Médium",
    requisitos:
      "ter usado dois Golpes que elevam Fases de Defesa ou Defesa Especial mediante Permissão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Poder Cósmico.",
  },
  {
    nome: "Presença",
    classe: "Médium",
    requisitos:
      "seis Talentos de Médium (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho:
      "usando um Talento de Médium, você eleva uma ou mais Fases de um pokémon de modo que, no total, ele possui um saldo de pelo menos seis Fases positivas somando todas as Fases em todos os Atributos.",
    alvo: null,
    efeito:
      "todos os pokémons canalizados por você elevam uma Fase de um Atributo à sua escolha. Este Talento não pode ativar a si mesmo.",
  },
  {
    nome: "Supremacia",
    classe: "Médium",
    requisitos:
      "oito Talentos de Médium (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho:
      "usando um Talento de Médium, você eleva uma ou mais Fases de um pokémon de modo que, no total, ele possui um saldo de pelo menos oito Fases positivas somando todas as Fases em todos os Atributos.",
    alvo: null,
    efeito:
      "todos os inimigos a até 10 metros perdem uma Fase de um Atributo à sua escolha individualmente para cada inimigo.",
  },
  {
    nome: "Vegetarianismo",
    classe: "Médium",
    requisitos: "Defesa Especial 16.",
    frequencia: "Constante.",
    gatilho:
      "você come uma das seguintes frutas: damasco (Apicot), lichia (Liechi), longana (Ganlon), pitaia (Petaya) ou salak (Salac).",
    alvo: null,
    efeito: "você terá duas Fases elevadas do Atributo, em vez de apenas uma.",
  },
  {
    nome: "Visão dos Deuses",
    classe: "Orador",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "por cinco minutos, você poderá ver através dos olhos de qualquer Lendário que você já canalizou ou possuiu. Além disso, você sabe a direção e distância destes pokémons em relação a você.",
  },
  {
    nome: "Voz dos Deuses",
    classe: "Orador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Vozeirão. Voz dos Deuses drena 100 PV de cada Lendário já canalizado pelo Orador. Para cada 100 Pontos de Vida drenados, ela causa +2d10 de dano. Voz dos Deuses não poderá ser usado de novo por 2 dias.",
  },
  {
    nome: "Adeus Frígido",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Nevasca, Raio de Gelo ou Zero Absoluto.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Zero Absoluto. Adeus Frígido drena 100 PV de cada pokémon Lendário já canalizado pelo Orador. Para cada 200 Pontos de Vida drenados, subtraia 1 da Dificuldade de Acurácia. Adeus Frígido não poderá ser usada de novo por 5 dias e você não poderá usar Talentos, dar comandos a pokémons e nem mesmo se deslocar por 1 minuto (6 rodadas).",
  },
  {
    nome: "Ajoelhe-se!",
    classe: "Orador",
    requisitos:
      "já ter consumido 5000 PV de Lendários usando seus Talentos de Orador.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Olhar Paralisante. Além disso, o alvo não poderá se deslocar por cinco rodadas, durante as quais ele não pode causar dano a você (se causaria algum dano a você, você não sofre nenhum dano).",
  },
  {
    nome: "Atrocidade",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Açoite, Investida do Dragão, Ultraje.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Ultraje, mas o Golpe não se mantém ativo nas rodadas subsequentes e não causa Confusão em você. Atrocidade drena 25 PV de cada Lendário já canalizado pelo Orador. Atrocidade não poderá ser usada de novo por 3 dias.",
  },
  {
    nome: "Escudo da Fé",
    classe: "Orador",
    requisitos:
      "já ter consumido 1000 PV de Lendários usando seus Talentos de Orador.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Proteção.",
  },
  {
    nome: "Incêndio",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Erupção, Explosão de Fogo, Superaquecimento.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Superaquecimento. Incêndio drena 25 PV de cada Lendário já canalizado pelo Orador. Incêndio não poderá ser usado de novo por 2 dias.",
  },
  {
    nome: "Louvor",
    classe: "Orador",
    requisitos:
      "já ter consumido 500 PV de Lendários usando seus Talentos de Orador.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "pokémons canalizados por você podem o Golpe Mão Amiga tendo você como alvo. Um pokémon só pode fazer isso mediante Louvor uma vez diária.",
  },
  {
    nome: "Mímica",
    classe: "Orador",
    requisitos:
      "já ter consumido 300 PV de Lendários usando seus Talentos de Orador.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Espelho.",
  },
  {
    nome: "Parasitismo",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Absorção, Gigadreno, Megadreno.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Gigadreno. Parasitismo drena 25 PV de cada Lendário já canalizado pelo Orador. Parasitismo não poderá ser usado de novo por 2 dias.",
  },
  {
    nome: "Punição Divina",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Canhão Elétrico, Relâmpago, Trovão.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Canhão Elétrico. Punição Divina drena 25 PV de cada Lendário já canalizado pelo Orador. Punição Divina não poderá ser usada de novo por 3 dias.",
  },
  {
    nome: "Raio de Vida",
    classe: "Orador",
    requisitos: "ter usado Hiper-Raio mediante Permissão ou Empréstimo.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Hiper-Raio. Raio de Vida drena 100 PV de cada Lendário já canalizado pelo Orador. Adeus Frígido não poderá ser usada de novo por 4 dias e você não poderá usar Talentos, dar comandos a pokémons e nem mesmo se deslocar por 1 minuto (6 rodadas).",
  },
  {
    nome: "Tremor",
    classe: "Orador",
    requisitos:
      "ter usado um dos seguintes Golpes mediante Permissão ou Empréstimo: Deslizamento de Rochas, Magnitude, Terremoto.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Terremoto, mas a Explosão pode ser centrada À Distância 5. Tremor drena 25 PV de cada Lendário já canalizado pelo Orador. Tremor não poderá ser usado de novo por 3 dias.",
  },
  {
    nome: "Convocação",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "role 1d20. Se o resultado for 11 ou mais, um Unown aparece a até 5 metros de você. Se a rolagem for 20, você pode escolher a letra do Unown. O Unown não é hostil. Como um benefício constante, cada letra de Unown conta como um pokémon diferente para determinar seu Nível por captura de pokémons.",
  },
  {
    nome: "Soletrar",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "até seis Unown.",
    efeito:
      "você pode combinar até seis Unown separados em um pokémon só, que deve formar uma palavra. Cada Poder Oculto conhecido pelos Unown letras que compõem o novo Unown palavra conta como um Golpe diferente para ele. Além disso, pode escolher se usará Poder Oculto com Ataque ou com Ataque Especial. Cada Poder Oculto deve ser definido como usando Ataque ou Ataque Especial no momento da formação da palavra, e esta escolha é permanente. Para definir os Atributos do Unown combinado, escolha um Unown como sendo o líder. Use os Atributos dele e, para cada Unown adicionado a ele, adicione +3 a um Atributo dele. O Unown palavra – como o Unown letra – é um pokémon só: ele é mantido em uma pokébola. Ao formar uma palavra, não é possível separar as unidades mais, mas é possível adicionar uma letra se for possível adicionar letras.",
  },
  {
    nome: "Arma Rúnica",
    classe: "Rúnico",
    requisitos:
      "cinco Talentos de Rúnico (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 20 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um Unown palavra.",
    efeito:
      "o alvo se transforma em uma arma à sua escolha, cheia de inscritos rúnicos. Quando esta arma é usada para atacar, ela causa dano adicional igual ao Bônus Elemental que o Unown palavra possui. O usuário de uma Arma Rúnica pode usá-la para automaticamente se defender de um ataque, caso em que o Unown palavra sofre o dano do ataque no lugar dele. A Arma Rúnica permanece por até 24 horas, e desaparece se o Unown palavra ficar inconsciente ou for convocado de volta à pokébola. Neste estado, o Unown palavra não pode usar Capacidades nem Golpes.",
  },
  {
    nome: "Banimento",
    classe: "Rúnico",
    requisitos: "21 Unown.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MD. Se o resultado for 16 ou mais, o alvo é transportado para um espaço extradimensional conhecido como Espaço Unown até o fim do seu próximo turno, quando o alvo volta exatamente no mesmo ponto onde estava. O alvo sequer sente a passagem temporal, ele simplesmente não nota que foi alvo de Banimento. Não é possível usar Banimento em uma mesma criatura mais de uma vez por encontro, mas é possível sacrificar usos de Banimento para aumentar o número de rodadas que o alvo fica no Espaço Unown. Cada uso sacrificado aumenta em uma rodada o tempo que ele fica fora.",
  },
  {
    nome: "Dicionário",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode entender qualquer idioma escrito. Você conhece os significados de todas as palavras que lê, e pode fluentemente ler qualquer trecho escrito, mesmo que não saiba falar aquele idioma.",
  },
  {
    nome: "Força Oculta",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você ou qualquer Unown palavra seu usar Poder Oculto, você pode escolher que o Golpe tome a forma de uma Coluna com um metro de largura e 15 de comprimento, em vez de uma Explosão. Quando um Unown palavra seu usa Poder Oculto, ele ganha +1 de Bônus Elemental, mesmo que o Poder Oculto não seja do Tipo do Unown.",
  },
  {
    nome: "Olhos Satélites",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "para cada pokémon canalizado além do primeiro, adicione +1 à sua Evasão ou à Evasão dos pokémons canalizados por você.",
  },
  {
    nome: "Poder Oculto",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "o pokémon que você está canalizando.",
    efeito:
      "escolha uma forma de Poder Oculto na lista de Golpes do alvo. Você pode usar o Poder Oculto escolhido imediatamente.",
  },
  {
    nome: "Ponto Final",
    classe: "Rúnico",
    requisitos: "14 Unown.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "Escolha três Condições entre Confusão, Paralisia, Queimadura, Sono ou Veneno. É possível escolher a mesma condição mais de uma vez. Para cada escolha, faça um Teste de Acurácia com Dificuldade 5 contra o alvo. Cada ataque inflige a Condição escolhida no alvo. Você só pode usar este Talento se estiver com pelo menos 14 Unown consigo, espalhados em diferentes Unown palavras.",
  },
  {
    nome: "Portal",
    classe: "Rúnico",
    requisitos: "14 Unown.",
    frequencia: "Diária. A cada 25 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma área adjacente desocupada.",
    efeito:
      "escolha um local que você já visitou não mais que um ano atrás. Um portal aparece na área alvo e, quando ele é atravessado, ele conduz diretamente ao local designado, não importa o quão longe seja. Este portal só permite a travessia neste sentido, não é possível vir do outro lado para o original. Este teletransporte garante que você chegue a um local desocupado ou à área desocupada mais próxima do que você desejava. Qualquer um pode atravessar o portal. Ele permanece por até 5 minutos, mas você pode fechá-lo antes disso se desejar (tenha ou não atravessado).",
  },
  {
    nome: "Reescrever",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Semanal. A cada 15 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "um Unown palavra.",
    efeito:
      "após cinco minutos em um ritual ou em pesquisa literária, escolha uma das formas de Poder Oculto do alvo. Você pode refazer a rolagem que definiu o Tipo do Poder Oculto escolhido ou a rolagem que definiu o dano do Poder Oculto escolhido.",
  },
  {
    nome: "Runa",
    classe: "Rúnico",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "você inscreve uma Runa na escrita Unown. A qualquer momento você pode fechar seus olhos se concentrando na Runa para ver e ouvir através dela, e também projetar sua voz através dela. A Runa pode ser tão pequena ou tão grande quanto você desejar, e a sua habilidade de perceber o mundo e de projetar sua voz será proporcional ao tamanho dela. Por exemplo, uma runa que preencha uma enorme parede terá uma voz estrondosa e magnânima enquanto uma runa pequena e discreta soará como um sussurro; uma Runa miúda só permitirá que você enxergue como se através de uma fechadura enquanto que uma ruína antiga totalmente escrita permitirá observar o local inteiro de múltiplos ângulos. Você pode possuir um número máximo de Runas ativas igual a seu MD. Quando uma Runa é destruída, você se torna imediatamente consciente disso, não importa o quão distante esteja. Se múltiplas Runas são destruídas, você é avisado sobre cada uma delas individualmente.",
  },
  {
    nome: "Selo",
    classe: "Rúnico",
    requisitos: "Poder Oculto.",
    frequencia: "Diária.",
    gatilho: "você usa o Talento Poder Oculto.",
    alvo: null,
    efeito:
      "em vez de usar o Poder Oculto imediatamente, você escreve um Selo na escrita Unown e designa uma condição. Quando a condição é satisfeita, o Selo explode causando dano na quantidade e no Tipo conforme o Poder Oculto que seria usado. Você pode possuir um número máximo de Selos ativos igual a seu MD. Não é possível colocar muitos Selos circunvizinhos, eles devem ter pelo menos 5 metros de distância. Quando um Selo é detonado, você se torna imediatamente consciente disso, não importa o quão distante esteja. Se múltiplos Selos são detonados, você é avisado sobre cada um deles individualmente.",
  },
  {
    nome: "Empréstimo",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "você deixa uma possessão para voltar para seu corpo.",
    alvo: null,
    efeito:
      "escolha um Golpe conhecido pelo pokémon que você estava possuindo. Você pode usar o Golpe selecionado uma vez dentro de 24 horas, mesmo que não esteja mais possuindo o pokémon.",
  },
  {
    nome: "Possessão",
    classe: "Xamã",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "faça um Teste de Captura para o pokémon alvo subtraindo metade de sua Defesa do resultado da rolagem. Se o resultado final for menor que a Chance de Captura do pokémon alvo, você o possuiu. Você está em total controle do pokémon possuído e designa cada ação dele. Você tem conhecimento sobre as Habilidades, as Capacidades e o Golpes do pokémon possuído. Enquanto você está possuindo um pokémon, seu corpo original está inconsciente: ele não pode fazer nenhum teste por conta própria, falhando se necessário. Você ainda pode executar uma Ação Padrão por rodada, pode – mediante seu corpo pokémon – comandar seus pokémons e se desloca, mas o deslocamento é feito com o corpo do pokémon possuído e usa os Deslocamentos dele. Neste estado de transferência mental para o pokémon, usar um Golpe do pokémon consome a sua Ação Padrão. A menos que um Talento diga o contrário, você não pode ativar Talentos humanos enquanto possuir um pokémon, salvo por Talentos que permitem o uso de Golpes, caso em que você usa as estatísticas do pokémon possuído em vez de as suas próprias. Se você usar algo que envolve sacrifício de Pontos de Vida, os PV perdidos são do pokémon possuído, não do seu corpo humano. Você pode deixar o pokémon possuído durante o seu turno como humano consumindo sua Ação Padrão. Se o pokémon que você está possuindo desmaiar, você imediatamente retorna ao seu corpo. Se o pokémon possuído morrer, você morre. Se o pokémon possuído for capturado ou retornado à pokébola enquanto você o possui, a sua mente está trancada dentro da pokébola junto com o corpo do pokémon possuído até que ele seja liberado da pokébola. Golpes adquiridos mediante Empréstimo e Permissão não podem ser usados durante a Possessão. Você só pode possuir um pokémon. Usar Possessão exaure 35 Pontos de Vida.",
  },
  {
    nome: "Canalizar Força",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto possuindo um pokémon, para cada pokémon depois do primeiro que você estiver canalizando adicione +1d6 às rolagens de danos dos pokémons canalizados.",
  },
  {
    nome: "Comunhão",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Por Encontro.",
    gatilho: null,
    alvo: null,
    efeito:
      "se você estiver possuindo um pokémon e ele receber pontos de experiência, você pode sacrificar 10 Pontos de Vida para que o pokémon receba 25% de pontos de experiência adicionais.",
  },
  {
    nome: "Dois se Tornam Um",
    classe: "Xamã",
    requisitos:
      "seis Talentos de Xamã (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: "você deixa uma possessão para voltar para seu corpo.",
    alvo: null,
    efeito:
      "enquanto você possui um pokémon, o Nível do pokémon é aumentado por seu Nível para fins de definir quais Golpes ele conhece.",
  },
  {
    nome: "Empréstimo Duradouro",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar Golpes adquiridos mediante Empréstimo ou Permissão enquanto possui outro pokémon.",
  },
  {
    nome: "Ferocidade",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon possuído por você usa um Golpe causador de dano, adicione seu MD ao dano.",
  },
  {
    nome: "Mente Dominante",
    classe: "Xamã",
    requisitos:
      "quatro Talentos de Xamã (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "o pokémon que você está possuindo é afligido com Confusão, Paixão ou Sono.",
    alvo: null,
    efeito:
      "role 1d20 + MD. Se o resultado for 11 ou mais, o pokémon não foi afligido com a Condição.",
  },
  {
    nome: "Misticismo +",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione dez vezes seu MD a seus Pontos de Vida máximos. Isso só se aplica ao seu corpo humano. Este Talento substitui Misticismo.",
  },
  {
    nome: "Natureza Amiga",
    classe: "Xamã",
    requisitos: "um pokémon leal que já evoluiu pelo menos uma vez com você.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando o alvo da sua Possessão é um pokémon seu leal, você automaticamente tem sucesso em possuí-lo.",
  },
  {
    nome: "Presas",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Diária.",
    gatilho:
      "você acerta um Golpe Corpo a Corpo em sua forma humana ou pokémon.",
    alvo: null,
    efeito: "recupere um número de PV igual à metade do dano causado.",
  },
  {
    nome: "Primitivo",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "o pokémon possuído por você tem seus Deslocamentos aumentados pela metade de seu MD.",
  },
  {
    nome: "Seleção",
    classe: "Xamã",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você deixa uma possessão para voltar para seu corpo.",
    alvo: null,
    efeito:
      "escolha uma das seguintes Capacidades: Aura, Calor, Combustão, Congelação, Eletricidade, Encolhimento, Faro, Fiação, Frio, Geleira, Hierarquia, Ininteligível, Luminar, Magnetismo, Manancial, Materialização, Onirismo, Rebento, Sedução, Silêncio, Térreo, Tumefação, Vento.",
  },
  {
    nome: "Estudo Comportamental",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, você descobre o Nível do alvo. Se o resultado for 21 ou mais, você identifica quantos Pontos de Vida ele possui no momento.",
  },
  {
    nome: "Enciclopédia",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sabe qualquer informação sobre pokémons registrados em sua pokéagenda. Isso inclui Tipo, lista de Golpes, métodos de evolução, Habilidades, altura, peso e habitats.",
  },
  {
    nome: "Coordenação",
    classe: "Pesquisador",
    requisitos: "Ataque Especial 16 ou Defesa Especial 16",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon de um aliado.",
    efeito:
      "você pode dar comandos ao alvo desde que ele ainda não tenha agido naquela rodada. Deve haver consentimento explícito por parte do dono dele, a menos que este esteja inconsciente. Você ainda só pode dar um comando por rodada, a menos que possua Você Isso e Você Aquilo! Um pokémon não pode agir mais de uma vez por rodada em virtude deste Talento.",
  },
  {
    nome: "Estudo Comportamental +",
    classe: "Pesquisador",
    requisitos: "Ataque Especial 16 ou Defesa Especial 16.",
    frequencia: "Diária. A cada 3 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, você descobre o Nível do alvo e pelo menos seis Golpes que um espécime padrão daquele pokémon saberia naquele Nível (se o pokémon conhece menos que seis Golpes, você sabe todos os Golpes que ele conhece). Se o resultado for 21 ou mais, você identifica quantos Pontos de Vida ele possui no momento. Este Talento substitui Estudo Comportamental.",
  },
  {
    nome: "Hipótese dos Atributos",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 11 ou mais, você identifica a Natureza do alvo. Se o resultado for 16 ou mais, você também identifica qual(is) Habilidade(s) o alvo possui. Este Talento pode ser usado até duas vezes por encontro, mas não duas vezes no mesmo alvo durante um encontro.",
  },
  {
    nome: "Hipótese dos Atributos +",
    classe: "Pesquisador",
    requisitos: "Defesa Especial 16, Hipótese dos Atributos.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 11 ou mais, você identifica a Natureza do alvo. Se o resultado for 16 ou mais, você também identifica qual(is) Habilidade(s) o alvo possui. Se o resultado for 21 ou mais e o alvo é um pokémon selvagem, você pode escolher a Natureza dele. Este Talento substitui Hipótese dos Atributos. Este Talento pode ser usado até duas vezes por encontro, mas não duas vezes no mesmo alvo durante um encontro.",
  },
  {
    nome: "Manual do Usuário",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sabe o funcionamento de qualquer máquina. Adicionalmente, você sabe o funcionamento de um item se for um item com um efeito descrito neste livro. Você sabe quais defeitos podem influenciar o funcionamento de um item.",
  },
  {
    nome: "Mira Estratégica",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon aliado.",
    efeito:
      "adicione metade de seu MDE ao próximo Teste de Acurácia que o alvo fizer ainda nesta rodada.",
  },
  {
    nome: "Pesquisa",
    classe: "Pesquisador",
    requisitos: "Ataque Especial 14 ou Defesa Especial 14.",
    frequencia: "Diária. A cada 12 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local, um pokémon, um humano ou um objeto.",
    efeito:
      "após uma hora de pesquisa sobre o alvo, você recebe um número de Pontos de Pesquisa para aquele alvo igual a seu MAE ou a seu MDE. Até o dia seguinte, enquanto próximo ao alvo e executando ações relacionadas a ele, você pode gastar um Ponto de Pesquisa como uma Ação Livre para considerar seu MAE ou seu MDE aumentado em 3 por uma rodada. Não é possível gastar mais de um Ponto de Pesquisa por rodada. A cada vez que gastar um Ponto de Pesquisa, o Narrador dá a você uma informação sobre o alvo. Você pode gastar mais de um uso diário deste Talento simultaneamente para pesquisar sobre mais de um alvo sem aumentar o tempo de pesquisa de uma hora.",
  },
  {
    nome: "Planejamento",
    classe: "Pesquisador",
    requisitos: "Ataque Especial 16.",
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um aliado (pokémon ou humano).",
    efeito: "desloque o alvo um número de metros igual a seu MAE ou seu MDE.",
  },
  {
    nome: "Planejamento Perfeito",
    classe: "Pesquisador",
    requisitos: "Planejamento.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "seus aliados pokémons e humanos.",
    efeito: "desloque os alvos um número de metros igual a seu MAE ou seu MDE.",
  },
  {
    nome: "Química",
    classe: "Pesquisador",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "após uma hora de trabalho, você cria um Repelente.",
  },
  {
    nome: "Resposta Tática",
    classe: "Pesquisador",
    requisitos: "Coordenação.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "escolha um Golpe dentre todos os Golpes para ser o Golpe Gatilho. Depois escolha um Golpe não causador de dano conhecido pelo alvo para ser o Golpe de Escolha. Pelo resto do dia, se um inimigo usar o Golpe Gatilho contra o alvo, este pode imediatamente usar o Golpe de Escolha como uma Ação de Interrupção. Enquanto ativar o Talento consome sua Ação Padrão, uma vez que o Golpe Gatilho for usado, nenhum comando seu é necessário.",
  },
  {
    nome: "Poções",
    classe: "Cientista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após certa quantidade de trabalho químico, você cria um Item: 1 hora Poção; 2 horas Superpoção; 4 horas Hiperpoção",
  },
  {
    nome: "Repelentes",
    classe: "Cientista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após certa quantidade de trabalho químico, você cria um Item: 1 hora Repelente; 2 horas Super-repelente; 4 horas Repelente Máximo",
  },
  {
    nome: "Concentrados",
    classe: "Cientista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho químico, escolha uma das seguintes frutas: romã (Pomeg), alga (Kelpsy), pera (Qualot), candalupo (Hondew), uva (Grepa). Você cria um item com os mesmos efeitos da fruta escolhida.",
  },
  {
    nome: "Éteres",
    classe: "Cientista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "após quatro horas de trabalho químico, você cria um Éter.",
  },
  {
    nome: "Elixires",
    classe: "Cientista",
    requisitos: "Éteres.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito: "após quatro horas de trabalho químico, você cria um Elixir.",
  },
  {
    nome: "Magnificadores",
    classe: "Cientista",
    requisitos:
      "Suplementos Defensivos, Suplementos Explosivos, Suplementos Ofensivos.",
    frequencia: "Mensal. A cada 15 Níveis, receba um uso mensal adicional.",
    gatilho: null,
    alvo: null,
    efeito: "após dez horas de trabalho químico, você cria um Magnificador.",
  },
  {
    nome: "Suplementos Explosivos",
    classe: "Cientista",
    requisitos: "um pokémon com Saúde ou Velocidade 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho químico, você cria um Imunizante ou um Carburante.",
  },
  {
    nome: "Suplementos Ofensivos",
    classe: "Cientista",
    requisitos: "um pokémon com Ataque ou Ataque Especial 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho químico, você cria uma Proteína ou um Cálcio.",
  },
  {
    nome: "Suplementos Defensivos",
    classe: "Cientista",
    requisitos: "um pokémon com Defesa ou Defesa Especial 20.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após quatro horas de trabalho químico, você cria um Ferro ou um Zinco.",
  },
  {
    nome: "Melhoradores de Performance",
    classe: "Cientista",
    requisitos: "Defesa Especial 14.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após trinta minutos de trabalho químico, você rola 1d8 e cria um item conforme o resultado: 1 X-Ataque; 2 X-Defesa; 3 X-Ataque Especial; 4 X-Defesa Especial; 5 X-Velocidade; 6 X-Acurácia; 7 Golpe Atroz; 8 Guarda Especial",
  },
  {
    nome: "Melhoradores de Performance +",
    classe: "Cientista",
    requisitos: "ter usado Melhoradores de Performance três vezes.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho químico, você cria um dos seguintes itens à sua escolha: X-Ataque, X- Defesa, X-Ataque Especial, X-Defesa Especial, X-Velocidade, X-Acurácia, Golpe Atroz, Guarda Especial. Este Talento substitui Melhoradores de Performance.",
  },
  {
    nome: "Remédios",
    classe: "Cientista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após trinta minutos de trabalho químico, você rola 1d6 e cria um item conforme o resultado: 1 Antídoto; 2 Despertador; 3 Pomada; 4 Anticongelante; 5 Antiparalisante; 6 Panaceia",
  },
  {
    nome: "Remédios +",
    classe: "Cientista",
    requisitos: "ter usado Remédios três vezes.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de trabalho químico, você cria um dos seguintes itens à sua escolha: Antídoto, Despertador, Pomada, Anticongelante, Antiparalisante. Este Talento substitui Remédios.",
  },
  {
    nome: "Arte Fotográfica",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma criatura ou um lugar.",
    efeito:
      "role 1d20 + MDE. Você tira uma fotografia que pode ser vendida no valor de vinte vezes o resultado da rolagem.",
  },
  {
    nome: "Fotografia Rara",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você ou um aliado é atacado por um pokémon usando um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você tira uma fotografia do Golpe, que pode ser vendida no valor de trinta vezes o resultado da rolagem.",
  },
  {
    nome: "Avaliação",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você usa Arte Fotográfica em um pokémon ou em um humano.",
    alvo: null,
    efeito:
      "você pode usar o Golpe Revelação no mesmo alvo de Arte Fotográfica como uma Ação Livre. Alternativamente, você pode usar Revelação como uma Ação Padrão se estiver avaliando uma fotografia já obtida do alvo.",
  },
  {
    nome: "Bola de Aporrinhar",
    classe: "Fotógrafo",
    requisitos: "Incômodo ou Provocação.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "desde que não tenha feito nenhuma ação nas duas rodadas passadas, role 1d20 + MDE. Se o resultado for 11 ou mais, você usa ambos os seguintes Golpes no alvo: Ataque de Areia e Gás Venenoso. Este Talento não pode ter como alvo um pokémon que já foi alvo de qualquer dos seguintes Talentos ainda neste encontro: Bola de Aporrinhar, Incômodo, Provocação.",
  },
  {
    nome: "Estúdio de Batalha",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você possuir uma Fotografia Rara retratando um Golpe específico, qualquer tentativa de usar aquele Golpe contra um pokémon seu ou contra você tem a Dificuldade de Acurácia aumentada em 2.",
  },
  {
    nome: "Flash",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Clarão. Você pode usar este Talento como uma Ação Livre quando usar Arte Fotográfica, Fotografia Rara ou Fotografia Rara +, mas ambos os Talentos devem ter o mesmo alvo. Após usar Flash, você não poderá usar Flash de novo nas próximas duas rodadas.",
  },
  {
    nome: "Fotografia Rara +",
    classe: "Fotógrafo",
    requisitos: "Defesa Especial 17.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você ou um aliado é atacado por um pokémon usando um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você tira uma fotografia do Golpe, que pode ser vendida no valor de quarenta e cinco vezes o resultado da rolagem. Este Talento substitui Fotografia Rara.",
  },
  {
    nome: "Incômodo",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "desde que não tenha feito nenhuma ação na rodada passada, role 1d20 + MDE. Se o resultado for 16 ou mais, você usa o Golpe Supersônico no alvo. Este Talento não pode ter como alvo um pokémon que já foi alvo de qualquer dos seguintes Talentos ainda neste encontro: Bola de Aporrinhar, Incômodo, Provocação.",
  },
  {
    nome: "Pesquisa Fotográfica",
    classe: "Fotógrafo",
    requisitos: "Pesquisa.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "escolha uma fotografia de um pokémon, de um humano ou de um local tirada usando Arte Fotográfica. Você recebe um Ponto de Pesquisa para o alvo da fotografia, como se tivesse usado Pesquisa sobre ele. Múltiplas fotos podem aumentar esta quantidade, mas a uma determinada fotografia só concede um Ponto de Pesquisa.",
  },
  {
    nome: "Provocação",
    classe: "Fotógrafo",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "desde que não tenha feito nenhuma ação na rodada passada, role 1d20 + MDE. Se o resultado for 16 ou mais, você usa o Golpe Provocação no alvo. Este Talento não pode ter como alvo um pokémon que já foi alvo de qualquer dos seguintes Talentos ainda neste encontro: Bola de Aporrinhar, Incômodo, Provocação.",
  },
  {
    nome: "Registro Fotográfico",
    classe: "Fotógrafo",
    requisitos:
      "cinco Talentos de Ardente (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma fotografia obtida por Fotografia Rara ou Fotografia Rara +.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 21 ou mais, a fotografia é tratada como um Registro podendo ensinar pokémons que podem aprender o Golpe fotografado não apenas a pokémons que podem aprender aquele Golpe por Registro, mas também a pokémons que podem aprendê-lo subindo de Nível e por um Tutor. Um determinado pokémon só pode aprender um Golpe mediante fotografias beneficiadas por este Talento.",
  },
  {
    nome: "Registro Fotográfico +",
    classe: "Fotógrafo",
    requisitos: "Registro Fotográfico.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma fotografia obtida por Fotografia Rara ou Fotografia Rara +.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 21 ou mais, a fotografia é tratada como um Registro podendo ensinar pokémons que podem aprender o Golpe fotografado não apenas a pokémons que podem aprender aquele Golpe por Registro, mas também a pokémons que podem aprendê-lo subindo de Nível e por um Tutor. Um determinado pokémon só pode aprender um Golpe mediante fotografias beneficiadas por este Talento, mas, se for um pokémon seu, ele pode aprender até três Golpes mediante Registros Fotográficos. Se posteriormente você vier a trocar um pokémon que aprendeu mais de um Golpe mediante Registros Fotográficos, o novo dono dele não conseguirá manter a memória do pokémon tão vívida, portanto ele só manterá um Golpe memorizado dentre os dois ou três.",
  },
  {
    nome: "Vida Selvagem",
    classe: "Fotógrafo",
    requisitos: "Defesa Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Arte Fotográfica em um pokémon selvagem, em vez de multiplicar a rolagem por 20 para definir o valor da fotografia, multiplique por 45.",
  },
  {
    nome: "Máquina dos Sonhos",
    classe: "Hipnólogo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você possui uma Máquina dos Sonhos, comparável em tamanho a um computador portátil. Quando ela é usada em um pokémon que está dormindo, ela permitirá que você assista os sonhos do pokémon mediante o visor por até oito horas, depois das quais o pokémon acordará. Se ele for perturbado durante seu sono, ele deve fazer o teste comum para acordar (como pela Condição Sono). Sonhos mostrarão desejos subconscientes do pokémon, contudo o verdadeiro significado de um sonho pode ser confuso ou obscuro. Um pokémon específico só pode ter seus sonhos observados por uma Máquina dos Sonhos a cada três dias.",
  },
  {
    nome: "Materialização Onírica",
    classe: "Hipnólogo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon que está dormindo há pelo menos quatro horas.",
    efeito:
      "desde que você tenha pelo menos um pokémon com Onirismo trabalhando com você nos sonhos do alvo, role 1d20 + MDE. Se o resultado for 18 ou mais, quando o alvo acordar, ele trará de seu sonho um objeto com o qual sonhou. Só é possível a um pokémon sonhar com um objeto se ele já o teve consigo (como um item Mantido). O item sonhado é decidido pelo Narrador.",
  },
  {
    nome: "Cochilo",
    classe: "Hipnólogo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "o pokémon que está dormindo e sendo avaliado pela Máquina dos Sonhos.",
    efeito:
      "reduza em um quarto a quantidade de horas necessárias para Talentos que requerem uma quantidade mínima de horas de sonhos para funcionar.",
  },
  {
    nome: "Cochilo +",
    classe: "Hipnólogo",
    requisitos: "Cochilo",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "o pokémon que está dormindo e sendo avaliado pela Máquina dos Sonhos.",
    efeito:
      "reduza em um terço a quantidade de horas necessárias para Talentos que requerem uma quantidade mínima de horas de sonhos para funcionar. Este Talento substitui Cochilo.",
  },
  {
    nome: "Habilidade Inconsciente",
    classe: "Hipnólogo",
    requisitos: "Defesa Especial 17.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon que está sonhando há pelo menos oito horas.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 17 ou mais, o pokémon recebe permanentemente uma Habilidade, escolhida entre as Altas Habilidades do pokémon. Um pokémon não pode receber uma terceira Habilidade mediante este Talento. Se o alvo já possui duas Habilidades, substitua uma das Habilidades dele. Habilidade Inconsciente jamais poderá ser usada novamente no mesmo pokémon.",
  },
  {
    nome: "Habilidade Inconsciente +",
    classe: "Hipnólogo",
    requisitos: "Habilidade Inconsciente.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon que está sonhando há pelo menos oito horas.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 17 ou mais, o pokémon recebe permanentemente uma Habilidade, escolhida entre as Altas Habilidades do pokémon. Um pokémon não pode receber uma quarta Habilidade mediante este Talento. Se o alvo já possui três Habilidades, substitua uma das Habilidades dele. Habilidade Inconsciente + jamais poderá ser usada novamente no mesmo pokémon. Este Talento substitui Habilidade Inconsciente.",
  },
  {
    nome: "Habilidade Oculta",
    classe: "Hipnólogo",
    requisitos: "Habilidade Inconsciente.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon que teve seu sonho avaliado alguma vez nesta semana.",
    efeito:
      "determine aleatoriamente uma Habilidade que o alvo possui. Ele perde a Habilidade por uma hora. Depois, determine aleatoriamente uma Habilidade que consta na lista de possíveis Habilidades dele, mas que ele não possui no momento. Ele ganha esta Habilidade durante o mesmo período de tempo. Repare que é possível que a Habilidade removida seja a mesma concedida.",
  },
  {
    nome: "Introjeção",
    classe: "Hipnólogo",
    requisitos: "ter usando com sucesso Materialização Onírica cinco vezes.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "o pokémon que está dormindo e sendo avaliado pela Máquina dos Sonhos.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 20 ou mais, declare o nome de um item que o alvo já viu e usou antes. O pokémon sonhará com o item e este será o item materializado se a Materialização Onírica tiver sucesso.",
  },
  {
    nome: "Sonho Lúcido",
    classe: "Hipnólogo",
    requisitos: "Habilidade Inconsciente, Reprogramação Mental.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "o pokémon que está dormindo e sendo avaliado pela Máquina dos Sonhos.",
    efeito:
      "você pode dar ao pokémon alvo um item Mantido que o mantém sendo avaliado continuamente pela Máquina dos Sonhos, mesmo sendo convocado de volta à pokébola. O item manterá o alvo em sonho consciente. Enquanto neste estado, ele ganha 500 pontos de experiência a cada 24 horas que permanecer com você dentro da pokébola. Estes pontos de experiência são concedidos quando o pokémon sai da pokébola próximo à sua Máquina dos Sonhos pronta. Se ele for enviado para fora da pokébola antes das 24 horas se completarem, ele perde os benefícios por aquelas 24 horas. Enquanto a Máquina dos Sonhos avalia o sonho deste pokémon, ela não pode ser usada para mais nada.",
  },
  {
    nome: "Regressão",
    classe: "Hipnólogo",
    requisitos: "Introjeção.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "o pokémon que está dormindo e sendo avaliado pela Máquina dos Sonhos.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, você pode entender a razão pela qual um pokémon está angustiado, qual a fonte da infelicidade dele e o que é necessário no mundo real para consertar isso. Você pode fazer questões para o pokémon que está dormindo, e as respostas serão manifestas no sonho do pokémon que é visível para você através da Máquina dos Sonhos.",
  },
  {
    nome: "Reprogramação Mental",
    classe: "Hipnólogo",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um pokémon que está sonhando há pelo menos sete horas.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 20 ou mais, você pode remover um número de pontos igual à metade de seu MDE de um Atributo Basal do pokémon para adicionar a outro Atributo Basal do pokémon. Se isso mudar a Relação Basal de um pokémon, distribua seus Pontos de Atributos quando ele subir de Nível conforme a nova Relação Basal. Reprogramação Mental jamais poderá ser usada novamente no mesmo pokémon.",
  },
  {
    nome: "Vivência",
    classe: "Hipnólogo",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "receba +3 a quaisquer testes feitos para usar um Talento em um pokémon que está sonhando.",
  },
  {
    nome: "Busca pela Família",
    classe: "Observador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, você rastreia onde aquele pokémon vive naquela região. Se há outros da mesma espécie ou da mesma família evolutiva, você os encontrará ou achará pistas de onde possam estar. Se o resultado for 21 ou mais, você localiza fontes de comida e outros recursos que pokémons da família do pokémon selvagem precisam, incluindo frutas, vegetação, fontes de água e outras coisas semelhantes.",
  },
  {
    nome: "Ver de Perto",
    classe: "Observador",
    requisitos: null,
    frequencia: "Diária. A cada 3 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "o alvo não percebe você a menos que se aproxime mais do que o triplo de seu MDE. Se você anunciar sua presença, ele não será provocado.",
  },
  {
    nome: "Busca pelo Brilho",
    classe: "Observador",
    requisitos: null,
    frequencia: "Diária. A cada 20 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d100. Se o resultado for menor que o triplo de seu MDE, um pokémon shiny aparece no próximo encontro com pokémons selvagens.",
  },
  {
    nome: "Busca pelo Tipo",
    classe: "Observador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon selvagem.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 14 ou mais, você acha pistas que indicam que outros pokémons do mesmo Tipo vivem na área. Você ainda deve usar outros meios para achá-los. Se o resultado for 21 ou mais, você localiza fontes de comida e outros recursos que pokémons do Tipo do pokémon selvagem precisam, incluindo frutas, vegetação, fontes de água e outras coisas semelhantes.",
  },
  {
    nome: "Conhecedor de Frutos",
    classe: "Observador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode identificar qualquer Fruta, suas propriedades e seus sabores (portanto como ela influencia Aptidões). Receba +2 às rolagens para produzir Sucos ou Temperos. Quando seu pokémon come uma Fruta cujo sabor ele gosta, quaisquer ganhos de lealdade são dobrados.",
  },
  {
    nome: "De Antemão!",
    classe: "Observador",
    requisitos: "Planejamento.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você começa um encontro com um pokémon selvagem.",
    alvo: null,
    efeito:
      "você pode, como uma Ação Livre, usar Planejamento, Planejamento Perfeito ou Sabotagem no início do encontro antes de quaisquer ações serem feitas por quaisquer criaturas (pokémons ou humanos). Usar este Talento consome tanto um uso diário de De Antemão! quanto um uso diário do Talento escolhido.",
  },
  {
    nome: "De Antemão! +",
    classe: "Observador",
    requisitos: "Planejamento.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você começa um encontro.",
    alvo: null,
    efeito:
      "você pode, como uma Ação Livre, usar Planejamento, Planejamento Perfeito ou Sabotagem no início do encontro antes de quaisquer ações serem feitas por quaisquer criaturas (pokémons ou humanos). Usar este Talento consome tanto um uso diário de De Antemão! quanto um uso diário do Talento escolhido. Este Talento substitui De Antemão!",
  },
  {
    nome: "Encontre Isso!",
    classe: "Observador",
    requisitos: "Rastreador.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon que está subindo de Nível.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 16 ou mais, o alvo aprende o Golpe Farejar.",
  },
  {
    nome: "Escrutínio",
    classe: "Observador",
    requisitos: "Defesa Especial 16.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 11 ou mais, você identifica se o alvo possui algum Tipo, Habilidade, Capacidade ou Golpe que não é típico de sua espécie. Se o resultado for 21 ou mais, você sabe especificar cada característica dessas que o alvo tenha.",
  },
  {
    nome: "Estudo Silencioso",
    classe: "Observador",
    requisitos: "Defesa Especial 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "se você está usando Ver de Perto, você pode se aproximar a até 3 metros do pokémon selvagem sem alertá-lo, a menos que queira.",
  },
  {
    nome: "Pinceladas",
    classe: "Observador",
    requisitos: "Defesa Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você é um pintor e desenhista veloz. É necessário para você menor de um minuto para fazer um esboço de qualquer coisa que veja. Você pode adicionar os detalhes em 30 minutos. Após uma hora de trabalho, você desenha qualquer coisa que tenha visto nas últimas 24 horas com detalhes maravilhosos.",
  },
  {
    nome: "Psicologia",
    classe: "Observador",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "você ouve algo que você suspeita ser uma mentira.",
    alvo: null,
    efeito:
      "especifique qual sentença dita pela pessoa você quer avaliar. Você saberá se aquela sentença é uma inteiramente verdade ou não. Apenas mentiras contadas deliberadamente são reconhecíveis como mentiras. Este Talento pode ser usado tanto ouvindo alguém diretamente quanto em gravações de áudios ou vídeos.",
  },
  {
    nome: "Rastreador",
    classe: "Observador",
    requisitos: "um pokémon com a Capacidade Faro.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu faz um teste para usar a Capacidade Faro, adicione +5 à rolagem.",
  },
  {
    nome: "Exaltação",
    classe: "Ocultista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um Lendário.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, o alvo hesitará em atacar você e seus pokémons. Ele tenderá a favorecer você mais que antes.",
  },
  {
    nome: "Mitologia",
    classe: "Ocultista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sabe qualquer informação sobre pokémons Lendários que já encontrou. Isso inclui Tipo, lista de Golpes, métodos de evolução, Habilidades, altura, peso e habitats.",
  },
  {
    nome: "Bênção",
    classe: "Ocultista",
    requisitos: "ter se aliado a um Lendário.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + o dobro do seu MDE. O alvo recupera uma quantidade de Pontos de Vida igual ao resultado da rolagem. Só é possível usar este Talento enquanto mantiver boas relações com algum Lendário.",
  },
  {
    nome: "Bênção Lendária",
    classe: "Ocultista",
    requisitos: "Defesa Especial 18, Bênção.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 2d20 + o triplo do seu MDE. O alvo recupera uma quantidade de Pontos de Vida igual ao resultado da rolagem. Só é possível usar este Talento enquanto mantiver boas relações com algum Lendário.",
  },
  {
    nome: "Idioma Sagrado",
    classe: "Ocultista",
    requisitos: "Professor, Linguista.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você pode falar com todos os Lendários e entendê-los.",
  },
  {
    nome: "Incorporação",
    classe: "Ocultista",
    requisitos: "Vinculação, estar vinculado a um Lendário.",
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "um pokémon leal.",
    efeito:
      "o alvo usa um Golpe conhecido pelo Lendário vinculado. Isso conta como uma Ação de Comando e só pode ser feito uma vez por rodada. Os Golpes conhecidos como Assinaturas não podem ser usados desta forma.",
  },
  {
    nome: "Invocação",
    classe: "Ocultista",
    requisitos: "Vinculação, estar vinculado a um Lendário.",
    frequencia: "Mensal. A cada 15 Níveis, receba um uso mensal adicional.",
    gatilho: null,
    alvo: "um Lendário aliado.",
    efeito: "você invoca o Lendário de onde ele estiver.",
  },
  {
    nome: "Milagre",
    classe: "Ocultista",
    requisitos: "ter se aliado a um Lendário.",
    frequencia: "Semanal. A cada 8 Níveis, receba um uso semanal adicional.",
    gatilho: "um aliado (pokémon ou humano) falha em um Teste de Morte.",
    alvo: null,
    efeito:
      "o alvo pode refazer aquele Teste de Morte. Ele subtrai 5 da rolagem se for humano ou 25 se for pokémon.",
  },
  {
    nome: "Moral",
    classe: "Ocultista",
    requisitos: "Coordenação.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "pokémons aliados a até um número de metros igual a seu MDE.",
    efeito:
      "escolha um Atributo (salvo Saúde). Eleve uma Fase do Atributo selecionado dos alvos até o fim do encontro.",
  },
  {
    nome: "Presságio",
    classe: "Ocultista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um lugar não urbano.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 11 ou mais, você descobre a última vez que um Lendário esteve na área.",
  },
  {
    nome: "Saudação",
    classe: "Ocultista",
    requisitos: "ter usado Exaltação uma vez.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "a área de residência de um Lendário que você já encontrou.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 21 ou mais, o Lendário aparecerá. Ele não necessariamente virá até você, mas será possível percebê-lo.",
  },
  {
    nome: "Sexto Sentido",
    classe: "Ocultista",
    requisitos: "Vinculação, estar vinculado a um Lendário.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um Lendário vinculado.",
    efeito:
      "role 1d20 + MDE. Se o resultado for 14 ou mais, você sabe a direção do alvo. Se o resultado for 18 ou mais, você também sabe a distância até ele.",
  },
  {
    nome: "Vinculação",
    classe: "Ocultista",
    requisitos: "ter usado Exaltação uma vez.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um Lendário aliado.",
    efeito:
      "o Lendário está vinculado a você, o que significa que você saberá se ele estiver em perigo independentemente da distância.",
  },
  {
    nome: "Arqueologia",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "após trinta minutos de trabalho minucioso, role 1d20 + MAE. Se o resultado for 16 ou mais, você acha pistas de fósseis que existam nas proximidades ou encontra evidências da história do lugar (conforme definido pelo Narrador). Se o resultado dor 21 ou mais, você determina se encontra um fóssil ou uma informação histórica, em vez de o Narrador determinar, contudo após esta escolha todas as demais informações ficam a cargo do Narrador.",
  },
  {
    nome: "Procurar Pedras",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "após trinta minutos de busca, role 1d20 + MAE. Se o resultado for 21 ou mais, você encontra uma Pedra Elemental escolhida pelo Narrador.",
  },
  {
    nome: "Armadilha Elemental",
    classe: "Petrologista",
    requisitos: "Cavar e Cavar.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma armadilha de fosso sua.",
    efeito:
      "após dois minutos modificando sua armadilha de fosso, você pulveriza uma Pedra Elemental (destruindo-a) dentro da armadilha para garantir que a vítima que cair na armadilha sofra o Golpe Deslizamento de Rochas, mas o dano é do Tipo conforme a tabela a seguir: Pedra da Água Água; Pedra da Folha Planta; Pedra do Fogo Fogo; Pedra do Frio Gelo; Pedra do Trovão Elétrico. Além das pedras listadas na tabela acima, é possível usar as Pedras Evolutivas criadas mediante Cinzelamento, que causam dano conforme o Tipo escolhido ao criá-las.",
  },
  {
    nome: "Caçador de Tesouros",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sabe sobre regiões históricas academicamente. Você pode doar ou vender artefatos arqueológicos que encontrar mediante Arqueologia para museus por um preço igual a trinta vezes a seguinte rolagem: 1d20 + MAE.",
  },
  {
    nome: "Cavar e Cavar",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "após cinco minutos cavando, você produz uma armadilha de fosso com 5 metros de largura e dois de profundidade. Esta armadilha pode ser coberta por camuflagem para que pokémons e humanos não a distingam dos arredores. Você pode escolher poder ativar a armadilha puxando uma corda se estiver próximo ou preferir que ela seja ativada sozinha se algo pesando pelo menos 50 kg passar por cima da camuflagem.",
  },
  {
    nome: "Cinzelamento",
    classe: "Petrologista",
    requisitos: "Condensação.",
    frequencia: "Mensal.",
    gatilho: null,
    alvo: "uma pedra ordinária.",
    efeito:
      "após dez horas de trabalho, você transforma uma pedra comum em uma Pedra Evolutiva. Escolha um Tipo. Quando o item criado por este Talento toca um pokémon que possua o Tipo escolhido, o pokémon evoluirá desde que tenha cumprido o requisito de Nível para evoluir, ignorando quaisquer outros requisitos e até mesmo a vontade do pokémon.",
  },
  {
    nome: "Condensação",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Semanal. A cada 10 Níveis, receba um uso semanal adicional.",
    gatilho: null,
    alvo: "uma Pedra Elemental.",
    efeito:
      "a pedra ganha um segundo uso antes de ser destruída. Não é possível que a pedra ganhe um terceiro uso mediante este Talento.",
  },
  {
    nome: "Demolição",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma caverna.",
    efeito:
      "após três horas de trabalho no subsolo, você prepara uma detonação para uma área de até 30 metros. As criaturas a até 5 metros da área (mas não aquelas dentro da área) recebem o Golpe Explosão de Fogo. Role 1d10 para determinar os efeitos da detonação: 1 Desmoronamento: todos dentro da área são automaticamente acertados pelo Golpe Tumba de Pedra; 2 Impeditivo: se está abrindo um novo túnel, ele é parcialmente bloqueado por algo natural, como uma caverna de areia, uma fonte de água subterrânea, lava ou um pokémon; 3 Destruição Gratuita: quaisquer itens, fósseis ou pokémons são destruídos, mortos ou dispersos; 4 a 9 Demolição: há sucesso em demolir; 10 Descoberta: você encontra um sítio arqueológico, cujos detalhes ficam a cargo do Narrador.",
  },
  {
    nome: "Espeleologia",
    classe: "Petrologista",
    requisitos: "ter visitado três cavernas diferentes.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto no subsolo, você sabe se há outras saídas viáveis à superfície ou se há áreas instáveis geologicamente. Você também pode achar áreas que garantam +3 às rolagens de Arqueologia e Procurar Pedras.",
  },
  {
    nome: "Gneisse Arruinado",
    classe: "Petrologista",
    requisitos: "Cavar e Cavar.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma armadilha de fosso sua.",
    efeito:
      "após dez minutos modificando sua armadilha de fosso, você garante que a vítima que cair na armadilha sofra o Golpe Deslizamento de Rochas.",
  },
  {
    nome: "Poeira na Cara",
    classe: "Petrologista",
    requisitos: "Cavar e Cavar.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma armadilha de fosso sua.",
    efeito:
      "após dois minutos modificando sua armadilha de fosso, você garante que a vítima que cair na armadilha sofra o Golpe Ataque de Areia.",
  },
  {
    nome: "Reanimador",
    classe: "Petrologista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um fóssil sendo reanimado.",
    efeito:
      "após cinco horas de trabalho, você constrói um Reanimador de uso único. Você poderá fazer um teste de Reanimação adicionando +3 à rolagem. Reanimadores produzidos por este Talento não precisam de um laboratório especializado, mas precisarão de um suprimento de energia elétrica. Se o Reanimador não for usado dentro de 24 horas, ele não poderá mais ser usado.",
  },
  {
    nome: "Ressurreição",
    classe: "Petrologista",
    requisitos: "Reanimador.",
    frequencia: "Mensal.",
    gatilho: null,
    alvo: "um pokémon falecido nas últimas 24 horas.",
    efeito:
      "após cinco horas de trabalho, role 1d20 + MAE. Se o resultado for 21 ou mais, você cria um fóssil artificial a partir do cadáver do pokémon. O fóssil artificial age como um fóssil natural. Não é possível ter um Lendário como alvo deste Talento.",
  },
  {
    nome: "Soterramento",
    classe: "Petrologista",
    requisitos: "Cavar e Cavar.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma armadilha de fosso sua.",
    efeito:
      "após dez minutos modificando sua armadilha de fosso, você garante que a vítima que cair na armadilha sofra o Golpe Tumba de Areia. A menos que a vítima possua Deslocamento de Escavação, ela está Presa no buraco por 1d4 rodadas.",
  },
  {
    nome: "Classificação Infalível",
    classe: "Professor",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, você sabe qual Atributo é o maior e qual Atributo é o menor no alvo. Se o resultado for 21 ou mais, você sabe quais são os valores destes dois Atributos.",
  },
  {
    nome: "Enciclopédia +",
    classe: "Professor",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "diferente dos demais Jogadores, você pode conferir o Livro dos Pokémons irrestritamente como o Narrador, salvo que não acessa informações de Lendários. Este Talento substitui Enciclopédia.",
  },
  {
    nome: "Ânimo",
    classe: "Professor",
    requisitos: "Coordenação.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "pokémons aliados a até um número de metros igual a seu MAE.",
    efeito:
      "escolha um Atributo (salvo Saúde). Eleve uma Fase do Atributo selecionado dos alvos até o fim do encontro.",
  },
  {
    nome: "Autoconfiança",
    classe: "Professor",
    requisitos: "Ânimo.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "pokémons aliados a até um número de metros igual a seu MAE.",
    efeito:
      "escolha um Atributo (salvo Saúde). O Atributo de todos os alvos é aumentado por uma quantidade igual a seu MAE até o fim do encontro.",
  },
  {
    nome: "Aviso Crítico",
    classe: "Professor",
    requisitos: "Nível 10, Coordenação.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "aliados.",
    efeito:
      "durante a próxima rodada do encontro, todos os ataques (Golpes ou ataques de Armas) dos aliados obtêm Críticos em resultados de Acurácia de 16 a 20. Esta chance não pode ser melhorada além disso.",
  },
  {
    nome: "Desmoralização",
    classe: "Professor",
    requisitos: "Coordenação.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "pokémons inimigos a até um número de metros igual a seu MAE.",
    efeito:
      "escolha um Atributo (salvo Saúde). Os alvos perdem uma Fase do Atributo selecionado até o fim do encontro.",
  },
  {
    nome: "Eficiência",
    classe: "Professor",
    requisitos: "Nível 10, Coordenação.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "aliados.",
    efeito:
      "durante a próxima rodada do encontro, qualquer ação executada por um aliado que requeira uma rolagem de 1d20 adiciona seu MAE à rolagem. As exceções a este benefício são os Golpes que reduzem alvos a quantidades fixas de Pontos de Vida.",
  },
  {
    nome: "Lendo a Luta",
    classe: "Professor",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um humano.",
    efeito:
      "role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, o Narrador deve dizer seis espécies de pokémons, dentre as quais quatro são possuídas pelo alvo. Se o alvo possui menos que quatro pokémons, o Narrador dirá a você dois pokémons, ambos possuídos pelo alvo.",
  },
  {
    nome: "Linguista",
    classe: "Professor",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "escolha uma família de pokémons (o que inclui todas as espécies relacionadas por evolução entre si). Você pode falar os pokémons desta família e entendê-los. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos não se acumulam. Cada vez que ele é escolhido, ele é aplicado a uma família diferente.",
  },
  {
    nome: "Manobra Coordenada",
    classe: "Professor",
    requisitos: "Técnica Coordenada.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu teve sucesso em usar um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, um pokémon de um aliado pode executar instantaneamente um Golpe cuja Frequência é À Vontade ou Rodada Sim Rodada Não, mesmo se ele já usou um Golpe nesta rodada e mesmo se você já tiver dado uma Ação de Comando. Além disso, este pokémon poderá se deslocar, mesmo que já tenha se deslocado esta rodada. Você deve ter linha de visão ao pokémon que está se beneficiando deste Talento.",
  },
  {
    nome: "Sabotagem",
    classe: "Professor",
    requisitos: "Planejamento.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "os pokémons selvagens.",
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, desloque todos os pokémons selvagens um número de metros igual a seu MAE ou a seu MDE.",
  },
  {
    nome: "Técnica Coordenada",
    classe: "Professor",
    requisitos: "Coordenação.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu teve sucesso em usar um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, um pokémon de um aliado pode executar instantaneamente um Golpe cuja Frequência é À Vontade, mesmo se ele já usou um Golpe nesta rodada e mesmo se você já tiver dado uma Ação de Comando. Você deve ter linha de visão ao pokémon que está se beneficiando deste Talento.",
  },
  {
    nome: "Psicocinese",
    classe: "Psíquico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um objeto cujo peso máximo em quilos não exceda o quíntuplo do seu MAE que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você move o alvo sem tocá-lo um número máximo de metros igual ao dobro de seu MAE, mas não pode movê-lo para mais longe do que um número de metros igual ao triplo de seu MAE. Você sempre deve poder manter o alvo dentro de seu campo visual.",
  },
  {
    nome: "Telepatia",
    classe: "Psíquico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um humano ou um pokémon seu.",
    efeito:
      "você pode projetar seus pensamentos superficiais ao alvo. Se o alvo é um humano, você também pode ler os pensamentos superficiais dele. O uso deste Talento deixa resíduo psíquico.",
  },
  {
    nome: "Adaptação",
    classe: "Psíquico",
    requisitos: "Ataque Especial 15.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Adaptação. O uso deste Talento consome 8 Pontos de Vida.",
  },
  {
    nome: "Controlar Probabilidade",
    classe: "Psíquico",
    requisitos: "Ataque Especial 16.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma rolagem própria ou de um aliado.",
    efeito:
      "a rolagem é refeita. A cada vez que usar este Talento (mas não na primeira vez que usar este Talento a cada dia), o Narrador recebe um Ponto de Paradoxo. O Narrador pode a qualquer momento no futuro gastar um Ponto de Paradoxo para obrigar você a refazer uma rolagem, desde que não seja uma rolagem que você influenciou usando Controlar Probabilidade. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Extrassensorial",
    classe: "Psíquico",
    requisitos: "Ataque Especial 16.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Extrassensorial. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Gravidade",
    classe: "Psíquico",
    requisitos: "Sala de Truques.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Gravidade. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Mentalismo",
    classe: "Psíquico",
    requisitos: "Ataque Especial 16.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você pode identificar se a mente do alvo foi afetada ou invadida por algum humano ou algum pokémon, e pode encontrar resíduos dentro dela. Além disso, quando usar um Talento que deixa resíduo psíquico, você pode rolar 1d20 + MAE. Se o resultado for 16 ou mais, você não deixa resíduo.",
  },
  {
    nome: "Paranormal",
    classe: "Psíquico",
    requisitos: "Ataque Especial 16.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Paranormal. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Refletor",
    classe: "Psíquico",
    requisitos: "um pokémon que conhece o Golpe Refletor.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Refletor. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Sala de Truques",
    classe: "Psíquico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Sala de Truques. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Sala Mágica",
    classe: "Psíquico",
    requisitos: "Sala de Truques.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Sala Mágica. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Tela de Luz",
    classe: "Psíquico",
    requisitos:
      "Ataque Especial 15, um pokémon que conhece o Golpe Tela de Luz.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Tela de Luz. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Teletransporte",
    classe: "Psíquico",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "Si.",
    efeito:
      "você usa o Golpe Teletransporte. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Controle de Fogo",
    classe: "Ardente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode redirecionar chamas que não estejam mais distante que um número de metros igual ao quíntuplo de seu MAE. Você também pode usar este Talento tendo como alvo o próprio ar para produzir fogo. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe.",
  },
  {
    nome: "Controle de Luz",
    classe: "Ardente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode gerar iluminação a partir do próprio ar ou pode remover a iluminação presente em uma área. Você controla quão clara ou escura está toda a área a até um número de metros ao seu redor igual ao quíntuplo de seu MAE. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe.",
  },
  {
    nome: "Bruma de Lava",
    classe: "Ardente",
    requisitos: "dois pokémons de Fogo.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Bruma de Lava. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Clarão",
    classe: "Ardente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Clarão. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Dia de Sol",
    classe: "Ardente",
    requisitos:
      "quatro Talentos de Ardente (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Dia de Sol. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Esfera de Sombras",
    classe: "Ardente",
    requisitos: "dois pokémons Fantasmas ou de Trevas.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Esfera de Sombras. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Espiral de Fogo",
    classe: "Ardente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Espiral de Fogo. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Explosão de Fogo",
    classe: "Ardente",
    requisitos: "Nível 15, Bruma de Lava.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Explosão de Fogo. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Invisibilidade",
    classe: "Ardente",
    requisitos: "um pokémon com a CapacidadeInvisibilidade.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você ganha a Capacidade Invisibilidade, mas ativar esta Capacidade requer o consumo de 15 Pontos de Vida. Não é possível usar Talentos que causem dano enquanto invisível (seja mediante um Golpe ou diretamente).",
  },
  {
    nome: "Miragem",
    classe: "Ardente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você cria uma ilusão visual. Você deve permanecer a até 10 metros de Miragem e se concentrar para manter e controlar a ilusão. Em nenhuma dimensão (comprimento, largura e altura), a ilusão deve exceder um número de metros igual a seu MAE, e a ilusão dura um número de minutos igual a seu MAE. Você só pode possuir uma ilusão de cada vez. O uso deste Talento consome 20 Pontos de Vida, mas você pode pagar o custo novamente para manter uma ilusão criada por igual período de tempo.",
  },
  {
    nome: "Multiplicar",
    classe: "Ardente",
    requisitos: "um pokémon que conhece o Golpe Multiplicar.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Multiplicar. Você não pode possuir mais do que três cópias simultâneas de você. Cada cópia dura dez minutos. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Ofuscação",
    classe: "Ardente",
    requisitos: "Nível 10, Esfera de Sombras.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Ofuscação. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Sudário Cintilante",
    classe: "Ardente",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um Golpe usado mediante um Talento de Ardente modificar a Dificuldade de Acurácia, ele altera a Dificuldade em 1 a mais do que alteraria normalmente.",
  },
  {
    nome: "Visão no Escuro",
    classe: "Ardente",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode enxergar o espectro infravermelho, permitindo rapidamente enxergar fontes de calor.",
  },
  {
    nome: "Ofuscar",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Ofuscar. Isso deixa resíduo psíquico no alvo. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Sugestão",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MAE. Se o resultado for 20 ou mais, você pode implantar na mente do alvo uma sugestão. Não há garantia de que ele agirá de modo a seguir a sugestão, mas ele pensa nela como genuinamente dele, apesar de poder refletir sobre a razão pela qual pensou naquilo.",
  },
  {
    nome: "Choro",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Choro. O uso deste Talento consome 8 Pontos de Vida.",
  },
  {
    nome: "Dança das Penas",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Dança das Penas. O uso deste Talento consome 8 Pontos de Vida.",
  },
  {
    nome: "Devorar Sonhos",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon dormindo ou um humano dormindo.",
    efeito:
      "você usa o Golpe Devorar Sonhos. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Domínio",
    classe: "Bruxo",
    requisitos: "Nível 18, Ataque Especial 26, Encantamento.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você controla completamente o alvo. Você sabe qualquer informação que ele saiba e pode comandá-lo para fazer qualquer coisa que ele pode fazer. Isso deixa resíduo psíquico no alvo. Uma vez por rodada, como uma Ação Livre, um alvo pode tentar se libertar do Domínio, fazendo uma rolagem de 1d20 + MAE. Se o resultado for maior que a diferença entre o Ataque Especial do Bruxo e o Ataque Especial do alvo, ele se liberta e não pode ser alvo deste Talento de novo pelo mesmo Bruxo por 48 horas. O uso deste Talento consome 25 Pontos de Vida por rodada (ou seja, a cada 6 segundos). A partir da sexta rodada seguida que usar este Talento (ou seja, quando ultrapassar 30 segundos), o custo aumenta para 40 Pontos de Vida por rodada. Se o alvo se libertar, o Bruxo não precisa pagar o custo naquela rodada.",
  },
  {
    nome: "Encantamento",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, o alvo agirá conforme a sugestão que você determinar. Se a sugestão é completamente contraditória ao comportamento regular do alvo, ele hesitará claramente durante todo o processo, mas ainda cumprirá o Encantamento. Se é impossível executar a sugestão, o alvo falhará tentando. Isso deixa resíduo psíquico no alvo. Durante o cumprimento da sugestão, o alvo terá direito a um único teste para tentar evitar a execução da sugestão, fazendo uma rolagem de 1d20 + MAE. Se o resul- tado dele for 17 ou mais, ele se liberta do Encantamento. O uso deste Talento consome 35 Pontos de Vida.",
  },
  {
    nome: "Feitiço",
    classe: "Bruxo",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Feitiço. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Fogo-Fátuo",
    classe: "Bruxo",
    requisitos:
      "seis Talentos de Bruxo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Fogo-Fátuo. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Gás Venenoso",
    classe: "Bruxo",
    requisitos:
      "três Talentos de Bruxo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Gás Venenoso. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Hipnose",
    classe: "Bruxo",
    requisitos:
      "três Talentos de Bruxo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Hipnose. O uso deste Talento consome 30 Pontos de Vida.",
  },
  {
    nome: "Inaptidão",
    classe: "Bruxo",
    requisitos:
      "quatro Talentos de Bruxo (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma rolagem em que houve sucesso.",
    efeito:
      "a rolagem é refeita. A cada vez que usar este Talento (mas não na primeira vez que usar este Talento a cada dia), o Narrador recebe um Ponto de Paradoxo. O Narrador pode a qualquer momento no futuro gastar um Ponto de Paradoxo para obrigar você a refazer uma rolagem, desde que não seja uma rolagem que você influenciou usando Controlar Probabilidade. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Maldição",
    classe: "Bruxo",
    requisitos: "um pokémon que conhece Maldição.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Maldição como se fosse do Tipo Fantasma. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Raio de Confusão",
    classe: "Bruxo",
    requisitos: "um pokémon que conhece Raio de Confusão.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Raio de Confusão. Isso deixa resíduo psíquico no alvo. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Controle de Ar",
    classe: "Célio",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma massa de ar que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você pode mover a massa de ar usando a força da mente para produzir um fluxo de vento que pode alcançar uma velocidade máxima em km/h igual ao quíntuplo de seu MAE em qualquer direção. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe.",
  },
  {
    nome: "Controle de Eletricidade",
    classe: "Célio",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode redirecionar eletricidade que não esteja mais distante que um número de metros igual ao quíntuplo de seu MAE. Você também pode usar este Talento para produzir eletricidade a partir do próprio ar. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe.",
  },
  {
    nome: "Aerodinâmico",
    classe: "Célio",
    requisitos: "Desanuviar, um pokémon com Velocidade 20.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto o clima estiver ameno, você é tratado como se sua Velocidade fosse igual a 1 + o humano que antecederia você na ordem de iniciativa, mas apenas para fins de determinar a Iniciativa.",
  },
  {
    nome: "Carga",
    classe: "Célio",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você usa o Golpe Carga. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Cauda de Vento",
    classe: "Célio",
    requisitos: "dois Talentos que concedem usos de Golpes Voadores.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "área.",
    efeito:
      "você usa o Golpe Cauda de Vento. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Corte Aéreo",
    classe: "Célio",
    requisitos: "dois pokémons Voadores.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Corte Aéreo. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Desanuviar",
    classe: "Célio",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Desanuviar. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Descarga",
    classe: "Célio",
    requisitos: "dois pokémons Elétricos.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Descarga. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Furacão",
    classe: "Célio",
    requisitos: "Nível 15, Corte Aéreo.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Furacão. O uso deste Talento consome 30 Pontos de Vida.",
  },
  {
    nome: "Levitação",
    classe: "Célio",
    requisitos: "Voo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um número de voluntários (pokémons e/ou humanos) igual a seu MAE. Nenhum alvo pode ser mais pesado que você.",
    efeito:
      "enquanto você está usando Voo, você pode reduzir a quantidade de seu Deslocamento de Voo pela metade para levitar alvos voluntários. O uso deste Talento consome 5 Pontos de Vida por rodada.",
  },
  {
    nome: "Onda Trovão",
    classe: "Célio",
    requisitos: "dois Talentos que concedem usos de Golpes Elétricos.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Onda Trovão. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Relâmpago",
    classe: "Célio",
    requisitos: "Nível 10, Descarga.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Relâmpago. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Voo",
    classe: "Célio",
    requisitos: "um pokémon com Deslocamento de Voo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você recebe Deslocamento de Voo igual a seu MAE. O uso deste Talento em combate consome 2 Pontos de Vida por rodada. O uso deste Talento fora de combate consome 5 Pontos de Vida por minuto.",
  },
  {
    nome: "Cura Menor",
    classe: "Empático",
    requisitos: null,
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você cura o alvo em uma quantidade de Pontos de Vida igual a 1d12 +6 + o dobro de seu MAE. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Vibração Calmante",
    classe: "Empático",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você restaura Confusão. Esta Característica de Classe acalma em geral o alvo, o que cura fúria, uma mente distorcida e neutraliza paranoia e pânico. Isso deixa resíduo psíquico no alvo. O uso deste Talento consome 7 Pontos de Vida. Além disso, você precisa estar em um estado mental calmo para usá-lo.",
  },
  {
    nome: "As Profundezas da Alma",
    classe: "Empático",
    requisitos: "As Profundezas da Mente.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você pode projetar seus pensamentos superficiais ao alvo e pode ler os pensamentos superficiais dele, bem como ler os pensamentos e as memórias dele desde o dia anterior no passado. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "As Profundezas da Mente",
    classe: "Empático",
    requisitos: "Psíquico, Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Telepatia, você pode ler os pensamentos e as memórias de alguém desde a última hora no passado. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Compartilhar Sofrimento",
    classe: "Empático",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "um pokémon ou um humano sofre dano.",
    alvo: null,
    efeito:
      "você sofre metade do dano que o alvo sofreria no lugar dele. O uso deste Talento consome 5 Pontos de Vida, mas não no primeiro uso dele em um dia.",
  },
  {
    nome: "Conexão",
    classe: "Empático",
    requisitos:
      "quatro pokémons seus já subiram pelo menos 15 Níveis com você.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons.",
    efeito: "você entende os pensamentos dos seus pokémons.",
  },
  {
    nome: "Conexão +",
    classe: "Empático",
    requisitos: "Conexão, Ataque Especial 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "pokémons.",
    efeito:
      "você entende os pensamentos dos pokémons. Este Talento substitui Conexão.",
  },
  {
    nome: "Cura Maior",
    classe: "Empático",
    requisitos: "Cura Média, Ataque Especial 18.",
    frequencia: "Diária. A cada 12 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você cura o alvo em uma quantidade de Pontos de Vida igual a 3d12 +18 + o dobro de seu MAE. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Cura Máxima",
    classe: "Empático",
    requisitos: "Cura Maior, Ataque Especial 20.",
    frequencia: "Diária. A cada 12 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você cura o alvo em uma quantidade de Pontos de Vida igual a 4d12 +24 + o dobro de seu MAE. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Cura Média",
    classe: "Empático",
    requisitos: null,
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você cura o alvo em uma quantidade de Pontos de Vida igual a 2d12 +12 + o dobro de seu MAE. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Desejo",
    classe: "Empático",
    requisitos: "Cura Maior.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Desejo. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Repouso",
    classe: "Empático",
    requisitos: "um pokémon com um Golpe que recupera Pontos de Vida.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "si.",
    efeito: "após dez minutos, recupere todos os seus Pontos de Vida.",
  },
  {
    nome: "Sofrimento Mútuo",
    classe: "Empático",
    requisitos: "Ataque Especial 16, Compartilhar Sofrimento.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Sofrimento Mútuo. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Tratar a Alma",
    classe: "Empático",
    requisitos:
      "Ataque Especial 16, ter curado Paralisia e/ou Sono três vezes usando itens ou Talentos.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você restaura Paralisia e Sono. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Tratar o Corpo",
    classe: "Empático",
    requisitos:
      "Ataque Especial 16, ter curado Queimadura e/ou Veneno três vezes usando itens ou Talentos.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você restaura Queimadura e Veneno. Isso deixa resíduo psíquico no alvo.",
  },
  {
    nome: "Vínculo",
    classe: "Empático",
    requisitos: "Conexão.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você está inconsciente, seus pokémons podem agir como se você não estivesse inconsciente.",
  },
  {
    nome: "Controle de Água",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma quantidade de líquido cujo peso máximo em quilos não exceda dez vezes seu MAE que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você move o alvo sem tocá-lo um número máximo de metros igual ao dobro de seu MAE, mas não pode movê-lo para mais longe do que um número de metros igual ao triplo de seu MAE. Você sempre deve poder manter o alvo dentro de seu campo visual, a menos que possua o Talento Psicocinese +. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe. Você também pode usar este Talento para produzir água a partir do próprio ar.",
  },
  {
    nome: "Controle de Gelo",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma porção de gelo cujo peso máximo em quilos não exceda dez vezes seu MAE que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você move o alvo sem tocá-lo um número máximo de metros igual ao dobro de seu MAE, mas não pode movê-lo para mais longe do que um número de metros igual ao triplo de seu MAE. Você sempre deve poder manter o alvo dentro de seu campo visual, a menos que possua o Talento Psicocinese +. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe. Você também pode usar este Talento para congelar água instantaneamente. Finalmente, como um benefício constante, enquanto você estiver consciente, nem você nem humanos aliados a até 10 metros de você sofrem dano por Granizo.",
  },
  {
    nome: "Ambiente Aquoso",
    classe: "Nebuloso",
    requisitos: "Dança da Chuva ou Granizo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "se o clima estiver de Chuva ou Granizo, ou se você estiver próximo a um grande corpo de água (a partir do tamanho de um lago) com profundidade suficiente para um pokémon de tamanho Pequeno submergir, você pode fazer seus Golpes de Água ou de Gelo se originarem da água natural presente nas redondezas.",
  },
  {
    nome: "Cascata",
    classe: "Nebuloso",
    requisitos: "dois pokémons de Água.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Cascata. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Dança da Chuva",
    classe: "Nebuloso",
    requisitos:
      "cinco Talentos de Nebuloso (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Dança da Chuva. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Estabilizar a Superfície",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "receba a Capacidade Geleira. Além disso, você pode andar sobre a água, seja água parada ou corrente.",
  },
  {
    nome: "Estaca de Gelo",
    classe: "Nebuloso",
    requisitos: "dois pokémon de Gelo.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Estaca de Gelo. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Granizo",
    classe: "Nebuloso",
    requisitos:
      "cinco Talentos de Nebuloso (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Granizo. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Nadador",
    classe: "Nebuloso",
    requisitos: "um pokémon com Deslocamento de Natação e Subaquático.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione seu MAE aos seus Deslocamentos de Natação e Subaquático. Além disso, durante um número de minutos igual a seu Ataque Especial distribuídos a cada hora, você pode respirar embaixo d’água.",
  },
  {
    nome: "Neblina",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Neblina. O uso deste Talento consome 8 Pontos de Vida.",
  },
  {
    nome: "Nevasca",
    classe: "Nebuloso",
    requisitos: "Nível 15, Estaca de Gelo.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Nevasca. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Nevoeiro",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "Frequência: À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Nevoeiro. O uso deste Talento consome 8 Pontos de Vida.",
  },
  {
    nome: "Redemoinho",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Redemoinho. O uso deste Talento consome 7 Pontos de Vida.",
  },
  {
    nome: "Respingos",
    classe: "Nebuloso",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: "você usa um Golpe de Água ou de Gelo.",
    alvo: null,
    efeito:
      "o Golpe acerta um alvo adicional. Se ele tinha apenas um alvo, ele acerta outro adjacente ao original. Se o Golpe já atingia uma área, escolha um alvo adjacente à área de efeito. Só é possível adicionar um alvo por Golpe usando Respingos. O uso deste Talento consome 10 Pontos de Vida. Esta quantidade é reduzida para 5 se estiver usando um Golpe de Água durante Chuva ou se estiver usando um Golpe de Gelo durante Granizo.",
  },
  {
    nome: "Surfe",
    classe: "Nebuloso",
    requisitos: "Nível 10, Cascata.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Surfe. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Controle de Plantas",
    classe: "Terrulento",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma planta cujo peso máximo em quilos não exceda dez vezes seu MAE que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você move o alvo sem tocá-lo um número máximo de metros igual ao dobro de seu MAE, mas não pode movê-lo para mais longe do que um número de metros igual ao triplo de seu MAE. Você sempre deve poder manter o alvo dentro de seu campo visual, a menos que possua o Talento Psicocinese +. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe. Além disso, você pode fazer plantas crescerem instantaneamente em até 45 centímetros por rodada, mas isso consome 10 Pontos de Vida seus.",
  },
  {
    nome: "Controle de Terra",
    classe: "Terrulento",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "uma porção de areia, de solo ou de rocha cujo peso máximo em quilos não exceda dez vezes seu MAE que não esteja mais distante que um número de metros igual ao triplo de seu MAE.",
    efeito:
      "você move o alvo sem tocá-lo um número máximo de metros igual ao dobro de seu MAE, mas não pode movê-lo para mais longe do que um número de metros igual ao triplo de seu MAE. Você sempre deve poder manter o alvo dentro de seu campo visual, a menos que possua o Talento Psicocinese +. Seu MAE nunca pode ser reduzido abaixo de 1 para esta Característica de Classe. Você também pode usar este Talento para, se o alvo for rochoso ou de outra forma rígido, quebrá-lo da forma que preferir ou até pulverizá-lo em grãos de areia. Finalmente, como um benefício constante, enquanto você estiver consciente, nem você nem humanos aliados a até 10 metros de você sofrem dano por Tempestade de Areia.",
  },
  {
    nome: "Aromaterapia",
    classe: "Terrulento",
    requisitos: "dois Talentos que concedem usos de Golpes de Planta.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Aromaterapia. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Ataque de Areia",
    classe: "Terrulento",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Ataque de Areia. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Deslizamento de Rochas",
    classe: "Terrulento",
    requisitos: "dois pokémons de Pedra.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Deslizamento de Rochas. O uso deste Talento consome 10 Pontos de Vida.",
  },
  {
    nome: "Escavação",
    classe: "Terrulento",
    requisitos: "um pokémon com um Deslocamento de Escavação.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você recebe Deslocamento de Escavação igual a seu MAE. O uso deste Talento em combate consome 2 Pontos de Vida por rodada. O uso deste Talento fora de combate consome 5 Pontos de Vida por minuto.",
  },
  {
    nome: "Esporos de Algodão",
    classe: "Terrulento",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "você usa o Golpe Esporos de Algodão. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Tumba de Areia",
    classe: "Terrulento",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Tumba de Areia. O uso deste Talento consome 7 Pontos de Vida.",
  },
  {
    nome: "Gigadreno",
    classe: "Terrulento",
    requisitos: "dois pokémons de Planta.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Gigadreno. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Materialização",
    classe: "Terrulento",
    requisitos: "um pokémon com Materialização.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você recebe a Capacidade Materialização.",
  },
  {
    nome: "Obelisco",
    classe: "Terrulento",
    requisitos: "Nível 10, Deslizamento de Rochas.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Obelisco. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Tempestade de Areia",
    classe: "Terrulento",
    requisitos:
      "cinco Talentos de Terrulento (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "você usa o Golpe Tempestade de Areia. O uso deste Talento consome 20 Pontos de Vida.",
  },
  {
    nome: "Tempestade de Folhas",
    classe: "Terrulento",
    requisitos: "Nível 15, Gigadreno.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Tempestade de Folhas. O uso deste Talento consome 25 Pontos de Vida.",
  },
  {
    nome: "Transparência",
    classe: "Terrulento",
    requisitos: "Nível 10, Materialização.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode enxergar através de areia, terra, solo e rochas como se não estivessem lá. O alcance máximo deste poder é de um número de metros igual ao triplo de seu MAE.",
  },
  {
    nome: "Passado Recente",
    classe: "Vidente",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "o local onde você se encontra ou um objeto.",
    efeito:
      "você pode ver o sumário psíquico do que aconteceu com o item ou na área desde a última hora. Infelizmente, as informações recebidas são misturadas e podem não seguir uma ordem cronológica. O uso deste Talento consome 5 Pontos de Vida.",
  },
  {
    nome: "Tecer Imagem",
    classe: "Vidente",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma imagem vista enquanto você lia o passado de um objeto.",
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, você pode seguir uma parte do passado do objeto na forma de uma imagem fantasmagórica retirada das visões originais e manifesta no mundo real, mas vista apenas por você. A imagem pode ser de qualquer coisa – uma pessoa, uma pokémon ou outro objeto – que entrou em contato com o objeto cujo passado você estava lendo. Se a imagem fantasmagórica se deslocar para mais longe do que 1,6 quilômetro do local onde ela apareceu, ela é dissipada.",
  },
  {
    nome: "Buscador de Almas",
    classe: "Vidente",
    requisitos: "Buscador de Formas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma pessoa que você já conheceu",
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, você sabe a direção dela.",
  },
  {
    nome: "Buscador de Almas +",
    classe: "Vidente",
    requisitos: "Buscador de Almas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma pessoa que você já conheceu",
    efeito:
      "role 1d20 + MAE. Se o resultado for 16 ou mais, você sabe a direção dela e a distância aproximada até ela. Este Talento substitui Buscador de Almas.",
  },
  {
    nome: "Buscador de Formas",
    classe: "Vidente",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "o local onde você está.",
    efeito:
      "escolha um objeto que serve como foco de concentração para você. Concentrando-se nele, você pode fazer uma rolagem de 1d20 + MAE. Se o resultado for 21 ou mais, você será guiado ao tesouro (um item de qualquer categoria) mais próximo, que depende do local onde você está.",
  },
  {
    nome: "Clariaudiência",
    classe: "Vidente",
    requisitos: "Ataque Especial 17.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa Passado Recente, Passado ou Passado +, você também ouve os sons ocorridos. Você sabe automaticamente se alguém está deliberadamente mentindo para você.",
  },
  {
    nome: "Clarividência",
    classe: "Vidente",
    requisitos: "Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "receba +3 a todas as rolagens envolvidas com fazer um ataque. Você pode ver através de ilusões. Uma ilusão é qualquer habilidade que permite criar imagens visuais que não existem, incluindo Golpes como Multiplicar.",
  },
  {
    nome: "Dissipar Ilusão",
    classe: "Vidente",
    requisitos: "Clariaudiência, Clarividência.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma ilusão.",
    efeito:
      "você elimina a ilusão automaticamente tocando a área onde ela está projetada. Como um benefício constante, você pode ver através de disfarces mundanos e através de ilusões.(além de ver através de ilusórios, como concedido por Clarividência). Um exemplo de um disfarce mundano é uma mudança de forma real, que esconde a verdadeira identidade de alguém, incluindo a transformação de um Ditto.",
  },
  {
    nome: "Passado",
    classe: "Vidente",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "o local onde você se encontra ou um objeto.",
    efeito:
      "você pode ver o sumário psíquico do que aconteceu com o item ou na área desde o dia anterior. Infelizmente, as informações recebidas são misturadas e podem não seguir uma ordem cronológica. O uso deste Talento consome 15 Pontos de Vida.",
  },
  {
    nome: "Passado +",
    classe: "Vidente",
    requisitos: "Passado, Ataque Especial 19.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "o local onde você se encontra ou um objeto.",
    efeito:
      "você pode ver o sumário psíquico do que aconteceu com o item ou na área desde a semana anterior. Infelizmente, as informações recebidas são misturadas e podem não seguir uma ordem cronológica. Se o item ou o local tiverem importância histórica dentro da última década, você sabe disso, mas não recebe informações exatas são o ocorrido para que seja importante. O uso deste Talento consome 24 Pontos de Vida.",
  },
  {
    nome: "Psicometria",
    classe: "Vidente",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "escolha um objeto que serve como foco de concentração para você. Concentrando-se nele, você sabe o propósito de qualquer objeto que você tocar. Você sabe exatamente todas as propriedades especiais do item e como ativar o objeto.",
  },
  {
    nome: "Contenção",
    classe: "Ranger",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "Usando seu próprio Estilizador, um Ranger pode fazer um teste de Contenção, para o qual ele rola 1d100 -20. Se o resultado for igual ou inferior à Chance de Captura do pokémon alvo, este se torna Prestativo (como pelas regras descritas na Capacidade Hierarquia). Um pokémon selvagem deixa de ser Prestativo se acontecer uma das seguintes coisas: se for retirado de seu ambiente padrão, se for acertado por um ataque, se for fortemente distraído, se ajudar o Ranger de alguma forma significativa (incluindo atacar). Um pokémon de alguém deixa de ser Prestativo se atacar com sucesso, se for convocado de volta para a pokébola. Se ele possuir Lealdade 2 ou mais, ele também deixa de ser Prestativo se for o Ranger tentar forçá-lo a atacar o dono ou qualquer aliado do dono. O Ranger não pode possuir mais de um pokémon Prestativo mediante este Talento. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Parceria",
    classe: "Ranger",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon Prestativo que é selvagem.",
    efeito:
      "O alvo perde a Condição Prestativo e passa a ser considerado Parceiro. O Parceiro começa com Lealdade 2 e será obediente e amistoso ao Ranger, independente de quaisquer condições que antecediam à Parceria. Ele ganha pontos de experiência e Níveis exatamente da mesma maneira que qualquer pokémon capturado, e conta como um pokémon possuído para quaisquer finalidades, mesmo que nunca tenha sido colocado dentro de uma pokébola. Um Parceiro não pode participar de Concursos, pois seria fraude. Você não pode possuir mais de um Parceiro. Apesar de não ter sido exatamente capturado, o Parceiro agirá em combate conforme as ordens do Ranger, como se fosse dele.",
  },
  {
    nome: "Ajuda",
    classe: "Ranger",
    requisitos:
      "Nível 10, uma das Classes a seguir: Aventureiro, Cavaleiro, Detetive, Espião, Guia, Oficial, Pactuário.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon Parceiro ou Prestativo.",
    efeito:
      "por um número de rodadas igual à metade de seu MA ou de seu MV, o alvo age de maneira independente em combate. Como Prestativo ou Parceiro, ele agirá nos melhores interesses do Ranger, mas não segue as ordens do Ranger. Ele não foge ou recua enquanto este Talento durar. O Ranger não pode possuir mais de um pokémon sob os efeitos deste Talento. Este Talento não pode ser usado se o Talento Você Isso e Você Aquilo! estiver em uso.",
  },
  {
    nome: "Ambientalista",
    classe: "Ranger",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você tem sucesso em usar Contenção em um pokémon selvagem.",
    alvo: null,
    efeito:
      "o pokémon selvagem tem sucesso automático em fugir. Role 1d20 + MA + MV. Se o resultado for 20 ou mais, todos os pokémons selvagens aliados do pokémon selvagem original e de Nível menor que ele também tem sucesso automático em fugir.",
  },
  {
    nome: "Amigos",
    classe: "Ranger",
    requisitos:
      "ter usado Contenção em um pokémon com a Capacidade de Escolha.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local.",
    efeito:
      "Ao usar este Talento, role 1d20 + MA ou MV. Se o resultado for 15 ou mais, um pokémon com a Capacidade de Escolha aparece. Qualquer tentativa de atacar ou capturar este pokémon o faz ter sucesso automático em fugir. Quando obtiver este Talento, você deve selecionar uma Capacidade da lista a seguir: Afundamento, Amorfia, Calor, Combustão, Congelação, Encolhimento, Fiação, Frio, Geleira, Guelras, Luminar, Magnetismo, Manancial, Rebento, Sedução, Térreo, Tumefação, Vento. A Capacidade é selecionada não pode ser alterada. Ela é chamada de Capacidade de Escolha. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos não se acumulam. A cada vez que é escolhido, ele se aplica a uma Capacidade diferente.",
  },
  {
    nome: "Arma de Choque",
    classe: "Ranger",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 1d20 + MV. Se o resultado for 15 ou mais, o alvo está Confuso. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Autoridade",
    classe: "Ranger",
    requisitos: "reconhecido pela execução de um serviço distintivo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você assume as responsabilidades como um Ranger de alta patente. Você pode dar ordens a Rangers sem este Talento e possui maior poder decisório e encontros com outros indivíduos de alta patente governamental, particularmente policial e militar. Quando requisitar auxílio de uma Estação Ranger em um assunto importante, ela é obrigada a dar algum tipo de auxílio, salvo nas circunstâncias mais extraordinárias. Se você é Policial, este Talento também se aplica a Policiais e Postos Policiais.",
  },
  {
    nome: "Contenção Aprimorada",
    classe: "Ranger",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Contenção, o teste é feito usando 1d100 -30 (em vez de apenas -20). Você agora pode possuir dois pokémons Prestativos mediante Contenção.",
  },
  {
    nome: "Contenção Aprimorada +",
    classe: "Ranger",
    requisitos: "Contenção Aprimorada.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Contenção, o teste é feito usando 1d100 -40 (em vez de apenas -30). Você agora pode possuir cinco pokémons Prestativos mediante Contenção. Este Talento substitui Contenção Aprimorada.",
  },
  {
    nome: "Prática Perfeita",
    classe: "Ranger",
    requisitos: "Velocidade 15.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma rolagem de Contenção.",
    efeito:
      "subtraia o triplo de seu MA ou o triplo de seu MV da rolagem de Contenção. Este Talento só pode ser usado uma vez por rolagem de Contenção. Se tiver sucesso em usar Contenção aplicando este Talento, você recebe uma lista parcial dos Golpes conhecidos pelo pokémon e sabe todas as Capacidades dele.",
  },
  {
    nome: "Recursos",
    classe: "Ranger",
    requisitos: "Autoridade.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você convoca apoio de pelo menos um Ranger na área. Este Ranger irá até você diretamente para encontrá-lo pessoalmente assim que possível e auxiliará você em assuntos urgentes, mas não abandonará completamente as atividades dele a menos que ordenado por uma Autoridade superior (um Oficial).",
  },
  {
    nome: "Santuário",
    classe: "Ranger",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MA + MV. Se o resultado for 21 ou mais, você pode atravessar o local alvo sem encontros hostis de quaisquer pokémons selvagens normais. Isso dura para o local alvo por um dia.",
  },
  {
    nome: "Time de Resgate",
    classe: "Ranger",
    requisitos: "ter um Parceiro consigo há pelo menos dois meses.",
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: "um Parceiro que está com você há pelo menos um mês.",
    efeito:
      "você passa uma hora conversando e negociando com o alvo. Depois disso, ele concorda em ser capturado por você. Após capturá-lo, ele ainda será considerado seu Parceiro para fins de quaisquer Talentos, mas não conta para seu número máximo de Parceiros.",
  },
  {
    nome: "Caça e Coleta",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MV. Se o resultado for 13 ou mais, você acha água e comida suficientes para até sete criaturas (humanos ou pokémons).",
  },
  {
    nome: "Sentidos Aguçados",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sempre sabe as seguintes informações: para qual lado fica o norte, a hora estimada e como será o clima do dia.",
  },
  {
    nome: "Arquearia",
    classe: "Aventureiro",
    requisitos: "Nível 10, Arma de Escolha para uma arma À Distância.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "os alvos dos seus ataques de Armas feitos com armas À Distância não se beneficiam de Evasão por Velocidade nem por terreno ou clima. Eles também não se beneficiam por Golpes que dificultam o seu Teste de Acurácia para atacá-los. Seus ataques de Armas feitos com armas À Distância possuem alcance adicional igual à metade da sua Velocidade e causam dano adicional igual à metade da sua Velocidade. Isso só é válido se você não pertence a nenhuma das seguintes Classes: Artista Marcial, Atleta, Áugure, Bandido, Guerreiro, Monge, Ninja ou Soldado.",
  },
  {
    nome: "Chuva Ácida",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "um pokémon usa um Golpe com o Descritor Clima.",
    alvo: null,
    efeito:
      "em vez de substituir o Clima que estava em vigência anteriormente, os efeitos do Clima designado pelo novo Golpe se somam ao Clima anterior, coexistindo simultaneamente. No máximo dois Climas podem coexistir.",
  },
  {
    nome: "De Olho no Céu",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "há um efeito climático vigente.",
    alvo: null,
    efeito:
      "role 1d20 + MV. Se o resultado for 11, você recebe a Habilidade Carapaça. Se o resultado for 16 ou mais, todos os seus pokémons também ganham Carapaça. Se o resultado for 25 ou mais, todos os seus aliados humanos e pokémons também ganham Carapaça. Se o clima mudar ou se Chuva Ácida for usada, os efeitos deste Talento acabam até que você gaste uma Ação Padrão readaptando seu refúgio, mas não é preciso gastar um novo uso do Talento se for durante o mesmo encontro.",
  },
  {
    nome: "É o Fim!",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você declara um ataque de Armas com uma arma À Distância.",
    alvo: null,
    efeito:
      "se você acertar o ataque, o alvo está Paralisado. Se você obtiver mais do que 15 no Teste de Acurácia, ele também está Atordoado.",
  },
  {
    nome: "Escalada",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você não precisa fazer testes enquanto se deslocar através de Terreno Acidentado nem sofre penalidades aos seus Deslocamentos por Terreno Acidentado. Além disso, você nunca precisa fazer testes para escalar: você pode escalar usando seu Deslocamento Terrestre reduzido em 3.",
  },
  {
    nome: "Intuição",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MV. Se o resultado for 18 ou mais, designe um dos seguintes Golpes: Dança da Chuva, Desanuviar, Dia de Sol, Granizo, Tempestade de Areia. Você localiza um pokémon que conhece o Golpe escolhido. Qualquer tentativa de atacar ou capturar este pokémon o faz ter sucesso automático em fugir.",
  },
  {
    nome: "Natureza Amiga",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você descansa em ambiente selvagem por pelo menos 8 horas, você acorda com todos os seus Pontos de Vida recuperados e é curado de quaisquer Condições. As únicas coisas que não serão recuperadas são doenças, fraturas ósseas e feridas abertas.",
  },
  {
    nome: "Pacifismo",
    classe: "Aventureiro",
    requisitos: "Ranger, Velocidade 16.",
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma rolagem de Contenção.",
    efeito:
      "você se compromete a não usar o pokémon a se tornar Prestativo para atacar. Isso reduz em 15 a dificuldade do Teste de Contenção.",
  },
  {
    nome: "Sobrevivente",
    classe: "Aventureiro",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "qualquer material (como madeiro, plástico, osso, etc.).",
    efeito:
      "role 1d20 + MA + MV. Se o resultado for 18 ou mais e você possui uma faca, você cria uma ferramenta não tecnológica. Você é um mestre da inventividade e pode criar soluções engenhosas para resolver seus problemas. Alternativamente, você pode produzir um abrigo secreto para até cinco criaturas (humanos ou pokémons) que durará por um número de dias igual a seu MV. É possível produzir mais de um abrigo próximo um ao outro, mas, neste caso, eles não poderão ser secretos, serão expostos.",
  },
  {
    nome: "Aderência",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você obtém sucesso automático em testes feitos para permanecer montado. Você pode continuar montado mesmo que esteja agarrado na lateral da sua montaria, de cabeça para baixo, fazendo pirueta ou de qualquer outra forma estranha de se ficar em cima da montaria. Em todos estes casos, você é considerado cavalgando normalmente.",
  },
  {
    nome: "Montaria de Guerra",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "você é acertado por um ataque enquanto montado.",
    alvo: null,
    efeito:
      "sua montaria é acertada pelo ataque em vez de você. Se o ataque havia acertado ambos, sua montaria recebe ambas as rolagens de dano e você não recebe nenhuma.",
  },
  {
    nome: "Cavalaria",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode montar um pokémon voluntário usando apenas uma Ação Livre, e isso não consome a Ação de Movimento nem a Ação de Golpe do pokémon.",
  },
  {
    nome: "Equitação Leve",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você está montado e você for a única pessoa sobre sua montaria, a montaria não sofre nenhuma penalidade aos seus Deslocamentos nem perde Fases de Velocidade. Além disso, enquanto você está montado, sua montaria pode carregar uma pessoa extra do que poderia, independente de sua Força ou do formato de seu corpo.",
  },
  {
    nome: "Grande o Bastante",
    classe: "Cavaleiro",
    requisitos: "Ranger.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar um Talento de Ranger ou mesmo de qualquer Classe Avançada do Ranger para fazer um pokémon selvagem aparecer, você pode especificar que este pokémon possa ser montado.",
  },
  {
    nome: "Hipismo",
    classe: "Cavaleiro",
    requisitos: "um pokémon com Deslocamento Terrestre 8.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você está montado, sua montaria aumenta os Deslocamentos dela por um número igual a seu MV e também recebe +1 à Capacidade Salto.",
  },
  {
    nome: "Já!",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Diária. A cada 25 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você está montado, todos os ataques causadores de dano físico feitos por você possuem o Descritor Impacto e causar dano adicional igual ao Deslocamento que sua montaria está usando no momento.",
  },
  {
    nome: "Mobilidade",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode usar a Velocidade da sua montaria no lugar da sua para determinar sua Iniciativa.",
  },
  {
    nome: "Montaria Adaptável",
    classe: "Cavaleiro",
    requisitos:
      "um pokémon com uma das Capacidades a seguir: Geleira, Intangibilidade, Silêncio, Térreo.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto você está montado, sua montaria ignora os efeitos de Terreno Acidentado e é considerada possuindo a Capacidade Geleira.",
  },
  {
    nome: "Salto de Selas",
    classe: "Cavaleiro",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você pode trocar o pokémon sobre o qual você está montado por outro sem desmontar, convocando o pokémon de volta para a pokébola e substituindo por outro de outra pokébola que ocupará o lugar do anterior.",
  },
  {
    nome: "Veja e Aprenda!",
    classe: "Cavaleiro",
    requisitos:
      "cinco Talentos de Cavaleiro (desconte as Características de Classe para este cálculo).",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um humano aliado que está montado, mas que não é Cavaleiro.",
    efeito:
      "enquanto se mantiver a até 3 metros de você, o alvo pode se beneficiar de até dois Talentos de Cavaleiro cujas Frequências são Constantes. Você só pode possuir um aliado se beneficiando por este Talento.",
  },
  {
    nome: "Velocidade Pura",
    classe: "Cavaleiro",
    requisitos: "um pokémon com Velocidade 25.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto for montado por você, o pokémon eleva duas Fases de Velocidade.",
  },
  {
    nome: "Arsenal",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você ativa esta Característica de Classe, escolha um das seguintes Habilidades: Bisbilhoteiro, Desatenção, Foco Interior, Gatuno, Infiltração, Insônia, Premonição, Tensão, Visão Aguçada. Você ganha permanentemente a Habilidade escolhida.",
  },
  {
    nome: "Criminologia",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando lidando com um suspeito de um crime ou um criminoso, aumente todos os seus Modificadores em 1.",
  },
  {
    nome: "Auxiliar",
    classe: "Detetive",
    requisitos: "Treinamento Investigativo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que já recebeu Treinamento Investigativo.",
    efeito:
      "usar este Talento consome sua Ação de Comando da rodada. Você comanda seu pokémon para que ajude você em suas ações, o que faz com que você receba um bônus de +3 a quaisquer rolagens relacionadas a algum Talento de Detetive. O bônus só se mantém ativo enquanto o pokémon alvo for capaz de agir e estiver próximo. Se usar este Talento enquanto o benefício por Criminologia está ativo, o bônus de Auxiliar é aplicado a todas as suas rolagens, em vez que apenas aquelas relacionadas a Talentos de Detetive.",
  },
  {
    nome: "Detector de Mentiras",
    classe: "Detetive",
    requisitos: "ter solucionado um caso.",
    frequencia: "À Vontade.",
    gatilho: "você ouve algo que você suspeita ser uma mentira.",
    alvo: null,
    efeito:
      "especifique qual sentença dita pela pessoa você quer avaliar. Você saberá se aquela sentença é uma inteiramente verdade ou não. Apenas mentiras contadas deliberadamente são reconhecíveis como mentiras. Este Talento pode ser usado tanto ouvindo alguém diretamente quanto em gravações de áudios ou vídeos.",
  },
  {
    nome: "Disfarce",
    classe: "Detetive",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "após dez minutos se arrumando, você cria um disfarce, tornando sua identidade irreconhecível. Este disfarce não imita alguém específico.",
  },
  {
    nome: "Fala Mansa",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione +5 aos resultados de testes que envolvam seu MAE ou seu MDE.",
  },
  {
    nome: "Mestre do Disfarce",
    classe: "Detetive",
    requisitos: "Disfarce.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: null,
    efeito:
      "após uma hora de preparação, você cria um disfarce que é idêntico a alguém específico. Quando vestir o disfarce preparado (um processo que demora dez minutos), este Talento permite que você se disfarce não apenas como outra pessoa, mas como pokémons e até mesmo objetos inanimados do mesmo tamanho que você. Você não será reconhecido como outra coisa além daquilo que quer parecer. Você pode carregar consigo até dois disfarces e pode manter uma coleção guardada onde você quiser.",
  },
  {
    nome: "O Que Foi Aquilo?",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma pessoa que não está em combate e não é hostil a você (ela não precisa estar ciente da sua presença).",
    efeito:
      "role 1d20 + MA ou MV. Você tem sucesso em chamar a atenção do alvo a outra coisa mediante um truque ou uma distração se o resultado for maior a um dos seguintes Atributos dele: Ataque Especial ou Defesa Especial. Os efeitos deste Talento duram um número de minutos igual à diferença entre o resultado da rolagem e o Atributo mais baixo do alvo entre Ataque Especial e Defesa Especial. Se o alvo possuir assuntos urgentes ou estiver alerta por alguma razão, ele parará o que quer que esteja fazendo mais cedo, senão imediatamente.",
  },
  {
    nome: "Parado Aí!",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Diária.",
    gatilho:
      "você está perseguindo alguém que está fugindo ou está em combate contra um inimigo o qual você andou procurando.",
    alvo: null,
    efeito:
      "adicione metade de seu MA à sua Velocidade e adicione seu MV ao seu Atributo Ataque por cinco minutos. Diferente do padrão, estas adições não afetam os Modificadores dos Atributos.",
  },
  {
    nome: "Procurar Evidências",
    classe: "Detetive",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "uma área (normalmente a cena de um crime, a casa de um suspeito ou o local de trabalho de um suspeito).",
    efeito:
      "role 1d20 + MA ou MV. Se o resultado for 15 ou mais, você acha uma evidência (se houver) relacionada com o que você está procurando, mesmo que a relevância da pista não seja imediatamente óbvia. Como um benefício constante, receba +5 a todas as rolagens da Perícia Investigação.",
  },
  {
    nome: "Treinamento Intuitivo",
    classe: "Detetive",
    requisitos: "Treinamento Investigativo.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que já recebeu Treinamento Investigativo.",
    efeito:
      "o alvo recebe uma Habilidade pokémon que você tenha obtido mediante Arsenal Investigativo. Isso não interfere com as Habilidades que ele já possui e dura até o pokémon voltar para a pokébola ou até descansar por aquele dia.",
  },
  {
    nome: "Treinamento Investigativo",
    classe: "Detetive",
    requisitos: "um pokémon com Lealdade 3.",
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: "um pokémon seu com Lealdade 3 ou mais ou um Parceiro.",
    efeito:
      "o alvo tem sua Inteligência aumentada para 4. Em vez disso, se ele já possuía Inteligência 4 ou mais, ele recebe +1 à Inteligência. Ele também recebe uma das seguintes Capacidades: Faro, Ininteligível, Silêncio.",
  },
  {
    nome: "Mais Força!",
    classe: "Guia",
    requisitos: null,
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "a Capacidade Força de seu pokémon é aumentada por seu MA por uma rodada se estiver em combate, ou por um minuto se estiver fora de combate.",
  },
  {
    nome: "Mais Longe!",
    classe: "Guia",
    requisitos: null,
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "os Deslocamentos do alvo são aumentados por seu MV até o fim do encontro.",
  },
  {
    nome: "Agora Mais Que Nunca!",
    classe: "Guia",
    requisitos:
      "cinco Talentos de Guia (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "por uma rodada, os Talentos Você pode fazer Melhor!, Robusto! e Rápido! poderão ser usados para elevar três Fases, em vez de apenas duas Fases. Por esta mesma rodada, Talentos de Guia que aumentam Deslocamentos concedem bônus dobrados.",
  },
  {
    nome: "Espertinho!",
    classe: "Guia",
    requisitos: "um pokémon com Inteligência 5.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo pode ignorar as penalidades por Terreno Acidentado ou Gelado, e pode se mover através do espaço ocupado por pokémons ou humanos hostis. Isso dura por uma rodada se estiver em combate, ou por um minuto se estiver fora de combate.",
  },
  {
    nome: "Faça Dar Certo!",
    classe: "Guia",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "por uma rodada, todos os Golpes causadores de dano dos seus pokémons ganham o Descritor Empurrão, empurrando alvos um número de metros igual à Força do pokémon – se o Golpe usa Ataque – ou à Inteligência dele – se o Golpe usa Ataque Especial.",
  },
  {
    nome: "Fortaleza!",
    classe: "Guia",
    requisitos: "Ataque 18.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que deixou inconscientealgum humano ou pokémon nas últimas três rodadas.",
    efeito:
      "o maior Atributo de seu pokémon é aumentado por metade de seu MA por uma rodada. Se o Atributo em questão for Saúde, os Pontos de Vida ganhos por isso são Pontos de Vida temporários. Estes Pontos de Vida temporários desaparecem ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano) ou quando a Saúde voltar ao valor padrão.",
  },
  {
    nome: "Fortinho!",
    classe: "Guia",
    requisitos: "um pokémon com Força 5.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "por uma rodada, o alvo pode ignorar quaisquer reduções de Atributos ou Fases perdidas causados por Condições.",
  },
  {
    nome: "Jamais Derrotado!",
    classe: "Guia",
    requisitos: "Fortaleza!",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "se os Pontos de Vida do alvo forem reduzidos a zero ou menos, ele ainda pode agir e se deslocar, mas não pode usar Golpes. Se os Pontos de Vida forem reduzidos abaixo de -50% dos Pontos de Vida, o alvo deve fazer um Teste de Morte e os efeitos deste Talento são cancelados.",
  },
  {
    nome: "Mais Alto!",
    classe: "Guia",
    requisitos: "um pokémon com Salto 4.",
    frequencia: "Diária. A cada 4 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "a Capacidade Salto de seu pokémon é aumentada por metade de seu MA por uma rodada se estiver em combate, ou por um minuto se estiver fora de combate.",
  },
  {
    nome: "Rápido!",
    classe: "Guia",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu sob efeito de Mais Longe!",
    efeito:
      "por uma rodada, eleva uma Fase de Velocidade do alvo. É possível gastar mais de um uso deste Talento de uma só vez. O máximo que é possível conceder ao pokémon alvo são duas Fases em Velocidade.",
  },
  {
    nome: "Robusto!",
    classe: "Guia",
    requisitos: "Fortinho!",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu sob efeito de Fortinho!",
    efeito:
      "por uma rodada, eleva uma Fase de Ataque ou de Defesa do alvo. É possível gastar mais de um uso deste Talento de uma só vez. O máximo que é possível conceder ao pokémon alvo são duas Fases em cada Atributo envolvido.",
  },
  {
    nome: "Você pode fazer Melhor!",
    classe: "Guia",
    requisitos: "Espertinho!",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu sob efeito de Espertinho!",
    efeito:
      "por uma rodada, eleva uma Fase de Ataque Especial ou de Defesa Especial do alvo. É possível gastar mais de um uso deste Talento de uma só vez. O máximo que é possível conceder ao pokémon alvo são duas Fases em cada Atributo envolvido.",
  },
  {
    nome: "Encorajamento",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho:
      "um humano aliado causa dano a um inimigo ao qual você causou dano na sua última ação.",
    alvo: null,
    efeito: "o aliado causa dano extra igual ao seu MA ou ao seu MV.",
  },
  {
    nome: "Status",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "suas experiências sob forte estresse e em situações de crise tornam você um líder natural. Quando você faz um teste relacionado a se comunicar com outros, adicione +5 à rolagem.",
  },
  {
    nome: "Ao Meu Sinal!",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "você causa dano a um inimigo dentro do campo de visão de pelo menos um aliado (humano ou pokémon).",
    alvo: null,
    efeito:
      "se o aliado fizer um Teste de Acurácia no próximo turno dele, adicione metade de seu MA ao resultado do teste.",
  },
  {
    nome: "Contenção Aprimorada ++",
    classe: "Oficial",
    requisitos: "Contenção Aprimorada +.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Contenção, o teste é feito usando 1d100 -40 (em vez de apenas -30). Você agora pode possuir sete pokémons Prestativos mediante Contenção. Este Talento substitui Contenção Aprimorada +.",
  },
  {
    nome: "Inspiração",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho:
      "você causa dano a um inimigo dentro docampo de visão de pelo menos um humano aliado.",
    alvo: null,
    efeito:
      "um humano aliado recebe Pontos de Vida temporários igual ao dobro de seu MV. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano).",
  },
  {
    nome: "Levante-se!",
    classe: "Oficial",
    requisitos:
      "seis Talentos de Oficial (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária.",
    gatilho:
      "um aliado humano que estava com mais de 1 PV tem seus Pontos de Vida reduzidos a zero ou menos.",
    alvo: null,
    efeito:
      "os Pontos de Vida do aliado humano são reduzidos a 1 PV, em vez de a menos que isso.",
  },
  {
    nome: "Orientação",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "um humano aliado.",
    alvo: null,
    efeito:
      "o alvo pode imediatamente executar uma Ação Padrão para usar um Talento que pode ser usado À Vontade.",
  },
  {
    nome: "Pastoreio",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando usar Contenção, você pode ter como alvo dois pokémons adjacentes.",
  },
  {
    nome: "Reagrupamento",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "se houver pelo menos um Ranger além de você no seu campo de visão, todos os humanos aliados que possam ver e ouvir você recebem +3 a todos os seus Modificadores por um número de rodadas igual a seu MA. Os bônus deste Talento não são acumulativos, mesmo que um segundo Oficial o ative.",
  },
  {
    nome: "Socorro",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um local.",
    efeito:
      "role 1d20 + MA. Se o resultado for 14 ou mais, escolha uma Capacidade ou um Deslocamento. Você localiza um pokémon com a Capacidade escolhida ou com o Deslocamento escolhido. Se a Capacidade possui um valor numérico associado, este será no máximo 6. Para Deslocamentos, o valor máximo associado é 12. Se o resultado da rolagem for 19 ou mais, você pode escolher duas Capacidades, dois Deslocamentos ou uma Capacidade e um Deslocamento. O pokémon localizado possuirá ambas as escolhas. Qualquer tentativa de atacar ou capturar este pokémon o faz ter sucesso automático em fugir.",
  },
  {
    nome: "Supere Isso!",
    classe: "Oficial",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um aliado faz uma rolagem devido a possuir uma Condição.",
    alvo: null,
    efeito:
      "o aliado em questão recebe um bônus igual a seu MA às rolagens que ele fizer devido a uma das seguintes Condições: Confusão, Congelamento, Paixão, Paralisia, Sono.",
  },
  {
    nome: "Tática",
    classe: "Oficial",
    requisitos: "Ao Meu Sinal!, Inspiração, Orientação.",
    frequencia: "Diária. A cada 25 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um humano aliado.",
    efeito:
      "escolha dois dentre os seguintes Talentos: Ao Meu Sinal!, Encorajamento, Inspiração, Orientação. O alvo recebe os efeitos dos dois Talentos escolhidos, contudo isso consome tanto um uso diário de Tática quanto um uso diário dos Talentos escolhidos.",
  },
  {
    nome: "Símbolo da Cura",
    classe: "Pactuário",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 2d20 + MA. O alvo recupera um número de Pontos de Vida igual ao resultado da rolagem. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo da Proteção",
    classe: "Pactuário",
    requisitos: null,
    frequencia: "Diária. A cada 2 Níveis, receba um uso diário adicional.",
    gatilho: "você sofreu dano por um Golpe.",
    alvo: null,
    efeito:
      "escolha um Símbolo. Você é considerado do(s) mesmo(s) Tipo(s) que o patrono do Símbolo escolhido.",
  },
  {
    nome: "Símbolo da Coragem",
    classe: "Pactuário",
    requisitos: "ter um Parceiro consigo há pelo menos duas semanas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon Prestativo que está prestes a deixar de ser Prestativo.",
    efeito:
      "o alvo imediatamente executa um Golpe cuja Frequência é À Vontade. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo da Destruição",
    classe: "Pactuário",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você faz um ataque de Armas, você pode ativar um Símbolo. O ataque é considerado do mesmo Tipo que o patrono do Símbolo escolhido. Se o patrono possui mais de um Tipo, você pode escolher qual Tipo o ataque assume.",
  },
  {
    nome: "Símbolo da Fé",
    classe: "Pactuário",
    requisitos: "ter um Parceiro consigo há pelo menos duas semanas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um Parceiro que está com você há pelo menos duas semanas.",
    efeito:
      "escolha um Símbolo. O Parceiro usa um Golpe conhecido pelo patrono, mas que não consta na tabela do Talento Símbolo Sagrado. Isso conta como uma Ação de Comando e só pode ser feito uma vez por rodada. O uso deste Talento consome duas Cargas da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo da Grandeza",
    classe: "Pactuário",
    requisitos: null,
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon Prestativo.",
    efeito:
      "o próximo Golpe causador de dano usado pelo alvo causa dano adicional igual a seu MA + seu MV. Só é possível usar este Talento uma vez por rodada. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo da Invocação",
    classe: "Pactuário",
    requisitos:
      "oito Talentos de Pactuário (desconte as Características de Classe para este cálculo).",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um espaço adjacente e vazio.",
    efeito:
      "escolha um Símbolo. Ao seu lado, uma forma astral do seu patrono aparece. Ela é de tamanho médio e possui uma quantidade de Pontos de Vida igual ao quíntuplo de seu Ataque, mas salvo por isso, ela é idêntica ao patrono em todas as demais características (incluindo Capacidades, Habilidades e Golpes). Ela é considerada Prestativa a você. A cada vez que a forma astral muda de ambiente, é acertada por um ataque, é fortemente distraída ou ajuda você de maneira significativa (incluindo atacar), ela recebe um contador. Quando ela atingir dez contadores, ela desaparece. O uso deste Talento consome três Cargas da bateria de seu Estilizador e você não poderá usar seu Estilizador para mais nada até o fim do encontro.",
  },
  {
    nome: "Símbolo da Justiça",
    classe: "Pactuário",
    requisitos: "ter se aliado com dois Lendários.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: null,
    efeito:
      "todos os aliados dentro do alcance da visão podem escolher um Atributo (salvo Saúde). Eleve duas Fases do Atributo escolhido de cada aliado. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo da Rapidez",
    classe: "Pactuário",
    requisitos: "ter um Parceiro consigo há pelo menos duas semanas.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon Prestativo.",
    efeito:
      "você pode dar um comando imediatamente ao alvo, mesmo que você já tenha comandado outro pokémon durante aquela rodada.",
  },
  {
    nome: "Símbolo da Verdade",
    classe: "Pactuário",
    requisitos: null,
    frequencia: "Diária. A cada 3 Níveis, receba um uso diário adicional.",
    gatilho: "você usou Contenção com sucesso.",
    alvo: null,
    efeito:
      "você sabe quatro Golpes (escolhidos pelo Narrador) conhecidos pelo pokémon que se tornou Prestativo (se o pokémon conhece menos que quatro Golpes, você sabe todos os Golpes que ele conhece).",
  },
  {
    nome: "Símbolo da Vida",
    classe: "Pactuário",
    requisitos: "Ataque 16.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "role 3d20 + o triplo de seu MA. O alvo recupera um número de PV igual ao resultado da rolagem. O uso deste Talento consome uma Carga da bateria de seu Estilizador.",
  },
  {
    nome: "Símbolo Sagrado",
    classe: "Pactuário",
    requisitos: "Ataque 18, Símbolo da Fé.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um Parceiro que está com você há pelo menos um mês.",
    efeito:
      "escolha um Símbolo. O Parceiro usa o Golpe que é a Assinatura do patrono. Isso conta como uma Ação de Comando. O uso deste Talento consome duas Cargas da bateria de seu Estilizador.",
  },
  {
    nome: "Escâner",
    classe: "Policial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "quando olha para um pokémon, você vê uma barra que representa a porcentagem de Pontos de Vida de um pokémon em relação aos PV máximos.",
  },
  {
    nome: "Estilizador Policial",
    classe: "Policial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "a bateria de seu Estilizador é aprimorada para possuir agora um máximo de trinta Cargas.",
  },
  {
    nome: "Armadura",
    classe: "Policial",
    requisitos: "Colete.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando sofrer dano por ataques, reduza o dano em 15. A Armadura é aparente, não podendo ser ocultada por vestimentas. Não é possível usar a Armadura em conjunção com o Colete.",
  },
  {
    nome: "Bobina Retrátil",
    classe: "Policial",
    requisitos: null,
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa o Golpe Constrição com um alcance de 4 metros. O uso deste Talento consome quatro Cargas da bateria de seu Estilizador. Alternativamente, você pode usar este Talento para acionar um motor que dispara um cabo a partir do seu Estilizador. O cabo possui um comprimento de 40 metros e pode terminar com um gancho, com um peso magnético ou com uma solução adesiva. Uma vez que a ponta esteja aderida, o cabo pode puxar você até ela. O peso máximo que o cabo suporta é de 100 kg. Este uso deste Talento consome três, e não quatro, Cargas da bateria de seu Estilizador.",
  },
  {
    nome: "Disparador",
    classe: "Policial",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa um dos Golpes a seguir com um alcance de 5 metros: Esporos Paralisantes ou Teia de Aranha. O uso deste Talento consome três Cargas da bateria de seu Estilizador.",
  },
  {
    nome: "Catalizador",
    classe: "Policial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "uma Pedra Elemental é inserida em seu Estilizador. Uma vez inserida, a pedra perde a capacidade de evoluir pokémons, pois tem sua radiação canalizada para o aparelho e aproveitada de outras formas. Só é possível possuir uma Pedra Elemental atada ao seu Estilizador, e é necessário um minuto para trocar a Pedra do espaço destinado a ela. Cada Pedra Elemental concede uma Capacidade diferente a você. Todas as vezes que usar a Capacidade, são consumidas cinco Cargas da bateria de seu Estilizador. Pedra Brilhante Luminar; Pedra da Água Manancial; Pedra da Alvorada Luminar; Pedra da Folha Secreção; Pedra da Lua Silêncio; Pedra do Crepúsculo Ininteligível; Pedra do Fogo Combustão; Pedra do Sol Sedução; Pedra do Trovão *; * Diferente das outras Pedras Elementais, a Pedra do Trovão não concede nenhuma Capacidade, portanto não há consumo de bateria associada a ela. Em vez disso, ela serve de bateria extra, aprimorando em dez Cargas o máximo de Cargas do Estilizador.",
  },
  {
    nome: "Colete",
    classe: "Policial",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando sofrer dano por ataques, reduza o dano em 5. Este Colete não é aparente, pois pode ser ocultado abaixo de outras vestimentas.",
  },
  {
    nome: "Derrubada",
    classe: "Policial",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Derrubada.",
  },
  {
    nome: "Proteção",
    classe: "Policial",
    requisitos: "Colete.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você é atingido por um Golpe.",
    alvo: null,
    efeito: "você usa o Golpe Proteção.",
  },
  {
    nome: "Pulverizador",
    classe: "Policial",
    requisitos: null,
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito:
      "você usa um dos Golpes a seguir com um alcance de 4 metros: Cortina de Fumaça ou Pó Sonífero. O uso deste Talento consome três Cargas da bateria de seu Estilizador.",
  },
  {
    nome: "Resistência",
    classe: "Policial",
    requisitos: "Colete.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "si.",
    efeito: "você usa o Golpe Resistência.",
  },
  {
    nome: "Respirador",
    classe: "Policial",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "si.",
    efeito:
      "você ativa o Respirador, que permite respirar embaixo d’água por 45 minutos depois de ativado. Após estes 45 minutos, o Respirador deve ser secado e não poderá ser ativado de novo dentro de duas horas.",
  },
  {
    nome: "Ataques Aprimorados",
    classe: "Treinador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "seu pokémon acerta um ataque causador de dano em um oponente.",
    alvo: null,
    efeito:
      "quando calcular o dano causado ao inimigo, adicione metade de seu MA ou de seu MAE antes que o alvo subtraia o valor de Defesa dele.",
  },
  {
    nome: "Treinamento Aprimorado",
    classe: "Treinador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons recebem 20% de pontos de experiência adicionais a cada vez que receberem pontos de experiência.",
  },
  {
    nome: "Afirmação",
    classe: "Treinador",
    requisitos: "Ataque 14.",
    frequencia: "Constante.",
    gatilho: "seu pokémon vence um inimigo ou obtém um Crítico.",
    alvo: null,
    efeito:
      "seu pokémon ganha Pontos de Vida temporários igual ao dobro do seu MA. Pontos de Vida temporários desaparecem após um encontro ou ao serem consumidos (eles são consumidos antes dos Pontos de Vida normais quando se sofre dano).",
  },
  {
    nome: "Ataques Aprimorados +",
    classe: "Treinador",
    requisitos: "Ataque 16, Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: "seu pokémon acerta um ataque causador de dano em um oponente.",
    alvo: null,
    efeito:
      "quando calcular o dano causado ao inimigo, adicione seu MA ou seu MAE antes que o alvo subtraia o valor de Defesa dele. Este Talento substitui Ataques Aprimorados.",
  },
  {
    nome: "Ataques Aprimorados ++",
    classe: "Treinador",
    requisitos: "Ataque 18, Ataque Especial 18, Ataques Aprimorados +.",
    frequencia: "Constante.",
    gatilho: "seu pokémon acerta um ataque causador de dano em um oponente.",
    alvo: null,
    efeito:
      "quando calcular o dano causado ao inimigo, adicione seu MA e seu MAE antes que o alvo subtraia o valor de Defesa dele. Este Talento substitui Ataques Aprimorados +.",
  },
  {
    nome: "Capataz",
    classe: "Treinador",
    requisitos: "Pressão +.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando você usa Pressão, Pressão + ou Pressão Positiva em um alvo, remova as Condições Confusão e Atordoamento do alvo se aplicável. Além disso, neutralize qualquer Fase prejudicial que estava sob efeito no alvo.",
  },
  {
    nome: "Crítica Construtiva",
    classe: "Treinador",
    requisitos: "Ataque Especial 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu, cujo ataque na ação anterior não acertou nenhum inimigo.",
    efeito:
      "reduza em três todas as Dificuldades de Acurácia do alvo até o fim do encontro.",
  },
  {
    nome: "Exercício Brutal",
    classe: "Treinador",
    requisitos: "Ataque 15.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que acabou de derrotar um oponente.",
    efeito:
      "o pokémon perde metade de seus Pontos de Vida atuais, mas ganha o dobro do número de pontos de experiência que ganharia.",
  },
  {
    nome: "Foco",
    classe: "Treinador",
    requisitos: "Crítica Construtiva.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "na próxima vez que seu pokémon usar um Golpe que não causa dano, reduza pela metade de seu MAE a Dificuldade de Acurácia. Este Talento não pode ser usado para Golpes que automaticamente derrubam os Pontos de Vida do inimigo a zero.",
  },
  {
    nome: "Intimidar",
    classe: "Treinador",
    requisitos: "Ataque 16, Ataque Especial 14.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito: "você usa a Habilidade Intimidar no alvo.",
  },
  {
    nome: "Mestre das Feras",
    classe: "Treinador",
    requisitos: "8 insígnias.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seu pokémon.",
    efeito:
      "seus pokémons não contestam seus comandos. A menos que sejam Lendários, eles não podem desobedecer você. Este Talento não afeta a lealdade de pokémons.",
  },
  {
    nome: "Pressão",
    classe: "Treinador",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu adjacente.",
    efeito:
      "cause dano ao seu pokémon igual a um quinto dos Pontos de Vida máximos dele. Eleve uma Fase de um Atributo dele à sua escolha. Se você usar Pressão mais de uma vez diária no mesmo pokémon, isso afetará a lealdade dele.",
  },
  {
    nome: "Pressão +",
    classe: "Treinador",
    requisitos: "Pressão.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu adjacente.",
    efeito:
      "cause dano ao seu pokémon igual a um quarto dos Pontos de Vida máximos dele empregando uma arma para feri-lo. Eleve duas Fases de um Atributo dele à sua escolha. Se você usar Pressão + mais de uma vez diária no mesmo pokémon, isso afetará a lealdade dele.",
  },
  {
    nome: "Transpassar",
    classe: "Treinador",
    requisitos: "Ataque Especial 16.",
    frequencia: "Diária.",
    gatilho: "seu pokémon acerta um ataque causador de dano em um oponente.",
    alvo: null,
    efeito:
      "o ataque causa o dano neutro, ignorando imunidades, resistências e vulnerabilidades.",
  },
  {
    nome: "Buscador de Pedras Eternas",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "um local não urbano.",
    efeito:
      "role 1d20 + MAE. Se o resultado for 15 ou mais, você encontra uma Pedra do Sempre.",
  },
  {
    nome: "Força Oculta",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "escolha um Golpe do mesmo Tipo do alvo que uma de suas formas evolutivas pode aprender subindo de Nível. O alvo usa este Golpe. O Golpe escolhido não pode ser aprendido em um Nível maior do que o Nível atual do alvo somado à metade de seu MA ou de seu MAE.",
  },
  {
    nome: "Altamente Capaz",
    classe: "Azarão",
    requisitos: "Capaz",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "aumente em dois todas as Capacidades numéricas e Deslocamentos do alvo por um número de minutos igual a seu MAE.",
  },
  {
    nome: "Aprimorar Pedra do Sempre",
    classe: "Azarão",
    requisitos: "Ataque Especial 22, Lapidar Pedra do Sempre.",
    frequencia: "Semanal.",
    gatilho: null,
    alvo: "uma Pedra do Sempre.",
    efeito:
      "após vinte minutos trabalhando na Pedra do Sempre alvo, role 1d20 + MAE. Se o resultado for 20 ou mais, você cria uma Eviolita que possui adicionalmente os efeitos de uma Pedra do Sempre.",
  },
  {
    nome: "Campeão em Treinamento",
    classe: "Azarão",
    requisitos:
      "ter evitado a evolução de um pokémon cuja forma final evolui no Nível 40 ou maior.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "escolha um Atributo. Pelo resto do encontro, o alvo tem seu Atributo aumentado por uma quantidade idêntica ao Atributo Basal de sua última forma evoluída.",
  },
  {
    nome: "Capaz",
    classe: "Azarão",
    requisitos: "Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "aumente em um todas as Capacidades numéricas e Deslocamentos do alvo. Este Talento é aplicado a um pokémon por vez. Trocar o pokémon alvo dele consome uma Ação Padrão.",
  },
  {
    nome: "Força Oculta +",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "escolha um Golpe que uma de suas formas evolutivas pode aprender subindo de Nível. O alvo usa este Golpe. O Golpe escolhido não pode ser aprendido em um Nível maior do que o Nível atual do alvo somado a seu MA ou a seu MAE. Este Talento substitui Força Oculta.",
  },
  {
    nome: "Força Oculta ++",
    classe: "Azarão",
    requisitos: "Ataque 16, Ataque Especial 16, Força Oculta +.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "escolha um Golpe que uma de suas formas evolutivas pode aprender subindo de Nível ou por um Tutor. O alvo usa este Golpe. O Golpe escolhido não pode ser aprendido em um Nível maior do que o Nível atual do alvo somado ao dobro de seu MA ou de seu MAE. Este Talento substitui Força Oculta +.",
  },
  {
    nome: "Incrivelmente Capaz",
    classe: "Azarão",
    requisitos: "Altamente Capaz",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "o alvo recebe uma Capacidade de uma de suas formas mais evoluídas, com o valor numérico possuído como se fosse daquela forma, caso haja um valor associado.",
  },
  {
    nome: "Lapidar Pedra do Sempre",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "uma Pedra do Sempre.",
    efeito:
      "após vinte minutos trabalhando na Pedra do Sempre alvo, role 1d20 + MAE. Se o resultado for 20 ou mais, designe um Tipo. De agora em diante, quando esta Pedra do Sempre é mantida por um pokémon do Tipo designado que possui pelo menos um estágio evolutivo não alcançado ou que é um pokémon de uma só forma (não evolui e não é evolução de ninguém), este pokémon recebe +1 a seu Bônus Elemental.",
  },
  {
    nome: "Qualquer Coisa que Você Possa Fazer!",
    classe: "Azarão",
    requisitos:
      "três Talentos de Azarão (desconte as Características de Classe para este cálculo).",
    frequencia: "Diária. A cada 6 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado de um Tipo diferente de seu estágio evolutivo atual.",
    efeito:
      "o alvo substitui seu(s) tipo(s) por um dos Tipos de suas formas evoluídas por um número de rodadas igual a seu MA.",
  },
  {
    nome: "Quanto Maior, Maior a Queda!",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon seu que possui pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "quando um pokémon seu luta contra um de suas formas mais evoluídas, para cada número de evoluções pelas quais ele teria que passar para atingir a forma contra a qual ele está lutando, adicione seu MA ou seu MAE às rolagens de dano dele.",
  },
  {
    nome: "Técnica Evoluída",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "seus pokémons que possuem pelo menos um estágio evolutivo não alcançado.",
    efeito:
      "os alvos recebem Bônus Elemental como se possuíssem 10 Níveis a mais.",
  },
  {
    nome: "Técnica Versátil",
    classe: "Azarão",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "todos os seus pokémons.",
    efeito:
      "seus pokémons recebem Bônus Elemental como se pertencessem a todos os Tipos de quaisquer de suas formas evoluídas.",
  },
  {
    nome: "Assalto Torrencial",
    classe: "Caçador",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano tem sucesso em fugir ou um humano chama o pokémon dele de volta para a pokébola.",
    efeito:
      "você pode fazer seu pokémon ativo fazer um ataque contra o pokémon ou o humano que ativaram o gatilho antes que escapem ou que o pokémon retorne à pokébola. Se você estiver atacando um pokémon que desmaiou e você reduzi-lo a -100% Pontos de Vida, ele não precisa fazer um teste de morte.",
  },
  {
    nome: "Sem Escapatória",
    classe: "Caçador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando humanos ou pokémons tentam fugir durante um encontro em que você participa e o deslocamento deles for igual ou maior do que o seu ou o do seu pokémon, eles devem rolar 1d20 e adicionar seus próprios MV. Se eles conseguirem um resultado maior do que 10 + seu MA, eles conseguem escapar. Caso contrário, você consegue manter seu rastro. Se o inimigo estiver usando a Habilidade Fuga, ele é imune a esta Característica de Classe.",
  },
  {
    nome: "Arranque",
    classe: "Caçador",
    requisitos: "Ataque Especial 16, um pokémon com Velocidade 20.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu sobe de nível, você pode adicionar pontos de Atributos à Velocidade, ignorando a Relação Basal.",
  },
  {
    nome: "Alta Natural",
    classe: "Caçador",
    requisitos: "Afirmação",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu nocauteia um inimigo.",
    alvo: null,
    efeito:
      "eleve uma Fase do Atributo à sua escolha (mas não Saúde) de seu pokémon.",
  },
  {
    nome: "Emoção da Caça",
    classe: "Caçador",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando seu pokémon nocauteia um inimigo usando Perseguição, devido a um Talento de Caçador ou após tê-lo rastreado depois de ele ter escapado, este pokémon recebe 25% de experiência extra.",
  },
  {
    nome: "Finalize-o!",
    classe: "Caçador",
    requisitos: "Sede de Sangue.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu usando um Golpe que causa dano.",
    efeito:
      "se o Golpe usado deixar o alvo com 5% de seus PV ou menos, ele fica inconsciente.",
  },
  {
    nome: "Não Pare!",
    classe: "Caçador",
    requisitos: "Ataque 16.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "seu pokémon deixa inconsciente um oponente.",
    alvo: null,
    efeito:
      "o seu pokémon pode se deslocar novamente e usar outro Golpe na mesma rodada. Você só pode usar este Talento uma vez por encontro por pokémon.",
  },
  {
    nome: "Peguei Você!",
    classe: "Caçador",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando seu Pokémon usa um Golpe com o Descritor Armadilha, você pode escolher maximizar a duração, em vez de rolá-la.",
  },
  {
    nome: "Perseguição",
    classe: "Caçador",
    requisitos: "Ataque 18.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon ou um humano.",
    efeito: "você usa o Golpe Perseguição.",
  },
  {
    nome: "Perseguição Imprevisível",
    classe: "Caçador",
    requisitos: "Perseguição.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "Quando obtiver este Talento, escolha um Tipo. Quando você ou um pokémon seu usar Perseguição, este Golpe pode ser usado do tipo escolhido, em vez de ser do Tipo Trevas. Uma vez escolhido o tipo, isso não pode ser mudado, mas você e seus pokémons ainda podem usar Perseguição como um Golpe de Trevas a seu critério. Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos não se acumulam. Cada vez que ele é escolhido, ele é aplicado a um Tipo diferente.",
  },
  {
    nome: "Sede de Sangue",
    classe: "Caçador",
    requisitos: "Ataque Especial 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você sabe se alguém está com menos da metade dos Pontos de Vida. Alguém disso, quando uma criatura hostil está abaixo de 50% dos PV, seu pokémon ativo eleva uma Fase de Velocidade. Esta elevação desaparece quando nenhuma criatura hostil estiver com menos da metade dos PV, e não se acumula se houver mais de um inimigo com menos de 50% de PV presente.",
  },
  {
    nome: "Sem Escapatória +",
    classe: "Caçador",
    requisitos: "Ataque 16, Ataque Especial 14",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando humanos ou pokémons tentam fugir durante um encontro em que você participa e o deslocamento deles for igual ou maior do que o seu ou o do seu pokémon, eles devem rolar 1d20 e adicionar seus próprios MV. Se eles conseguirem um resultado maior do que 15 + seu MA, eles conseguem escapar. Caso contrário, você consegue manter seu rastro. Mesmo que o inimigo venha a escapar (obter sucesso neste teste), para fins de rastreá-lo e persegui-lo, seus pokémons e você adicionam +4 metros aos seus deslocamentos por 10 minutos. Se o inimigo estiver usando a Habilidade Fuga, ele é imune a este Talento. Este Talento substitui Sem Escapatória.",
  },
  {
    nome: "Técnicas de Caça",
    classe: "Caçador",
    requisitos: "dois pokémons com Farejar, Olhar Paralisante, Perseguição.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "você deve passar dez minutos ensinando um pokémon auxiliado por um pokémon seu que conhece Farejar, Olhar Paralisante ou Perseguição. Role 1d20 + MA. Se o resultado for 15 ou mais, o alvo aprende Farejar, Olhar Paralisante ou Perseguição (conforme o pokémon que está auxiliando você, e se ele souber mais de um destes Golpes, você pode escolher qual está ensinando).",
  },
  {
    nome: "Aprimorar Golpes Elementais",
    classe: "Elementalista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: "um pokémon seu acerta um Golpe do Tipo de Escolha.",
    alvo: null,
    efeito: "adicione metade de seu MA ao dano causado.",
  },
  {
    nome: "Treinamento Elemental",
    classe: "Elementalista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons do Tipo de Escolha recebem 30% de pontos de experiência adicionais a cada vez que receberem pontos de experiência.",
  },
  {
    nome: "Alma Elemental",
    classe: "Elementalista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você se sente continuamente obrigado a estar na presença do Tipo de Escolha, devendo possuir pelo menos quatro pokémons do seu Tipo de Escolha seus consigo em sua equipe. Você pode sentir pokémons do Tipo de Escolha a até um número de metros igual ao quíntuplo de seu MAE. Além disso, nesta mesma área, você pode sentir se um pokémon conhece algum Golpe de seu Tipo de Escolha.",
  },
  {
    nome: "Aprimorar Golpes Elementais +",
    classe: "Elementalista",
    requisitos: "Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: "um pokémon seu acerta um Golpe do Tipo de Escolha.",
    alvo: null,
    efeito:
      "adicione seu MA ao dano causado. Este Talento substitui Aprimorar Golpes Elementais.",
  },
  {
    nome: "Com os Elementos",
    classe: "Elementalista",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: "você decide batalhar pokémons selvagens.",
    alvo: null,
    efeito:
      "role 1d20 + MAE. Se o resultado for 15 ou mais e a área contiver pelo menos um pokémon de seu Tipo de Escolha, você encontrará pelo menos um pokémon de uma espécie de seu Tipo de Escolha.",
  },
  {
    nome: "Conexão com Tipo",
    classe: "Elementalista",
    requisitos: "Alma Elemental.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon selvagem hostil ou indiferente de seu Tipo de Escolha.",
    efeito:
      "Role 1d20 + MA. Se o resultado for 15 ou mais, este pokémon se torna mais amistoso. Se ele era indiferente, ele agora demonstra interesse por você. Se for hostil, ele decidirá não atacar, mas ainda pode decidir fugir ou permanecer cauteloso. A atitude permanecerá até que algo a mude. Um mesmo pokémon não pode ser alo deste Talento mais de uma vez diária.",
  },
  {
    nome: "Conversão",
    classe: "Elementalista",
    requisitos: "Mudança de Tipo.",
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "este Talento requer levar o pokémon alvo a um ambiente com profundas características associadas ao seu Tipo de Escolha e passar pelo menos 10 horas em treinamento neste lugar. O pokémon alvo recebe permanentemente o Tipo de Escolha. Se ele já possuía dois Tipos, substitua permanentemente um de seus Tipos. A aparência do pokémon é alterada de acordo com seu novo Tipo (como acontece com Vulpix adaptado às condições árticas ou um Geodude que vive cercado por campos elétricos, por exemplo). Especial: este Talento pode ser escolhido diversas vezes. Seus efeitos se acumulam.",
  },
  {
    nome: "Elementalismo",
    classe: "Elementalista",
    requisitos: "Mudança Elemental.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu usa um Golpe.",
    alvo: null,
    efeito: "o Golpe é considerado de seu Tipo de Escolha.",
  },
  {
    nome: "Golpe Elemental",
    classe: "Elementalista",
    requisitos: "Elementalismo.",
    frequencia: "Uso Único. A cada 10 Níveis, receba um uso adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "este Talento requer levar o pokémon alvo a um ambiente com profundas características associadas ao seu Tipo de Escolha e passar pelo menos 5 horas em treinamento neste lugar. Um Golpe do pokémon alvo se torna permanentemente do Tipo de Escolha.",
  },
  {
    nome: "Mudança de Tipo",
    classe: "Elementalista",
    requisitos: "Ataque Especial 15.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "o alvo recebe seu Tipo de Escolha por um número de rodadas igual a seu MA (cada rodada equivale a seis segundos). Se ele já possuía dois Tipos, substitua temporariamente um de seus Tipos. Ao fim do combate, como ele foi (mesmo que temporariamente) do Tipo de Escolha, seu Treinamento Elemental é aplicado.",
  },
  {
    nome: "Sou Superior no Meu Tipo!",
    classe: "Elementalista",
    requisitos: "Alma Elemental.",
    frequencia: "Constante.",
    gatilho:
      "um inimigo usa um Golpe do Tipo de Escolha contra um ou mais pokémons seus também do Tipo de Escolha.",
    alvo: null,
    efeito:
      "o inimigo não adiciona Bônus Elemental e não pode obter Críticos nem causar Testes de Morte contra seus pokémons do Tipo de Escolha.",
  },
  {
    nome: "Treinamento de Resistência",
    classe: "Elementalista",
    requisitos: "Alma Elemental.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "você é resistente ao dano do Tipo de Escolha.",
  },
  {
    nome: "Subversão Estatística",
    classe: "Especialista",
    requisitos: null,
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon inimigo.",
    efeito:
      "o alvo perde uma Fase do Atributo de Escolha. Uma vez que tenha afetado um pokémon, você não pode afetar o mesmo pokémon ou outro pokémon novamente naquele mesmo combate, a menos que o primeiro alvo tenha ficado inconsciente.",
  },
  {
    nome: "Treinamento de Especialista",
    classe: "Especialista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "o Atributo de Escolha de todos os seus pokémons.",
    efeito:
      "adicione metade de seu MA ou de seu MAE ao Atributo Basal de todos os seus pokémons. Se isso mudar a Relação Basal de um pokémon, distribua seus Pontos de Atributos quando ele subir de Nível conforme a nova Relação Basal.",
  },
  {
    nome: "Abundância",
    classe: "Especialista",
    requisitos: "Pressão + ou Pressão Positiva.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon.",
    efeito:
      "seu pokémon perde metade de seus PV máximos e não pode executar um Golpe na rodada atual. Eleve a Fase dele de seu Atributo de Escolha para o máximo possível.",
  },
  {
    nome: "Buscador de Talentos",
    classe: "Especialista",
    requisitos:
      "dois pokémons com Naturezas que beneficiam o Atributo de Escolha.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon selvagem encontrado.",
    efeito:
      "role 1d20 + MA. Se o resultado for 15 ou mais, a Natureza do alvo – em vez de ser determinada aleatoriamente entre todas as Naturezas – será determinada aleatoriamente apenas entre as Naturezas que beneficiam o Atributo de Escolha. Se o resultado da rolagem exceder 25, você pode escolher a Natureza, desde que ela beneficie seu Atributo de Escolha.",
  },
  {
    nome: "Competência Fixa",
    classe: "Especialista",
    requisitos: "Ataque Especial 18.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito: "seus pokémons não podem perder Fases de seu Atributo de Escolha.",
  },
  {
    nome: "Desbloquear Atributo",
    classe: "Especialista",
    requisitos: "um pokémon com Atributo de Escolha 30.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu sobe de nível, você pode adicionar pontos de Atributos ao Atributo de Escolha, ignorando a Relação Basal.",
  },
  {
    nome: "Explosão de Atributo",
    classe: "Especialista",
    requisitos: "Nível 10.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "pelo resto do encontro, o alvo recebe a Habilidade Explosão de Velocidade. Se seu Atributo de Escolha não é Velocidade, ele recebe uma Habilidade análoga denominada Explosão de Ataque, Explosão de Defesa, Explosão de Ataque Especial ou Explosão de Defesa Especial, conforme o seu Atributo de Escolha beneficiando o Atributo de Escolha no lugar de Velocidade.",
  },
  {
    nome: "Pressão Positiva",
    classe: "Especialista",
    requisitos: "Ataque 15, Pressão.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu adjacente.",
    efeito:
      "cause dano ao pokémon igual a 20% de seus PV máximos com uma arma. Eleve duas Fases do Atributo de Escolha do pokémon.",
  },
  {
    nome: "Subversão Estatística +",
    classe: "Especialista",
    requisitos: "Ataque Especial 15.",
    frequencia: "À Vontade.",
    gatilho: null,
    alvo: "um pokémon inimigo.",
    efeito:
      "o pokémon alvo perde duas Fases do Atributo de Escolha. Uma vez que tenha afetado um pokémon, você não pode afetar o mesmo pokémon ou outro pokémon novamente naquele mesmo combate, a menos que o primeiro alvo tenha ficado inconsciente. Este Talento substitui Subversão Estatística.",
  },
  {
    nome: "Superioridade",
    classe: "Especialista",
    requisitos: "cinco insígnias ou equivalentes.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon inimigo.",
    efeito:
      "se o Atributo de Escolha do seu pokémon ativo é maior do que o Atributo de Escolha do pokémon oponente, este perde uma Fase do Atributo de Escolha.",
  },
  {
    nome: "Treinamento de Especialista +",
    classe: "Especialista",
    requisitos: "3 insígnias ou equivalentes.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: "o Atributo de Escolha de todos os seus pokémons.",
    efeito:
      "adicione seu MA ou seu MAE ao Atributo Basal de todos os seus pokémons. Se isso mudar a Relação Basal de um pokémon, distribua seus Pontos de Atributos quando ele subir de Nível conforme a nova Relação Basal. Além disso, para cada 10 Níveis que você possua, seus pokémons ganham +1 extra ao Atributo Basal de seu Atributo de Escolha. Este Talento substitui Treinamento de Especialista.",
  },
  {
    nome: "Batedor",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "na próxima rodada, o alvo pode usar o Golpe Giro Rápido, e adiciona seu MA ao dano causado por este Giro Rápido.",
  },
  {
    nome: "Maestria sobre o Terreno",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: null,
    alvo: "seus pokémons.",
    efeito:
      "Pelo resto do encontro, nenhum de seus pokémons recebe penalidades aos seus deslocamentos por Terreno Acidentado nem sofre penalidades de Acurácia quando tiverem alvos em Terreno Acidentado.",
  },
  {
    nome: "Barreiras Pessoais",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu usa um Golpe com o Descritor Barreira.",
    alvo: null,
    efeito:
      "em vez de criar uma Barreira, o Golpe cria uma Cobertura com os efeitos da Barreira. O efeito, assim, possuirá um só alvo, e seu pokémon pode ter um aliado, um inimigo ou a si mesmo como alvo do efeito. A Cobertura durará até o fim do encontro ou até o alvo ser convocado de volta à pokébola.",
  },
  {
    nome: "Configurar Terreno",
    classe: "Estrategista",
    requisitos: "Ataque Especial 16.",
    frequencia: "Diária.",
    gatilho:
      "um pokémon seu usa uma Capacidade que afeta o Terreno ou um Golpe com um dos seguintes Descritores: Ameaça, Barreira, Clima, Cobertura.",
    alvo: null,
    efeito:
      "seu pokémon pode imediatamente usar uma Capacidade que afeta o Terreno (mas não a mesma Capacidade) ou um Golpe com um dos seguintes Descritores (mas não o mesmo Golpe): Ameaça, Barreira, Clima, Cobertura.",
  },
  {
    nome: "Explosão Adaptativa",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu usa um Golpe não causador de dano para elevar a Fase dele em um ou mais Atributos.",
    alvo: null,
    efeito:
      "eleve uma Fase de um Atributo que não teve sua Fase elevada pelo Golpe.",
  },
  {
    nome: "Intenção Arriscada",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu está colocando Ameaças, ele pode aumentar a área das Ameaças em um número de metros igual a seu MA. Todos os metros extras devem ser adjacentes à área original. Se seus pokémons colocarem Ameaças em uma área ocupada por um inimigo, este imediatamente sofre os efeitos da Ameaça ao se deslocar.",
  },
  {
    nome: "Potencial Elevado",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu faz um teste para uma Capacidade.",
    alvo: null,
    efeito:
      "adicione seu MA ao teste do pokémon (isso pode reduzir a Dificuldade de Acurácia da Capacidade Fiação).",
  },
  {
    nome: "Prioridades",
    classe: "Estrategista",
    requisitos: "Ataque 14.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémon seu usa um Golpe que tem como alvo(s) apenas um ou mais aliados.",
    alvo: null,
    efeito: "o pokémon recupera.",
  },
  {
    nome: "Reconhecimento de Técnica",
    classe: "Estrategista",
    requisitos:
      "seis Talentos de Estrategista (desconte as Características de Classe para este cálculo).",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon de um oponente usa um Golpe que ele já usou antes naquele encontro, a Dificuldade de Acurácia dele aumenta em 4.",
  },
  {
    nome: "Táticas do Terreno",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon seu com pelo menos uma das seguintes Capacidades: Congelação, Manancial, Materialização, Rebento ou Térreo.",
    efeito:
      "o alvo pode, em vez de executar um Golpe durante seu turno, afetar uma área de um número de metros quadrados igual à metade de seu MA somada à Força ou à Inteligência do próprio pokémon. A extremidade da área não deve estar mais longe do pokémon do que 6 metros. Esta habilidade pode ser limitada pelo terreno natural ao redor: por exemplo, um pokémon com Manancial pode transformar areia em lama para criar Terreno Acidentado, mas não poderá criar Terreno Acidentado a partir de concreto.",
  },
  {
    nome: "Versatilidade",
    classe: "Estrategista",
    requisitos: "Ataque 14, Ataque Especial 18.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "um pokémon seu.",
    efeito:
      "o alvo pode abdicar do uso de um Golpe cuja frequência é por Encontro para recuperar um uso de um Golpe diferente cuja frequência também é por Encontro. Alternativamente, o alvo pode abdicar do uso de um Golpe cuja Frequência é Diária para recuperar um uso de um Golpe diferente cuja Frequência é Por Encontro ou Diária.",
  },
  {
    nome: "Vórtice Climático",
    classe: "Estrategista",
    requisitos: null,
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "um pokémon seu usa um Golpe com o Descritor Clima.",
    alvo: null,
    efeito:
      "o seu pokémon não afeta todo o campo e nem substitui as condições climáticas existentes. Em vez disso, ele afeta uma área de Explosão 4 centrada À Distância 8. O Golpe climático só afeta aquela área, agindo da maneira usual dentro dela.",
  },
  {
    nome: "Incansável",
    classe: "Inquebrável",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "seus pokémons só atingem a inconsciência quando atingem -25% de seus Pontos de Vida, em vez de ficarem inconscientes aos 0 Pontos de Vida, como normalmente acontece. Contudo, um pokémon consciente em virtude desta Característica de Classe não pode usar nenhum dos seguintes Golpes: Autodestruição, Esforço, Explosão, Mangual, Reversão, Sofrimento Mútuo. Esta Característica de Classe não interfere em quando seu pokémon deve fazer um teste de morte. Pokémons Sem Alma não podem se beneficiar de Incansável.",
  },
  {
    nome: "Saúde Inquebrável",
    classe: "Inquebrável",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "quando um pokémon seu sobe de nível, você pode adicionar pontos de Atributos à Saúde, ignorando a Relação Basal.",
  },
  {
    nome: "Ainda de Pé!",
    classe: "Inquebrável",
    requisitos: "Ataque 18, Ataque Especial 16.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você ainda por comandar seus pokémons mesmo enquanto inconsciente. Se você escolher fazê-lo e for reduzido a -100% de seus PV, você não poderá fazer um teste de morte.",
  },
  {
    nome: "Ainda de Pé! +",
    classe: "Inquebrável",
    requisitos: "Ainda de Pé!.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "você ainda por comandar seus pokémons mesmo enquanto inconsciente. Isso não interfere em quando você deve fazer um teste de morte. Este Talento substitui Ainda de Pé!",
  },
  {
    nome: "Amigo é pra Essas Coisas!",
    classe: "Inquebrável",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um de seus pokémons adjacente a você é acertado por um Golpe.",
    alvo: null,
    efeito:
      "após aplicar a Defesa ou a Defesa Especial do seu pokémon, você sofre metade do dano que ele sofreria no lugar dele.",
  },
  {
    nome: "Aparar",
    classe: "Inquebrável",
    requisitos: "Ataque 15.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione seu MA à sua Defesa e à sua Defesa Especial para fins de diminuir o dano que você sofreria quando é atacado.",
  },
  {
    nome: "Aparar +",
    classe: "Inquebrável",
    requisitos: "Aparar.",
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "adicione o dobro de seu MA à sua Defesa e à sua Defesa Especial para fins de diminuir o dano que você sofreria quando é atacado. Este Talento substitui Aparar.",
  },
  {
    nome: "Consciente",
    classe: "Inquebrável",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: null,
    efeito:
      "enquanto dorme, você mantêm ciência sobre o ambiente externo usando seus sentidos normalmente como se estivesse acordado, salvo para a visão. Você instintivamente reage a perigos enquanto dorme, acordando imediatamente. Enquanto dorme, você não recebe penalidades a testes envolvendo percepção. Se você estiver sob a Condição Sono, você simplesmente ignora todos os efeitos a ela associados.",
  },
  {
    nome: "Mantenha a Linha!",
    classe: "Inquebrável",
    requisitos: "três pokémons com Defesa Especial 25.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "você é atingido por um Golpe especial (ou por um humano usando Armas se for considerado um ataque especial) e perderia mais do que 25 PV por isso.",
    alvo: null,
    efeito: "reduza a perda de Pontos de Vida a 25.",
  },
  {
    nome: "Proteção",
    classe: "Inquebrável",
    requisitos: "um pokémon com Proteção.",
    frequencia: "Diária. A cada 15 Níveis, receba um uso diário adicional.",
    gatilho: "você é atingido por um Golpe.",
    alvo: null,
    efeito: "você usa o Golpe Proteção.",
  },
  {
    nome: "Resistência",
    classe: "Inquebrável",
    requisitos: "um pokémon com Resistência.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "você é atingido por um Golpe.",
    alvo: null,
    efeito: "você usa o Golpe Resistência.",
  },
  {
    nome: "Segure Firme!",
    classe: "Inquebrável",
    requisitos: "três pokémons com Defesa 25.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho:
      "você é atingido por um Golpe físico ou por um humano usando Armas (mas não se por algum motivo, este é considerado um ataque especial) e perderia mais do que 25 PV por isso.",
    alvo: null,
    efeito: "reduza a perda de Pontos de Vida a 25.",
  },
  {
    nome: "Espírito de Equipe",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "dois pokémons ativos seus.",
    efeito:
      "seus dois pokémons ativos elevam suas Fases de um Atributo, que deve ser o maior Atributo Basal do outro pokémon, salvo Saúde. Sempre que mudar um pokémon ativo ou ambos, Espírito de Equipe não mais eleva as Fases conforme os pokémons anteriores (eles perdem as Fases ganhas) para fazê-lo conforme os novos pokémons ativos e seus Atributos respectivos. Se houver dois Atributos Basais empatados, você pode escolher qual será usado para esta Característica de Classe.",
  },
  {
    nome: "Juntos!",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons ativos seus.",
    efeito:
      "os alvos podem combinar dois Golpes se estes compartilharem o mesmo Tipo e puderem ter o mesmo alvo (por exemplo, um Golpe que tem como alvo uma ou duas criaturas e um Golpe que tem como alvo uma criatura podem ser combinados afetando uma só criatura, mas um Golpe que tem como alvo um humano ou uma área não poderá ser combinado a um Golpe que tem como alvo um pokémon). Além disso, ambos os Golpes devem usar o mesmo Atributo (Ataque ou Ataque Especial, não podendo nenhum dos dois ser de Campo ou Efeito) e nenhum dos Golpes deve possuir o Descritor Saraivada. Golpes combinados acontecem na ação do pokémon mais lento (o pokémon mais rápido espera para agir em sincronia com o outro, e só se desloca no momento da ação do outro). Só é feito um Teste de Acurácia, usando a média das Dificuldades de Acurácia. A rolagem de dano é a soma das rolagens dos danos dos Golpes. Cada Golpe tem sua Frequência impactada como se tivesse sido usado separadamente. Quaisquer descrições e Efeitos que um Golpe possua se aplicarão ao novo Golpe combinado como se ambos os Golpes fossem um só.",
  },
  {
    nome: "Apoio!",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "dois pokémons ativos seus ou um pokémon ativo seu e si.",
    efeito:
      "Enquanto seus dois pokémons ativos estiverem adjacentes um ao outro, nenhum dos dois pode ser Empurrado, portanto também não sofre dano por Empurrão. Você não pode ser Empurrado nem sofrer dano por Empurrão se estiver adjacente a um pokémon seu.",
  },
  {
    nome: "Assalto Duplo",
    classe: "Síncrono",
    requisitos: "Interferência.",
    frequencia: "Diária. A cada 8 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémons seu causa dano a um oponente que também sofreu dano de outro pokémon ativo seu nesta mesma rodada.",
    alvo: null,
    efeito:
      "o oponente perde uma Fase do Atributo mais alto de um de seus dois pokémons.",
  },
  {
    nome: "Com Eles!",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Diária.",
    gatilho: null,
    alvo: "seu pokémon ativo enquanto você está em uma batalha dupla ao lado de um aliado que possui o outro pokémon ativo aliado da batalha dupla.",
    efeito:
      "seu pokémon pode combinar um Golpe com o pokémon do seu aliado se os dois Golpes compartilharem o mesmo Tipo e puderem ter o mesmo alvo (por exemplo, um Golpe que tem como alvo uma ou duas criaturas e um Golpe que tem como alvo uma criatura podem ser combinados afetando uma só criatura, mas um Golpe que tem como alvo um humano ou uma área não poderá ser combinado a um Golpe que tem como alvo um pokémon). Além disso, ambos os Golpes devem usar o mesmo Atributo (Ataque ou Ataque Especial, não podendo nenhum dos dois ser de Campo ou Efeito) e nenhum dos Golpes deve possuir o Descritor Saraivada. Golpes combinados acontecem na ação do pokémon mais lento (o pokémon mais rápido espera para agir em sincronia com o outro, e só se desloca no momento da ação do outro). Só é feito um Teste de Acurácia, usando a média das Dificuldades de Acurácia. A rolagem de dano é a soma das rolagens dos danos dos Golpes. Cada Golpe tem sua Frequência impactada como se tivesse sido usado separadamente. Quaisquer descrições e Efeitos que um Golpe possua se aplicarão ao novo Golpe combinado como se ambos os Golpes fossem um só.",
  },
  {
    nome: "Combo!",
    classe: "Síncrono",
    requisitos: "Defesa 22.",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons ativos seus.",
    efeito:
      "os alvos podem combinar dois Golpes que podem ter o mesmo alvo (por exemplo, um Golpe que tem como alvo uma ou duas criaturas e um Golpe que tem como alvo uma criatura podem ser combinados afetando uma só criatura, mas um Golpe que tem como alvo um humano ou uma área não poderá ser combinado a um Golpe que tem como alvo um pokémon). Além disso, ambos os Golpes devem usar o mesmo Atributo (Ataque ou Ataque Especial, não podendo nenhum dos dois ser de Campo ou Efeito) e nenhum dos Golpes deve possuir o Descritor Saraivada. Golpes combinados acontecem na ação do pokémon mais lento (o pokémon mais rápido espera para agir em sincronia com o outro, e só se desloca no momento da ação do outro). Se forem de Tipos diferentes, eles serão considerados sem um tipo específico, ignorando quaisquer resistências, vulnerabilidades e imunidades. Só é feito um Teste de Acurácia, usando a média das Dificuldades de Acurácia. A rolagem de dano é a soma das rolagens dos danos dos Golpes. Cada Golpe tem sua Frequência impactada como se tivesse sido usado separadamente. Quaisquer descrições e Efeitos que um Golpe possua se aplicarão ao novo Golpe combinado como se ambos os Golpes fossem um só.",
  },
  {
    nome: "Impulso Sincronizado",
    classe: "Síncrono",
    requisitos: "Interferência.",
    frequencia: "Diária. A cada 5 Níveis, receba um uso diário adicional.",
    gatilho:
      "um pokémons seu causa dano a um oponente que também sofreu dano de outro pokémon ativo seu nesta mesma rodada.",
    alvo: null,
    efeito:
      "o pokémon inimigo é Empurrado um número de metros em uma direção à sua escolha igual à soma das Forças de seus pokémons ativos.",
  },
  {
    nome: "Interferência",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "um pokémon que foi acertado por dois pokémons seus nesta rodada.",
    efeito:
      "a Dificuldade da Acurácia do alvo aumenta em 2 no turno dele se tiver como alvo(s) seu(s) pokémon(s).",
  },
  {
    nome: "Por um Amigo",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um de seus dois pokémons adjacentes é alvo de um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MA. Se o resultado for 16 ou mais, o pokémon ativo que não havia sido o alvo original do Golpe pode interceptá-lo se tornando o alvo no lugar do pokémon que originalmente sofreria o Golpe. Se o Golpe tem como alvo uma área que inclui ambos os pokémons, um de seus pokémons pode escolher sofrer todo o dano, recebendo os efeitos do Golpe duas vezes.",
  },
  {
    nome: "Por um Amigo +",
    classe: "Síncrono",
    requisitos: "Por um Amigo.",
    frequencia: "Diária. A cada 10 Níveis, receba um uso diário adicional.",
    gatilho: "um de seus dois pokémons adjacentes é alvo de um Golpe.",
    alvo: null,
    efeito:
      "role 1d20 + MA. Se o resultado for 11 ou mais, o pokémon ativo que não havia sido o alvo original do Golpe pode interceptá-lo se tornando o alvo no lugar do pokémon que originalmente sofreria o Golpe. Se o Golpe tem como alvo uma área que inclui ambos os pokémons, um de seus pokémons pode escolher sofrer todo o dano, recebendo os efeitos do Golpe duas vezes. Este Talento substitui Treinamento de Especialista.",
  },
  {
    nome: "Tentem Isso!",
    classe: "Síncrono",
    requisitos: "Combo!",
    frequencia: "Diária.",
    gatilho: null,
    alvo: "dois pokémons ativos seus.",
    efeito:
      "os alvos podem combinar dois Golpes não causadores de dano se ambos puderem ter o mesmo alvo (por exemplo, um Golpe que tem como alvo uma ou duas criaturas e um Golpe que tem como alvo uma criatura podem ser combinados afetando uma só criatura, mas um Golpe que tem como alvo um humano ou uma área não poderá ser combinado a um Golpe que tem como alvo um pokémon). Nenhum dos Golpes podem copiar outros Golpes, afetar Pontos de Vida nem possuir o Descritor Barreira. Golpes combinados acontecem na ação do pokémon mais lento (o pokémon mais rápido espera para agir em sincronia com o outro, e só se desloca no momento da ação do outro). Só é feito um Teste de Acurácia, usando a média das Dificuldades de Acurácia. Cada Golpe tem sua Frequência impactada como se tivesse sido usado separadamente. Quaisquer descrições e Efeitos que um Golpe possua se aplicarão ao novo Golpe combinado como se ambos os Golpes fossem um só.",
  },
  {
    nome: "Trabalho em Equipe",
    classe: "Síncrono",
    requisitos: null,
    frequencia: "Constante.",
    gatilho: null,
    alvo: "dois pokémons ativos seus.",
    efeito:
      "adicione metade de seu MA a um dos tipos de Deslocamentos dos alvos. Em cada alvo, o Deslocamento que recebe este bônus é aquele que o outro alvo possui mais alto naturalmente.",
  },
];

export default Talentos;
