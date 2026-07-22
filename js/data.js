/* ============================================================
   data.js — Banco de conteúdo (missões e exercícios)
   Cada matéria tem "missões". Cada missão tem uma explicação
   curta + uma lista de exercícios (desafios).
   ============================================================ */

const QUEST_DATA = {
  subjects: [
    {
      id: "mat",
      name: "Matemática",
      icon: "🔢",
      color: "#4FD1C5",
      missions: [
        {
          id: "mat-1",
          title: "O que é uma fração",
          explanation:
            "Uma fração representa uma parte de um todo dividido em pedaços iguais. Ela tem dois números: o de cima (numerador) mostra quantas partes você tem, e o de baixo (denominador) mostra em quantas partes o todo foi dividido.",
          exercises: [
            {
              id: "mat-1-1",
              type: "mc",
              q: "Em 3/4, qual número é o denominador?",
              options: ["3", "4", "7", "1"],
              answer: 1,
              hint: "O denominador fica embaixo do traço.",
            },
            {
              id: "mat-1-2",
              type: "mc",
              q: "Uma pizza foi cortada em 8 pedaços. Você comeu 2. Que fração representa isso?",
              options: ["8/2", "2/6", "2/8", "6/8"],
              answer: 2,
              hint: "Numerador = partes que você comeu. Denominador = total de partes.",
            },
          ],
        },
        {
          id: "mat-2",
          title: "Comparando frações",
          explanation:
            "Quando duas frações têm o mesmo denominador, a maior é aquela com o numerador maior. Pense em fatias do mesmo tamanho: quem tem mais fatias, tem mais pizza!",
          exercises: [
            {
              id: "mat-2-1",
              type: "mc",
              q: "Qual fração é maior: 3/5 ou 4/5?",
              options: ["3/5", "4/5", "São iguais", "Não dá pra saber"],
              answer: 1,
              hint: "Mesmo denominador — compare só o de cima.",
            },
            {
              id: "mat-2-2",
              type: "mc",
              q: "1/2 é o mesmo que:",
              options: ["2/4", "1/4", "3/4", "1/3"],
              answer: 0,
              hint: "Multiplique numerador e denominador pelo mesmo número.",
            },
          ],
        },
        {
          id: "mat-3",
          title: "Somando frações (mesmo denominador)",
          explanation:
            "Para somar frações com o mesmo denominador, some apenas os numeradores e mantenha o denominador igual. Exemplo: 1/5 + 2/5 = 3/5.",
          exercises: [
            {
              id: "mat-3-1",
              type: "mc",
              q: "Quanto é 2/6 + 3/6?",
              options: ["5/12", "5/6", "6/6", "1/6"],
              answer: 1,
              hint: "Some só os números de cima.",
            },
            {
              id: "mat-3-2",
              type: "text",
              q: "Escreva o resultado de 1/4 + 1/4 (na forma a/b).",
              answer: "2/4",
              altAnswers: ["1/2", "2/4"],
              hint: "Some os numeradores e simplifique se puder.",
            },
          ],
        },
        {
          id: "mat-4",
          title: "Fração de uma quantidade",
          explanation:
            "Para achar a fração de uma quantidade, divida o total pelo denominador e depois multiplique pelo numerador. Exemplo: 1/4 de 20 → 20 ÷ 4 = 5.",
          exercises: [
            {
              id: "mat-4-1",
              type: "mc",
              q: "Quanto é 1/3 de 12?",
              options: ["3", "4", "6", "9"],
              answer: 1,
              hint: "12 ÷ 3 = ?",
            },
            {
              id: "mat-4-2",
              type: "mc",
              q: "Quanto é 2/5 de 25?",
              options: ["5", "10", "15", "20"],
              answer: 1,
              hint: "Primeiro ache 1/5 de 25, depois multiplique por 2.",
            },
          ],
        },
        {
          id: "mat-5",
          title: "Frações no dia a dia",
          explanation:
            "Frações aparecem o tempo todo: meia pizza, um quarto de hora, três quartos de um copo de suco. Reconhecer isso ajuda a entender que matemática não é só número no papel.",
          exercises: [
            {
              id: "mat-5-1",
              type: "mc",
              q: "'Meia hora' representa qual fração de uma hora?",
              options: ["1/4", "1/2", "1/3", "3/4"],
              answer: 1,
              hint: "Uma hora tem 60 minutos. Meia hora tem 30.",
            },
            {
              id: "mat-5-2",
              type: "text",
              q: "Se você bebeu 3/4 de um copo de suco, que fração ainda falta beber? (a/b)",
              answer: "1/4",
              altAnswers: ["1/4"],
              hint: "O copo inteiro é 4/4.",
            },
          ],
        },
      ],
    },
    {
      id: "port",
      name: "Português",
      icon: "📖",
      color: "#FF8FB1",
      missions: [
        {
          id: "port-1",
          title: "Ideia central do texto",
          explanation:
            "Todo texto tem um assunto principal — a ideia central. Para encontrá-la, pergunte: 'do que esse texto fala, na maior parte do tempo?' Geralmente ela aparece logo no começo.",
          exercises: [
            {
              id: "port-1-1",
              type: "mc",
              text: "\"Os golfinhos são animais muito inteligentes. Eles se comunicam por sons, vivem em grupos organizados e até reconhecem seu próprio reflexo no espelho.\"",
              q: "Qual é a ideia central desse texto?",
              options: [
                "Golfinhos vivem no mar",
                "Golfinhos são inteligentes",
                "Espelhos refletem imagens",
                "Animais fazem sons",
              ],
              answer: 1,
              hint: "Veja o que se repete ou é reforçado no texto.",
            },
          ],
        },
        {
          id: "port-2",
          title: "Informação explícita x implícita",
          explanation:
            "Informação explícita está escrita direto no texto — é só encontrar. Informação implícita não está escrita, mas dá para deduzir juntando pistas, como um detetive.",
          exercises: [
            {
              id: "port-2-1",
              type: "mc",
              text: "\"Maria pegou o guarda-chuva antes de sair de casa.\"",
              q: "O que podemos deduzir (informação implícita)?",
              options: [
                "Maria tem um guarda-chuva",
                "Estava chovendo ou parecia que ia chover",
                "Maria saiu de casa",
                "Maria mora sozinha",
              ],
              answer: 1,
              hint: "Por que alguém pegaria um guarda-chuva?",
            },
          ],
        },
        {
          id: "port-3",
          title: "Sentido das palavras pelo contexto",
          explanation:
            "Quando você não conhece uma palavra, o contexto (as palavras ao redor) ajuda a descobrir o significado. Isso é muito mais rápido do que parar tudo para ir no dicionário.",
          exercises: [
            {
              id: "port-3-1",
              type: "mc",
              text: "\"O menino estava exausto depois do treino: mal conseguia levantar os braços.\"",
              q: "O que significa 'exausto' nesse contexto?",
              options: ["Feliz", "Muito cansado", "Com fome", "Machucado"],
              answer: 1,
              hint: "'Mal conseguia levantar os braços' dá uma pista forte.",
            },
          ],
        },
        {
          id: "port-4",
          title: "Personagens e narrador",
          explanation:
            "Em uma narrativa, o narrador é quem 'conta' a história — pode ser um personagem (1ª pessoa, 'eu') ou alguém de fora observando tudo (3ª pessoa, 'ele/ela').",
          exercises: [
            {
              id: "port-4-1",
              type: "mc",
              text: "\"Eu corri o mais rápido que pude, mas cheguei atrasado na aula.\"",
              q: "Esse texto está narrado em qual pessoa?",
              options: ["1ª pessoa", "3ª pessoa", "2ª pessoa", "Não tem narrador"],
              answer: 0,
              hint: "Procure o pronome usado: 'eu' ou 'ele/ela'?",
            },
          ],
        },
        {
          id: "port-5",
          title: "Fato x opinião",
          explanation:
            "Um fato pode ser comprovado (ex.: 'chove hoje'). Uma opinião é o que alguém acha ou sente (ex.: 'a chuva é chata'). Saber diferenciar ajuda a ler notícias com espírito crítico.",
          exercises: [
            {
              id: "port-5-1",
              type: "mc",
              q: "Qual frase é uma OPINIÃO?",
              options: [
                "A água ferve a 100°C",
                "O Brasil fica na América do Sul",
                "Esse é o melhor filme do ano",
                "O ano tem 12 meses",
              ],
              answer: 2,
              hint: "Opinião não pode ser 'provada certa ou errada' — é um julgamento pessoal.",
            },
          ],
        },
      ],
    },
  ],
};

/* Palavras-chave esperadas no Modo "Ensine o Sistema" (Feynman simplificado) */
const FEYNMAN_TOPICS = [
  {
    id: "fey-fracoes",
    subjectId: "mat",
    title: "Frações",
    prompt: "Explique com suas palavras o que é uma fração e para que ela serve.",
    keywords: ["parte", "todo", "numerador", "denominador", "dividir", "pedaço", "inteiro"],
  },
  {
    id: "fey-interpretacao",
    subjectId: "port",
    title: "Interpretação de texto",
    prompt: "Explique com suas palavras o que é 'ideia central' de um texto e como encontrá-la.",
    keywords: ["assunto", "principal", "resumo", "tema", "texto", "começo", "repete"],
  },
];
