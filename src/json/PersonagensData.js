 const PersonagensData = [
  {
    id: 1,
    nome: "Astaroth",
    jogador: "André",
    imagem: require("../images/astaroth.png"),
    n_reg_pokedex: 64,
    alinhamento: "Leal e Mau",
    classe: [
      "Treinador",
      "Lutador"
    ],
    nivel: 25,
    titulo_ou_afiliacao: null,
    status: {
      saude: 10,
      ataque: 21,
      defesa: 10,
      ataque_especial: 21,
      defesa_especial: 10,
      velocidade: 10
    },
    pontos_de_vida: 144,
    dano_de_armas: null,
    evasao: {
      fisica: 2,
      especial: 2,
      veloz: 2
    },
    deslocamentos: {
      terrestre: 5,
      escavacao: 0,
      natacao: 4,
      subaquatico: 3,
      voo: 0
    },
    pericias: [
      "História",
      "Investigação",
      "Manha"
    ],
    talentos: [
      "Armas",
      "Pokedex",
      "Ataques Aprimorados",
      "Treinamento Aprimorado",
      "Dê Tudo de Si!",
      "Rotina de Exercícios",
      "Exercício Brutal",
      "Crítica Construtiva",
      "Ataques Aprimorados +",
      "Já Ouvi Falar!",
      "Galera Vê Só",
      "Rotina de Exercícios",
      "Subversão Estatística",
      "Treinamento de Especialista",
      "Pressão",
      "Pressão +",
      "Abundância",
      "Explosão de Atributo",
      "Competência Fixa",
      "Buscador de Talentos",
      "Desbloquear Atributo",
      "Transpassar",
      "Ataques Aprimorados ++",
      "Capataz",
      "Afirmação",
      "Mega!",
      "Dê-me Espaço"
    ],
    pokemons: [
      {
        id: 1,
        nome: "Absol",
        treinador: "Astaroth",
        nature: "Adamant",
        tipo: [
          "Dark"
        ],
        nivel: 51,
        pontos_de_vida: 264,
        status: {
          saude: 15,
          ataque: 36,
          defesa: 14,
          atq_esp: 4,
          def_esp: 16,
          velocidade: 17
        },
        evasao: {
          fisica: 5,
          especial: 7,
          veloz: 7
        },
        bonus_elemental: 10,
        ataques: [
          "Mordida",
          "Lâmina de Vento",
          "Retalhar",
          "Cabeçada Zen",
          "Dança das Espadas",
          "Corte Psíquico",
          "Multiplicar",
          "Emboscada"
        ],
        habilidades: [
          "Sorte",
          "Pressão"
        ],
        caracteristicas: [
          "Aura",
          "Faro",
          "Silêncio"
        ]
      },
      {
        id: 2,
        nome: "Scizor",
        treinador: "Astaroth",
        nature: "Adamant",
        tipo: [
          "Inseto",
          "Metal"
        ],
        nivel: 51,
        pontos_de_vida: 256,
        status: {
          saude: 13,
          ataque: 40,
          defesa: 17,
          atq_esp: 4,
          def_esp: 16,
          velocidade: 12
        },
        evasao: {
          fisica: 7,
          especial: 7,
          veloz: 7
        },
        bonus_elemental: 10,
        ataques: [
          "Metalizar Garra",
          "Lâmina de Vento",
          "Emboscada",
          "Corte em X",
          "Ataque de Asa",
          "Ataque Rápido",
          "Perseguição",
          "Agilidade"
        ],
        habilidades: [
          "Técnica",
          "Metal Leve"
        ],
        caracteristicas: null
      },
      {
        id: 3,
        nome: "Marowak-Alola",
        treinador: "Astaroth",
        nature: "Adamant",
        tipo: [
          "Fogo",
          "Fantasma"
        ],
        nivel: 51,
        pontos_de_vida: 260,
        status: {
          saude: 14,
          ataque: 30,
          defesa: 20,
          atq_esp: 6,
          def_esp: 15,
          velocidade: 9
        },
        evasao: {
          fisica: 8,
          especial: 8,
          veloz: 5
        },
        bonus_elemental: 10,
        ataques: [
          "Cólera",
          "Açoite",
          "Osso Sombrio",
          "Anel de Fogo",
          "Feitiço",
          "Fogo-Fátuo",
          "Onda de Calor",
          "Trocar de Lugar"
        ],
        habilidades: [
          "Cabeça Dura",
          "Pararraios"
        ],
        caracteristicas: [
          "Alcance",
          "Hierarquia"
        ]
      },
      {
        id: 4,
        nome: "Aegislash-Shield",
        treinador: "Astaroth",
        nature: "Careful",
        tipo: [
          "Metal",
          "Fantasma"
        ],
        nivel: 51,
        pontos_de_vida: 260,
        status: {
          saude: 17,
          ataque: 5,
          defesa: 35,
          atq_esp: 3,
          def_esp: 37,
          velocidade: 6
        },
        evasao: {
          fisica: 9,
          especial: 9,
          veloz: 2
        },
        bonus_elemental: 10,
        ataques: [
          "Espada Sagrada",
          "Escudo Real",
          "Sombra Traiçoeira",
          "Golpe Aéreo",
          "Corte Furioso",
          "Cabeça de Ferro",
          "Dança das Espadas",
          "Transferência"
        ],
        habilidades: [
          "Guarda Baixa",
          "Posturas"
        ],
        caracteristicas: [
          "Afundamento",
          "Obrigatoriedade"
        ]
      },
      {
        id: 5,
        nome: "Mamoswine",
        treinador: "Astaroth",
        nature: "Lax",
        tipo: [
          "Terra",
          "Gelo"
        ],
        nivel: 51,
        pontos_de_vida: 324,
        status: {
          saude: 30,
          ataque: 33,
          defesa: 21,
          atq_esp: 7,
          def_esp: 4,
          velocidade: 8
        },
        evasao: {
          fisica: 9,
          especial: 5,
          veloz: 4
        },
        bonus_elemental: 10,
        ataques: [
          "Terremoto",
          "Resistência",
          "Derrubada",
          "Açoite",
          "Estaca de Gelo",
          "Lanças de Gelo",
          "Farejar",
          "Poder Antigo"
        ],
        habilidades: [
          "Manto de Neve",
          "Gordura"
        ],
        caracteristicas: [
          "Congelação",
          "Frio",
          "Geleira"
        ]
      }
    ]
  },
  {
    id: 2,
    nome: "Feist Falcone",
    imagem: require("../images/feist_falcone.jpg"),
    jogador: "Marcos",
    n_reg_pokedex: 64,
    alinhamento: "Leal e Mau",
    classe: [
      "Místico",
      "Ilusionista",
      "Treinador",
      "Elementalista"
    ],
    nivel: 25,
    titulo_ou_afiliacao: null,
    status: {
      saude: 13,
      ataque: 16,
      defesa: 17,
      ataque_especial: 15,
      defesa_especial: 12,
      velocidade: 10
    },
    pontos_de_vida: 152,
    dano_de_armas: "1d6+6",
    evasao: {
      fisica: 3,
      especial: 2,
      veloz: 2
    },
    deslocamentos: {
      terrestre: 5,
      escavacao: 0,
      natacao: 4,
      subaquatico: 3,
      voo: 0
    },
    pericias: [
      "Imunidade",
      "Intimidação",
      "Concentração",
      "Deflexão",
      "Investigação",
      "Empatia",
      "Manipulação",
      "Furtividade"
    ],
    talentos: [
      "Armas",
      "Pokedex",
      "Arma de Escolha",
      "Dê-me Espaço",
      "Dê Tudo de Si!",
      "Canalizar",
      "Permissão",
      "Misticismo",
      "Compartilhar Percepção",
      "Imitação",
      "Indiscernível",
      "Canalizar Amigo",
      "Ataques Aprimorados",
      "Treinamento Aprimorado",
      "Aprimorar Golpes Elementais",
      "Treinamento Especial",
      "Intimidar",
      "Foco",
      "Elementalismo",
      "Golpe Elemental",
      "Crítica Construtiva",
      "Mudança de Tipo",
      "Conversão",
      "Mórfico"
    ],
    pokemons: [
      {
        id: 1,
        nome: "Sharpedo",
        treinador: "Feist Falcone",
        nature: "Adamant",
        tipo: [
          "Dark",
          "Àgua"
        ],
        nivel: 50,
        pontos_de_vida: 248,
        status: {
          saude: 12,
          ataque: 34,
          defesa: 9,
          atq_esp: 13,
          def_esp: 9,
          velocidade: 20
        },
        evasao: {
          fisica: 5,
          especial: 5,
          veloz: 9
        },
        bonus_elemental: 10,
        ataques: [
          "Retalhar",
          "Míssil Aquático",
          "Presa de Gelo",
          "Mastigada",
          "Presa Venenosa",
          null,
          null,
          null
        ],
        habilidades: [
          "Aspereza",
          "Explosão de Velocidade"
        ],
        caracteristicas: [
          "Guelras"
        ]
      },
      {
        id: 2,
        nome: "Umbreon",
        treinador: "Feist Falcone",
        nature: "Jolly",
        tipo: [
          "Dark"
        ],
        nivel: 50,
        pontos_de_vida: 280,
        status: {
          saude: 20,
          ataque: 12,
          defesa: 21,
          atq_esp: 9,
          def_esp: 23,
          velocidade: 19
        },
        evasao: {
          fisica: 6,
          especial: 8,
          veloz: 9
        },
        bonus_elemental: 20,
        ataques: [
          "Perseguição",
          "Ataque Furtivo",
          "Cauda de Ferro",
          "Trapaça",
          "Raio de Confusão",
          "Guincho",
          "Luar",
          "Olhar Paralisante"
        ],
        habilidades: [
          "Adaptabilidade",
          "Sincronizar"
        ],
        caracteristicas: [
          "Faro",
          "Silêncio"
        ]
      },
      {
        id: 3,
        nome: "Zoroark",
        treinador: "Feist Falcone",
        nature: "Impish",
        tipo: [
          "Dark"
        ],
        nivel: 50,
        pontos_de_vida: 248,
        status: {
          saude: 12,
          ataque: 31,
          defesa: 13,
          atq_esp: 14,
          def_esp: 6,
          velocidade: 26
        },
        evasao: {
          fisica: 5,
          especial: 6,
          veloz: 8
        },
        bonus_elemental: 10,
        ataques: [
          "Emboscada",
          "Perseguição",
          "Garras Furiosas",
          "Ataque Furtivo",
          "Afiar",
          "Provocação",
          "Trapaça",
          "Agilidade"
        ],
        habilidades: [
          "Ilusão"
        ],
        caracteristicas: [
          "Faro",
          "Hierarquia",
          "Silêncio"
        ]
      },
      {
        id: 4,
        nome: "Weavile",
        treinador: "Feist Falcone",
        nature: "Jolly",
        tipo: [
          "Dark",
          "Gelo"
        ],
        nivel: 50,
        pontos_de_vida: 268,
        status: {
          saude: 17,
          ataque: 27,
          defesa: 12,
          atq_esp: 3,
          def_esp: 14,
          velocidade: 30
        },
        evasao: {
          fisica: 6,
          especial: 6,
          veloz: 9
        },
        bonus_elemental: 10,
        ataques: [
          "Metalizar Garra",
          "Lançamento",
          "Afiar",
          "Furto",
          "Guincho",
          "Vento Gelado",
          null,
          null
        ],
        habilidades: [
          "Gatuno",
          "Foco Interior"
        ],
        caracteristicas: [
          "Geleira",
          "Silêncio"
        ]
      }
    ]
  }
];

export default PersonagensData;