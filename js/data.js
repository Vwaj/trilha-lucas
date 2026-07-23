/* ============================================================
   data.js — Banco de conteúdo (fases, missões, exercícios)
   Estrutura: cada matéria tem "fases" (~10 exercícios cada).
   Cada fase tem 2 missões (mini-aulas) com 5 exercícios cada.
   Ao final de cada fase, uma Recapitulação é gerada automaticamente
   (ver srs.js) reaproveitando os exercícios daquela fase.
   ============================================================ */

const QUEST_DATA = {
  subjects: [
    /* ==================== MATEMÁTICA ==================== */
    {
      id: "mat", name: "Matemática", icon: "🔢", color: "#4FD1C5",
      fases: [
        {
          id: "mat-f1", title: "Fase 1 · Números e Frações Básicas",
          missions: [
            {
              id: "mat-1-1", title: "O que é uma fração",
              explanation:
                "Uma fração representa uma <b>parte de um todo</b> dividido em pedaços iguais. Ela tem dois números: o de cima (<b>numerador</b>) mostra quantas partes você tem, e o de baixo (<b>denominador</b>) mostra em quantas partes o todo foi dividido.<br><br>📌 <b>Exemplo:</b> se uma pizza é cortada em 4 pedaços e você come 1, isso é 1/4 da pizza — numerador 1, denominador 4.",
              exercises: [
                { id: "mat-1-1-1", type: "mc", q: "Em 3/4, qual número é o denominador?", options: ["3", "4", "7", "1"], answer: 1, hint: "O denominador fica embaixo do traço." },
                { id: "mat-1-1-2", type: "mc", q: "Uma pizza foi cortada em 8 pedaços. Você comeu 2. Que fração representa isso?", options: ["8/2", "2/6", "2/8", "6/8"], answer: 2, hint: "Numerador = partes que você comeu. Denominador = total de partes." },
                { id: "mat-1-1-3", type: "mc", q: "Em 5/9, qual número é o numerador?", options: ["5", "9", "4", "14"], answer: 0, hint: "O numerador fica em cima do traço." },
                { id: "mat-1-1-4", type: "text", q: "Se um bolo foi dividido em 7 partes e você comeu 3, escreva essa fração (a/b).", answer: "3/7", hint: "Numerador = partes comidas, denominador = total." },
                { id: "mat-1-1-5", type: "mc", q: "Qual fração representa 'metade'?", options: ["1/3", "1/2", "2/3", "1/4"], answer: 1, hint: "Metade é uma parte de duas iguais." }
              ]
            },
            {
              id: "mat-1-2", title: "Comparando frações",
              explanation:
                "Quando duas frações têm o <b>mesmo denominador</b>, a maior é aquela com o numerador maior. Pense em fatias do mesmo tamanho: quem tem mais fatias, tem mais pizza!<br><br>📌 <b>Exemplo:</b> entre 2/5 e 4/5, a segunda é maior, porque 4 fatias de quinto é mais do que 2.",
              exercises: [
                { id: "mat-1-2-1", type: "mc", q: "Qual fração é maior: 3/5 ou 4/5?", options: ["3/5", "4/5", "São iguais", "Não dá pra saber"], answer: 1, hint: "Mesmo denominador — compare só o de cima." },
                { id: "mat-1-2-2", type: "mc", q: "1/2 é o mesmo que:", options: ["2/4", "1/4", "3/4", "1/3"], answer: 0, hint: "Multiplique numerador e denominador pelo mesmo número." },
                { id: "mat-1-2-3", type: "mc", q: "Qual fração é menor: 2/9 ou 5/9?", options: ["2/9", "5/9", "São iguais", "Depende"], answer: 0, hint: "Mesmo denominador — o menor numerador é a menor fração." },
                { id: "mat-1-2-4", type: "text", q: "Escreva uma fração equivalente a 2/3, multiplicando numerador e denominador por 2 (a/b).", answer: "4/6", hint: "2×2=4 e 3×2=6." },
                { id: "mat-1-2-5", type: "mc", q: "Comparando 3/4 e 2/4, qual é maior?", options: ["3/4", "2/4", "São iguais", "Depende"], answer: 0, hint: "Mesmo denominador — compare o numerador." }
              ]
            }
          ]
        },
        {
          id: "mat-f2", title: "Fase 2 · Operações com Frações",
          missions: [
            {
              id: "mat-2-1", title: "Somando e subtraindo frações",
              explanation:
                "Para somar ou subtrair frações com o <b>mesmo denominador</b>, opere apenas os numeradores e mantenha o denominador igual.<br><br>📌 <b>Exemplo:</b> 1/5 + 2/5 = 3/5 (o denominador 5 não muda).",
              exercises: [
                { id: "mat-2-1-1", type: "mc", q: "Quanto é 2/6 + 3/6?", options: ["5/12", "5/6", "6/6", "1/6"], answer: 1, hint: "Some só os números de cima." },
                { id: "mat-2-1-2", type: "text", q: "Escreva o resultado de 1/4 + 1/4 (a/b).", answer: "2/4", altAnswers: ["1/2"], hint: "Some os numeradores." },
                { id: "mat-2-1-3", type: "mc", q: "Quanto é 5/7 − 2/7?", options: ["3/7", "7/7", "3/14", "2/7"], answer: 0, hint: "Subtraia só os numeradores." },
                { id: "mat-2-1-4", type: "mc", q: "Quanto é 4/9 + 4/9?", options: ["8/18", "8/9", "9/9", "4/9"], answer: 1, hint: "Some os numeradores, mantenha o denominador." },
                { id: "mat-2-1-5", type: "text", q: "Escreva o resultado de 6/8 − 3/8 (a/b).", answer: "3/8", hint: "Subtraia os numeradores." }
              ]
            },
            {
              id: "mat-2-2", title: "Fração de uma quantidade",
              explanation:
                "Para achar a fração de uma quantidade, <b>divida</b> o total pelo denominador e depois <b>multiplique</b> pelo numerador.<br><br>📌 <b>Exemplo:</b> 1/4 de 20 → 20 ÷ 4 = 5.",
              exercises: [
                { id: "mat-2-2-1", type: "mc", q: "Quanto é 1/3 de 12?", options: ["3", "4", "6", "9"], answer: 1, hint: "12 ÷ 3 = ?" },
                { id: "mat-2-2-2", type: "mc", q: "Quanto é 2/5 de 25?", options: ["5", "10", "15", "20"], answer: 1, hint: "Ache 1/5 de 25, depois multiplique por 2." },
                { id: "mat-2-2-3", type: "mc", q: "Quanto é 3/4 de 20?", options: ["5", "10", "15", "20"], answer: 2, hint: "20 ÷ 4 = 5, depois × 3." },
                { id: "mat-2-2-4", type: "text", q: "Quanto é 1/2 de 18?", answer: "9", hint: "18 ÷ 2 = ?" },
                { id: "mat-2-2-5", type: "mc", q: "Quanto é 2/3 de 9?", options: ["3", "6", "7", "9"], answer: 1, hint: "9 ÷ 3 = 3, depois × 2." }
              ]
            }
          ]
        },
        {
          id: "mat-f3", title: "Fase 3 · Números Decimais",
          missions: [
            {
              id: "mat-3-1", title: "Casas decimais",
              explanation:
                "Números decimais usam uma <b>vírgula</b> pra representar partes menores que o inteiro. Cada casa depois da vírgula vale 10 vezes menos que a anterior: décimos, centésimos, milésimos.<br><br>📌 <b>Exemplo:</b> em 45,872 → o 8 é décimo, o 7 é centésimo, o 2 é milésimo.",
              exercises: [
                { id: "mat-3-1-1", type: "mc", q: "No número 45,872, o algarismo logo após a vírgula representa:", options: ["dezenas", "décimos", "centésimos", "milésimos"], answer: 1, hint: "A primeira casa depois da vírgula é a dos décimos." },
                { id: "mat-3-1-2", type: "mc", q: "Qual é maior: 3,4 ou 3,25?", options: ["3,4", "3,25", "São iguais", "Depende"], answer: 0, hint: "Compare casa por casa depois da vírgula." },
                { id: "mat-3-1-3", type: "text", q: "Escreva 'meio' na forma decimal.", answer: "0,5", altAnswers: ["0.5"], hint: "Meio é a metade de um inteiro." },
                { id: "mat-3-1-4", type: "mc", q: "O número 2,5 tem quantas casas decimais?", options: ["0", "1", "2", "3"], answer: 1, hint: "Conte os números depois da vírgula." },
                { id: "mat-3-1-5", type: "mc", q: "Qual valor é o mesmo que R$ 3,50?", options: ["3 reais e 5 centavos", "3 reais e 50 centavos", "35 reais", "350 reais"], answer: 1, hint: "Depois da vírgula são os centavos." }
              ]
            },
            {
              id: "mat-3-2", title: "Somando e subtraindo decimais",
              explanation:
                "Pra somar ou subtrair decimais, <b>alinhe a vírgula embaixo da vírgula</b> antes de operar.<br><br>⚠️ Cuidado: 4,5 + 2,37 não é 6,7 — é 6,87!",
              exercises: [
                { id: "mat-3-2-1", type: "mc", q: "Quanto é 3,2 + 1,45?", options: ["4,65", "4,47", "3,65", "4,75"], answer: 0, hint: "Alinhe as vírgulas antes de somar." },
                { id: "mat-3-2-2", type: "text", q: "Quanto é 7,8 − 2,3?", answer: "5,5", hint: "Alinhe as vírgulas." },
                { id: "mat-3-2-3", type: "mc", q: "Quanto é 5,0 − 1,25?", options: ["3,75", "3,25", "4,75", "3,85"], answer: 0, hint: "Complete com zeros se precisar: 5,00 − 1,25." },
                { id: "mat-3-2-4", type: "mc", q: "Você comprou um lanche de R$ 8,50 e um suco de R$ 3,25. Quanto gastou no total?", options: ["11,75", "11,25", "12,75", "10,75"], answer: 0, hint: "Some os dois valores alinhando a vírgula." },
                { id: "mat-3-2-5", type: "text", q: "Quanto é 10 − 4,5?", answer: "5,5", hint: "Pense em 10,0 − 4,5." }
              ]
            }
          ]
        },
        {
          id: "mat-f4", title: "Fase 4 · Porcentagem, Múltiplos e Divisores",
          missions: [
            {
              id: "mat-4-1", title: "Porcentagem básica",
              explanation:
                "Porcentagem compara uma parte com o todo, imaginando que o todo tem <b>100 partes iguais</b>. O símbolo % significa 'de cada 100'.<br><br>📌 <b>Truque:</b> pra achar X% de um número, multiplique por X e divida por 100. Ex.: 20% de 50 → 50×20÷100 = 10.",
              exercises: [
                { id: "mat-4-1-1", type: "mc", q: "10% de 200 é igual a:", options: ["10", "20", "100", "2"], answer: 1, hint: "200 × 10 ÷ 100." },
                { id: "mat-4-1-2", type: "mc", q: "Quanto é 25% de 80?", options: ["15", "20", "25", "30"], answer: 1, hint: "25% é o mesmo que 1/4." },
                { id: "mat-4-1-3", type: "text", q: "Quanto é 50% de 60?", answer: "30", hint: "50% é a metade." },
                { id: "mat-4-1-4", type: "mc", q: "Uma loja deu 20% de desconto num tênis de R$ 150,00. Qual é o preço com desconto?", options: ["100", "120", "130", "140"], answer: 1, hint: "20% de 150 é 30. Depois subtraia." },
                { id: "mat-4-1-5", type: "mc", q: "100% de um número é:", options: ["o dobro dele", "a metade dele", "o próprio número", "zero"], answer: 2, hint: "100% representa o todo inteiro." }
              ]
            },
            {
              id: "mat-4-2", title: "Múltiplos, divisores, MMC e MDC",
              explanation:
                "<b>Múltiplos</b> de um número vêm de multiplicá-lo por 1,2,3... <b>Divisores</b> são números que cabem exatamente nele. <b>MMC</b> é o menor múltiplo comum entre dois números; <b>MDC</b> é o maior divisor comum entre eles.<br><br>📌 <b>Exemplo:</b> MMC(4,6)=12 · MDC(12,18)=6.",
              exercises: [
                { id: "mat-4-2-1", type: "mc", q: "Qual é o MMC entre 4 e 6?", options: ["10", "12", "18", "24"], answer: 1, hint: "Liste os múltiplos de cada um até encontrar o primeiro em comum." },
                { id: "mat-4-2-2", type: "mc", q: "Qual NÃO é múltiplo de 7?", options: ["14", "21", "30", "28"], answer: 2, hint: "Divida cada opção por 7 e veja se dá exato." },
                { id: "mat-4-2-3", type: "mc", q: "Quantos divisores tem o número 12 (incluindo 1 e ele mesmo)?", options: ["4", "5", "6", "12"], answer: 2, hint: "1,2,3,4,6,12 — conte todos." },
                { id: "mat-4-2-4", type: "mc", q: "Qual é o MDC entre 12 e 18?", options: ["3", "6", "9", "12"], answer: 1, hint: "Liste os divisores dos dois números e ache o maior em comum." },
                { id: "mat-4-2-5", type: "mc", q: "O MMC é muito usado para:", options: ["dividir grupos iguais", "somar frações com denominadores diferentes", "multiplicar decimais", "comparar porcentagens"], answer: 1, hint: "Pense em igualar os denominadores." }
              ]
            }
          ]
        },
        {
          id: "mat-f5", title: "Fase 5 · Geometria e Problemas do Dia a Dia",
          missions: [
            {
              id: "mat-5-1", title: "Perímetro e área",
              explanation:
                "<b>Perímetro</b> é a medida do contorno de uma figura (some todos os lados). <b>Área</b> é o espaço interno dela — em um retângulo, área = base × altura.<br><br>📌 <b>Exemplo:</b> retângulo 6×4 → perímetro = 6+6+4+4 = 20; área = 6×4 = 24.",
              exercises: [
                { id: "mat-5-1-1", type: "mc", q: "Um retângulo tem 5 cm de base e 3 cm de altura. Qual é sua área?", options: ["8 cm²", "15 cm²", "16 cm", "10 cm²"], answer: 1, hint: "Área = base × altura." },
                { id: "mat-5-1-2", type: "text", q: "Um quadrado tem lado 6 cm. Qual é o seu perímetro?", answer: "24", hint: "Some os 4 lados iguais." },
                { id: "mat-5-1-3", type: "mc", q: "Qual é a área de um quadrado de lado 4 cm?", options: ["8", "12", "16", "20"], answer: 2, hint: "Área do quadrado = lado × lado." },
                { id: "mat-5-1-4", type: "mc", q: "Qual é o perímetro de um retângulo com base 7 cm e altura 2 cm?", options: ["9", "14", "18", "16"], answer: 2, hint: "Some os 4 lados: 7+7+2+2." },
                { id: "mat-5-1-5", type: "text", q: "Qual é a área de um retângulo com base 10 cm e altura 3 cm?", answer: "30", hint: "Área = base × altura." }
              ]
            },
            {
              id: "mat-5-2", title: "Frações e porcentagem no dia a dia",
              explanation:
                "Frações e porcentagens aparecem o tempo todo: dividir um grupo, calcular descontos, repartir comida. Vamos juntar tudo que você aprendeu nas fases anteriores em problemas reais.",
              exercises: [
                { id: "mat-5-2-1", type: "mc", q: "Uma turma tem 30 alunos. 1/3 foi ao passeio. Quantos alunos foram?", options: ["8", "9", "10", "12"], answer: 2, hint: "30 ÷ 3 = ?" },
                { id: "mat-5-2-2", type: "mc", q: "Se 40% de uma turma de 25 alunos gosta de futebol, quantos alunos são?", options: ["8", "9", "10", "12"], answer: 2, hint: "25 × 40 ÷ 100." },
                { id: "mat-5-2-3", type: "text", q: "Você comeu 3/4 de um chocolate de 8 pedaços. Quantos pedaços você comeu?", answer: "6", hint: "8 ÷ 4 = 2, depois × 3." },
                { id: "mat-5-2-4", type: "mc", q: "Um litro de suco: você bebeu 250 ml. Que fração do litro você bebeu?", options: ["1/2", "1/4", "1/3", "3/4"], answer: 1, hint: "250 ml é um quarto de 1000 ml." },
                { id: "mat-5-2-5", type: "mc", q: "Uma loja deu 10% de desconto num produto de R$ 90. Qual o preço final?", options: ["80", "81", "85", "89"], answer: 1, hint: "10% de 90 é 9. Depois subtraia." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== PORTUGUÊS ==================== */
    {
      id: "port", name: "Português", icon: "📖", color: "#FF8FB1",
      fases: [
        {
          id: "port-f1", title: "Fase 1 · Interpretação de Texto",
          missions: [
            {
              id: "port-1-1", title: "Ideia central do texto",
              explanation:
                "Todo texto tem um assunto principal — a <b>ideia central</b>. Para encontrá-la, pergunte: 'do que esse texto fala, na maior parte do tempo?' Geralmente ela aparece logo no começo ou é reforçada várias vezes.",
              exercises: [
                { id: "port-1-1-1", type: "mc", text: "\"Os golfinhos são animais muito inteligentes. Eles se comunicam por sons, vivem em grupos organizados e até reconhecem seu próprio reflexo no espelho.\"", q: "Qual é a ideia central desse texto?", options: ["Golfinhos vivem no mar", "Golfinhos são inteligentes", "Espelhos refletem imagens", "Animais fazem sons"], answer: 1, hint: "Veja o que se repete ou é reforçado no texto." },
                { id: "port-1-1-2", type: "mc", text: "\"As abelhas vivem em colmeias organizadas, com uma rainha, operárias e zangões. Cada uma tem uma função específica para o bem de todos.\"", q: "Qual é a ideia central desse texto?", options: ["Abelhas picam quando ameaçadas", "As abelhas têm organização social com funções definidas", "Mel é produzido pelas abelhas", "Colmeias são feitas de cera"], answer: 1, hint: "O texto fala sobre a organização do grupo." },
                { id: "port-1-1-3", type: "mc", text: "\"A reciclagem ajuda a reduzir o lixo que vai para os aterros, economiza recursos naturais e ainda gera empregos.\"", q: "Qual é a ideia central desse texto?", options: ["A reciclagem tem vários benefícios importantes", "Lixo é um grande problema", "Aterros sanitários poluem", "Empregos são criados na reciclagem"], answer: 0, hint: "O texto lista várias vantagens de uma mesma coisa." },
                { id: "port-1-1-4", type: "mc", text: "\"O Brasil é pentacampeão mundial de futebol, com títulos em 1958, 1962, 1970, 1994 e 2002.\"", q: "Qual é a ideia central desse texto?", options: ["O Brasil ama futebol", "O Brasil tem 5 títulos mundiais de futebol", "O futebol começou em 1958", "A Copa do Mundo é a cada 4 anos"], answer: 1, hint: "Veja o número de vezes e datas citadas." },
                { id: "port-1-1-5", type: "mc", q: "Como você geralmente identifica a ideia central de um texto?", options: ["É sempre a última frase", "Geralmente é o assunto mais repetido ou reforçado", "É sempre uma opinião do autor", "Não tem como identificar"], answer: 1, hint: "Pense no que aparece de novo em várias partes do texto." }
              ]
            },
            {
              id: "port-1-2", title: "Informação explícita x implícita",
              explanation:
                "Informação <b>explícita</b> está escrita direto no texto — é só encontrar. Informação <b>implícita</b> não está escrita, mas dá pra deduzir juntando pistas, como um detetive.",
              exercises: [
                { id: "port-1-2-1", type: "mc", text: "\"Maria pegou o guarda-chuva antes de sair de casa.\"", q: "O que podemos deduzir (informação implícita)?", options: ["Maria tem um guarda-chuva", "Estava chovendo ou parecia que ia chover", "Maria saiu de casa", "Maria mora sozinha"], answer: 1, hint: "Por que alguém pegaria um guarda-chuva?" },
                { id: "port-1-2-2", type: "mc", text: "\"Pedro chegou em casa todo molhado e resmungando sobre o trânsito.\"", q: "O que podemos deduzir?", options: ["Estava chovendo e ele ficou preso no trânsito", "Pedro corre todos os dias", "Pedro mora longe", "Pedro não gosta de chuva"], answer: 0, hint: "Junte as duas pistas: molhado + trânsito." },
                { id: "port-1-2-3", type: "mc", text: "\"Joana apagou as velas e todos bateram palmas.\"", q: "O que podemos deduzir?", options: ["É aniversário de Joana", "Joana está triste", "É Natal", "Joana ganhou um prêmio"], answer: 0, hint: "Velas + palmas são típicos de qual comemoração?" },
                { id: "port-1-2-4", type: "mc", q: "Informação explícita é aquela que:", options: ["precisa ser deduzida com pistas", "está escrita diretamente no texto", "é sempre uma opinião", "só aparece no título"], answer: 1, hint: "'Explícita' vem de 'explicado', claro." },
                { id: "port-1-2-5", type: "mc", text: "\"O time comemorou muito e ergueu o troféu.\"", q: "O que podemos deduzir?", options: ["O time perdeu", "O time empatou", "O time venceu o campeonato", "O jogo foi cancelado"], answer: 2, hint: "Erguer troféu é sinal de quê?" }
              ]
            }
          ]
        },
        {
          id: "port-f2", title: "Fase 2 · Leitura Crítica",
          missions: [
            {
              id: "port-2-1", title: "Sentido das palavras pelo contexto",
              explanation:
                "Quando você não conhece uma palavra, o <b>contexto</b> (as palavras ao redor) ajuda a descobrir o significado — muito mais rápido do que parar tudo pra ir no dicionário.",
              exercises: [
                { id: "port-2-1-1", type: "mc", text: "\"O menino estava exausto depois do treino: mal conseguia levantar os braços.\"", q: "O que significa 'exausto' nesse contexto?", options: ["Feliz", "Muito cansado", "Com fome", "Machucado"], answer: 1, hint: "'Mal conseguia levantar os braços' dá uma pista forte." },
                { id: "port-2-1-2", type: "mc", text: "\"A sala estava um caos: papéis espalhados, cadeiras viradas, tudo bagunçado.\"", q: "O que significa 'caos' nesse contexto?", options: ["Organização", "Silêncio", "Muita desordem", "Limpeza"], answer: 2, hint: "As pistas seguintes descrevem o 'caos'." },
                { id: "port-2-1-3", type: "mc", text: "\"Ele é muito ávido por livros, lê um por semana.\"", q: "O que significa 'ávido' nesse contexto?", options: ["Desinteressado", "Com grande desejo/entusiasmo", "Cansado", "Confuso"], answer: 1, hint: "Ler um livro por semana mostra o quê?" },
                { id: "port-2-1-4", type: "mc", text: "\"A notícia foi desmentida pelo governo no dia seguinte.\"", q: "O que significa 'desmentida' nesse contexto?", options: ["Confirmada", "Declarada falsa", "Ignorada", "Aumentada"], answer: 1, hint: "'Des-mentida' tem a ver com 'mentira'." },
                { id: "port-2-1-5", type: "mc", text: "\"Depois de tantas tentativas, ele finalmente teve êxito no exame.\"", q: "O que significa 'êxito' nesse contexto?", options: ["Fracasso", "Sucesso", "Dúvida", "Desistência"], answer: 1, hint: "'Finalmente' sugere algo positivo depois de insistir." }
              ]
            },
            {
              id: "port-2-2", title: "Fato x opinião",
              explanation:
                "Um <b>fato</b> pode ser comprovado (ex.: 'chove hoje'). Uma <b>opinião</b> é o que alguém acha ou sente (ex.: 'a chuva é chata'). Saber diferenciar ajuda a ler notícias com espírito crítico.",
              exercises: [
                { id: "port-2-2-1", type: "mc", q: "Qual frase é uma OPINIÃO?", options: ["A água ferve a 100°C", "O Brasil fica na América do Sul", "Esse é o melhor filme do ano", "O ano tem 12 meses"], answer: 2, hint: "Opinião é um julgamento pessoal, não pode ser 'provado'." },
                { id: "port-2-2-2", type: "mc", q: "Qual frase é um FATO?", options: ["Pizza é a melhor comida", "A Terra gira em torno do Sol", "Cães são melhores que gatos", "Verão é a melhor estação"], answer: 1, hint: "Fato pode ser verificado cientificamente." },
                { id: "port-2-2-3", type: "mc", q: "Qual frase é uma OPINIÃO?", options: ["A água ferve a 100°C ao nível do mar", "O Brasil tem 26 estados", "Matemática é a matéria mais difícil", "O ano tem 365 dias"], answer: 2, hint: "'Mais difícil' depende de quem está falando." },
                { id: "port-2-2-4", type: "mc", q: "Qual frase é um FATO?", options: ["Rock é melhor que sertanejo", "O Sol é uma estrela", "Cores frias são mais bonitas", "Segunda-feira é o pior dia"], answer: 1, hint: "Isso pode ser comprovado pela ciência." },
                { id: "port-2-2-5", type: "mc", q: "Notícias devem separar fatos de opiniões porque:", options: ["opinião é sempre mentira", "fato pode ser verificado e opinião é um julgamento pessoal", "fato é sempre chato", "não há diferença entre eles"], answer: 1, hint: "Pense na definição de cada um." }
              ]
            }
          ]
        },
        {
          id: "port-f3", title: "Fase 3 · Gramática — Classes de Palavras",
          missions: [
            {
              id: "port-3-1", title: "Substantivo, adjetivo e artigo",
              explanation:
                "<b>Substantivo</b> nomeia pessoas, lugares, objetos, sentimentos (gato, escola, alegria). <b>Adjetivo</b> dá característica ao substantivo (gato <b>preto</b>). <b>Artigo</b> vem antes do substantivo (o, a, um, uma).",
              exercises: [
                { id: "port-3-1-1", type: "mc", text: "\"O menino esperto correu.\"", q: "A palavra 'esperto' é:", options: ["Substantivo", "Verbo", "Adjetivo", "Artigo"], answer: 2, hint: "'Esperto' descreve uma característica do menino." },
                { id: "port-3-1-2", type: "mc", text: "\"A casa bonita.\"", q: "Qual palavra é o substantivo?", options: ["A", "casa", "bonita", "nenhuma"], answer: 1, hint: "Substantivo nomeia o objeto/lugar." },
                { id: "port-3-1-3", type: "mc", text: "\"Flor amarela.\"", q: "Qual é o adjetivo?", options: ["flor", "amarela", "a", "nenhuma das anteriores"], answer: 1, hint: "O adjetivo descreve a flor." },
                { id: "port-3-1-4", type: "mc", q: "Artigo é a palavra que:", options: ["indica uma ação", "vem antes do substantivo (o/a/um/uma)", "dá característica", "liga duas frases"], answer: 1, hint: "Pense em 'o', 'a', 'um', 'uma'." },
                { id: "port-3-1-5", type: "mc", q: "Qual das palavras abaixo é um substantivo?", options: ["correu", "bonito", "cachorro", "rapidamente"], answer: 2, hint: "Substantivo nomeia um ser/objeto." }
              ]
            },
            {
              id: "port-3-2", title: "Verbos e tempos verbais",
              explanation:
                "O <b>verbo</b> indica ação, estado ou fenômeno da natureza. Ele muda de forma pra mostrar <b>quando</b> a ação acontece: passado, presente ou futuro.",
              exercises: [
                { id: "port-3-2-1", type: "mc", text: "\"Amanhã eu viajarei para a praia.\"", q: "O verbo está no:", options: ["Presente", "Pretérito (passado)", "Futuro", "Imperativo"], answer: 2, hint: "'Amanhã' indica que ainda vai acontecer." },
                { id: "port-3-2-2", type: "mc", q: "Qual verbo está no passado?", options: ["eu brinco", "eu brincarei", "eu brinquei", "eu brincando"], answer: 2, hint: "Passado já aconteceu." },
                { id: "port-3-2-3", type: "mc", q: "Qual verbo está no presente?", options: ["ela estudou", "ela estuda", "ela estudará", "ela estudando"], answer: 1, hint: "Presente é o que acontece agora." },
                { id: "port-3-2-4", type: "mc", q: "O verbo indica:", options: ["somente sentimentos", "ação, estado ou fenômeno da natureza", "somente lugares", "somente pessoas"], answer: 1, hint: "Pense em correr, ser, chover." },
                { id: "port-3-2-5", type: "mc", text: "\"Minha irmã estuda inglês todos os dias.\"", q: "Qual é o verbo dessa frase?", options: ["Minha", "irmã", "estuda", "inglês"], answer: 2, hint: "O verbo indica a ação praticada." }
              ]
            }
          ]
        },
        {
          id: "port-f4", title: "Fase 4 · Escrita Correta",
          missions: [
            {
              id: "port-4-1", title: "Ortografia — confusões comuns",
              explanation:
                "Algumas palavras parecidas confundem muita gente. <b>Mas</b> = oposição (porém). <b>Mais</b> = quantidade. <b>Porque</b> = explica. <b>Por que</b> = pergunta. <b>Mal</b> = advérbio (contrário de bem). <b>Mau</b> = adjetivo (contrário de bom).",
              exercises: [
                { id: "port-4-1-1", type: "mc", q: "\"Ela é inteligente, ___ um pouco distraída.\"", options: ["mais", "mas", "más", "maiz"], answer: 1, hint: "Pode trocar por 'porém'? Então é 'mas'." },
                { id: "port-4-1-2", type: "text", q: "Complete: \"Não fui à festa ___ estava gripado.\" (explicando o motivo)", answer: "porque", hint: "Explica o motivo, junto." },
                { id: "port-4-1-3", type: "mc", q: "\"Quero ___ suco, por favor.\" (quantidade)", options: ["mas", "mais", "màs", "maiz"], answer: 1, hint: "Pode trocar por 'menos'? Então é 'mais'." },
                { id: "port-4-1-4", type: "mc", q: "\"___ você faltou à aula?\" (pergunta)", options: ["porque", "por que", "porquê", "por quê"], answer: 1, hint: "Em perguntas, separado: 'por que'." },
                { id: "port-4-1-5", type: "mc", q: "\"Ele dormiu ___ ontem à noite.\" (advérbio, contrário de bem)", options: ["mau", "mal", "mais", "más"], answer: 1, hint: "Contrário de 'bem' é 'mal'." }
              ]
            },
            {
              id: "port-4-2", title: "Pontuação",
              explanation:
                "Os sinais de pontuação são as 'placas de trânsito' da escrita: indicam pausas, entonações e o fim de ideias. <b>Ponto final</b> termina a frase. <b>Vírgula</b> faz pausas curtas. <b>Interrogação</b> faz perguntas. <b>Exclamação</b> mostra emoção.",
              exercises: [
                { id: "port-4-2-1", type: "mc", q: "Qual pontuação termina uma pergunta?", options: ["Ponto final", "Vírgula", "Interrogação", "Exclamação"], answer: 2, hint: "Pense no sinal '?'." },
                { id: "port-4-2-2", type: "mc", q: "Qual sinal indica emoção, surpresa ou ordem?", options: ["Ponto final", "Vírgula", "Exclamação", "Interrogação"], answer: 2, hint: "Pense no sinal '!'." },
                { id: "port-4-2-3", type: "mc", q: "A vírgula serve principalmente para:", options: ["terminar frases", "fazer pausas curtas e separar itens de uma lista", "fazer perguntas", "mostrar emoção"], answer: 1, hint: "Pense em listar itens: 'maçã, banana e uva'." },
                { id: "port-4-2-4", type: "mc", q: "Qual frase está pontuada corretamente?", options: ["Comprei maçã, banana e uva.", "Comprei, maçã banana e uva.", "Comprei maçã banana, e uva.", "Comprei maçã banana e, uva."], answer: 0, hint: "A vírgula separa os itens da lista, não vem antes do 'e' final." },
                { id: "port-4-2-5", type: "mc", q: "'Vamos comer, menino!' e 'Vamos comer menino!' têm sentidos:", options: ["iguais", "diferentes — a vírgula muda o sentido", "sem sentido nenhum", "sempre positivos"], answer: 1, hint: "Numa, você chama o menino pra comer; na outra, é o menino que seria comido!" }
              ]
            }
          ]
        },
        {
          id: "port-f5", title: "Fase 5 · Narrativa e Produção de Texto",
          missions: [
            {
              id: "port-5-1", title: "Personagens e narrador",
              explanation:
                "O <b>narrador</b> é quem 'conta' a história. Pode ser um <b>personagem</b> (1ª pessoa, 'eu') ou alguém de fora observando tudo (3ª pessoa, 'ele/ela'). <b>Protagonista</b> é o personagem principal; <b>antagonista</b> se opõe a ele.",
              exercises: [
                { id: "port-5-1-1", type: "mc", text: "\"Eu corri o mais rápido que pude, mas cheguei atrasado na aula.\"", q: "Esse texto está narrado em qual pessoa?", options: ["1ª pessoa", "3ª pessoa", "2ª pessoa", "Não tem narrador"], answer: 0, hint: "Procure o pronome usado." },
                { id: "port-5-1-2", type: "mc", text: "\"Ela correu o mais rápido que pôde, mas chegou atrasada.\"", q: "Esse texto está narrado em qual pessoa?", options: ["1ª pessoa", "2ª pessoa", "3ª pessoa", "Não tem narrador"], answer: 2, hint: "Repare no pronome 'ela'." },
                { id: "port-5-1-3", type: "mc", q: "O narrador-personagem é aquele que:", options: ["observa de fora sem participar", "participa da história e conta como 'eu'", "só aparece em poesias", "nunca erra"], answer: 1, hint: "Ele está dentro da história." },
                { id: "port-5-1-4", type: "mc", q: "Protagonista é:", options: ["o personagem secundário", "o vilão sempre", "o personagem principal da história", "o narrador sempre"], answer: 2, hint: "Proto = 'primeiro'." },
                { id: "port-5-1-5", type: "mc", q: "Antagonista é:", options: ["quem ajuda o herói", "quem se opõe ao protagonista", "o narrador", "o cenário da história"], answer: 1, hint: "'Anti' = contra." }
              ]
            },
            {
              id: "port-5-2", title: "Gêneros textuais",
              explanation:
                "Cada tipo de texto tem um objetivo diferente: <b>narrativo</b> conta uma história, <b>instrucional</b> ensina a fazer algo, <b>jornalístico</b> informa, <b>publicitário</b> convence a comprar.",
              exercises: [
                { id: "port-5-2-1", type: "mc", q: "Uma notícia de jornal é um texto:", options: ["poético", "informativo/jornalístico", "apenas de opinião", "sempre ficção"], answer: 1, hint: "Notícias contam fatos reais." },
                { id: "port-5-2-2", type: "mc", q: "Uma bula de remédio é um texto:", options: ["narrativo", "instrucional", "poético", "publicitário"], answer: 1, hint: "Ela instrui como usar o remédio." },
                { id: "port-5-2-3", type: "mc", q: "Um conto de fadas é um exemplo de texto:", options: ["narrativo", "instrucional", "científico", "jornalístico"], answer: 0, hint: "Conta uma história com começo, meio e fim." },
                { id: "port-5-2-4", type: "mc", q: "O objetivo principal de um anúncio publicitário é:", options: ["informar sem nenhuma intenção", "convencer o leitor a comprar/fazer algo", "contar uma história", "ensinar uma regra"], answer: 1, hint: "Pense no objetivo de uma propaganda." },
                { id: "port-5-2-5", type: "mc", q: "Uma receita culinária é um texto:", options: ["narrativo", "instrucional", "poético", "opinativo"], answer: 1, hint: "Ensina o passo a passo de preparo." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== TEOLOGIA CRISTÃ ==================== */
    {
      id: "teo", name: "Teologia Cristã", icon: "✝️", color: "#D4A657",
      fases: [
        {
          id: "teo-f1", title: "Fase 1 · O Começo de Tudo",
          missions: [
            {
              id: "teo-1-1", title: "A Criação do Mundo",
              explanation:
                "No começo, segundo o livro de <b>Gênesis</b>, não existia nada além de Deus. Em seis dias, Ele criou tudo: no 1º dia, a luz; no 2º, o céu; no 3º, a terra e as plantas; no 4º, o sol, a lua e as estrelas; no 5º, os peixes e as aves; e no 6º dia, os animais terrestres e, por fim, o ser humano — feito à imagem de Deus. No 7º dia, Deus descansou, abençoando esse dia.",
              exercises: [
                { id: "teo-1-1-1", type: "mc", q: "Segundo o livro de Gênesis, em quantos dias Deus criou o mundo?", options: ["5", "6", "7", "10"], answer: 1, hint: "No sétimo dia, Ele descansou." },
                { id: "teo-1-1-2", type: "mc", q: "O que Deus criou no primeiro dia?", options: ["Os animais", "A luz", "O ser humano", "As plantas"], answer: 1, hint: "'E disse Deus: haja luz.'" },
                { id: "teo-1-1-3", type: "mc", q: "O que Deus fez no sétimo dia?", options: ["Criou o Sol", "Descansou", "Criou o mar", "Criou as estrelas"], answer: 1, hint: "Esse dia foi abençoado como dia de descanso." },
                { id: "teo-1-1-4", type: "text", q: "Qual é o primeiro livro da Bíblia, onde está a história da Criação?", answer: "Gênesis", hint: "Significa 'origem' ou 'começo'." },
                { id: "teo-1-1-5", type: "mc", q: "No sexto dia, além dos animais terrestres, o que Deus criou?", options: ["Os peixes", "Os pássaros", "O ser humano", "O céu"], answer: 2, hint: "Foi feito 'à imagem e semelhança de Deus'." }
              ]
            },
            {
              id: "teo-1-2", title: "Adão, Eva e o Jardim do Éden",
              explanation:
                "Deus criou Adão, o primeiro homem, e o colocou no <b>Jardim do Éden</b>, um lugar perfeito e cheio de fartura. Depois criou Eva para ser sua companheira. Deus deu apenas uma regra: não comer o fruto de uma árvore específica, a árvore do conhecimento do bem e do mal. Uma serpente enganou Eva, dizendo que o fruto não faria mal — e ela comeu, e depois deu a Adão também. Por causa disso, os dois foram expulsos do jardim.",
              exercises: [
                { id: "teo-1-2-1", type: "mc", q: "Como se chamava o jardim onde Adão e Eva viviam?", options: ["Jardim do Éden", "Jardim da Babilônia", "Jardim de Canaã", "Jardim de Nazaré"], answer: 0, hint: "É o nome mais conhecido desse lugar na Bíblia." },
                { id: "teo-1-2-2", type: "mc", q: "O que Deus pediu para Adão e Eva não fazerem?", options: ["Não sair do jardim", "Não comer o fruto de uma árvore específica", "Não falar com animais", "Não dormir à noite"], answer: 1, hint: "Era sobre a árvore do conhecimento do bem e do mal." },
                { id: "teo-1-2-3", type: "mc", q: "Quem tentou Eva a comer o fruto proibido?", options: ["Um anjo", "A serpente", "Adão", "Um leão"], answer: 1, hint: "Um animal astuto convenceu Eva." },
                { id: "teo-1-2-4", type: "mc", q: "O que aconteceu depois que Adão e Eva comeram o fruto proibido?", options: ["Ganharam superpoderes", "Foram expulsos do jardim", "Viraram animais", "Nada mudou"], answer: 1, hint: "Essa foi a consequência da desobediência." },
                { id: "teo-1-2-5", type: "text", q: "Qual era o nome da primeira mulher, segundo a Bíblia?", answer: "Eva", hint: "É o nome da companheira de Adão." }
              ]
            }
          ]
        },
        {
          id: "teo-f2", title: "Fase 2 · Grandes Heróis da Fé",
          missions: [
            {
              id: "teo-2-1", title: "Noé e a Grande Arca",
              explanation:
                "Com o tempo, o mundo ficou muito violento, e Deus decidiu enviar um grande <b>dilúvio</b> para recomeçar. Mas Noé era um homem justo, e Deus mandou que ele construísse uma <b>arca</b> enorme, levando sua família e um casal de cada tipo de animal. Choveu por 40 dias e 40 noites. Quando as águas começaram a baixar, Noé soltou uma pomba, que voltou com um ramo de oliveira — sinal de que a terra estava seca outra vez. Deus então colocou um <b>arco-íris</b> no céu como promessa de que nunca mais destruiria a terra dessa forma.",
              exercises: [
                { id: "teo-2-1-1", type: "mc", q: "Por que Deus pediu para Noé construir uma arca?", options: ["Para viajar para outro país", "Para escapar de um grande dilúvio", "Para vender madeira", "Para pescar"], answer: 1, hint: "Um grande temporal estava por vir." },
                { id: "teo-2-1-2", type: "mc", q: "Quantos de cada animal Noé levou para a arca, na maioria dos casos?", options: ["Um", "Dois (um casal)", "Quatro", "Dez"], answer: 1, hint: "Um casal de cada espécie." },
                { id: "teo-2-1-3", type: "mc", q: "Quantos dias e noites choveu, segundo a história do dilúvio?", options: ["7", "40", "100", "365"], answer: 1, hint: "Um número bem lembrado na Bíblia." },
                { id: "teo-2-1-4", type: "mc", q: "Que ave Noé enviou pra saber se as águas haviam baixado, e que voltou com um ramo de oliveira?", options: ["Uma águia", "Um corvo", "Uma pomba", "Um pardal"], answer: 2, hint: "Hoje é símbolo de paz." },
                { id: "teo-2-1-5", type: "mc", q: "O que apareceu no céu como sinal da promessa de Deus após o dilúvio?", options: ["Um cometa", "O arco-íris", "Uma estrela", "Um eclipse"], answer: 1, hint: "É um fenômeno colorido e curvo no céu." }
              ]
            },
            {
              id: "teo-2-2", title: "Abraão e a Promessa",
              explanation:
                "Deus chamou <b>Abraão</b> para deixar sua terra natal e ir para um novo lugar que Ele mostraria. Prometeu que faria dele uma grande nação, com descendentes tão numerosos quanto as <b>estrelas do céu</b>. Isso parecia impossível, porque Abraão e sua esposa <b>Sara</b> já eram idosos e não tinham filhos. Mesmo assim, tiveram fé — e, já bem velhos, tiveram um filho chamado <b>Isaque</b>, cumprindo a promessa de Deus.",
              exercises: [
                { id: "teo-2-2-1", type: "mc", q: "O que Deus prometeu a Abraão sobre seus descendentes?", options: ["Que seriam poucos", "Que seriam tão numerosos quanto as estrelas", "Que morariam no mar", "Que seriam todos reis"], answer: 1, hint: "Uma comparação com o céu noturno." },
                { id: "teo-2-2-2", type: "mc", q: "Qual era o nome da esposa de Abraão?", options: ["Rebeca", "Raquel", "Sara", "Rute"], answer: 2, hint: "Ela também era idosa quando teve seu filho." },
                { id: "teo-2-2-3", type: "mc", q: "Abraão teve um filho já em idade avançada. Qual era o nome dele?", options: ["Jacó", "Isaque", "José", "Davi"], answer: 1, hint: "O nascimento cumpriu a promessa de Deus." },
                { id: "teo-2-2-4", type: "mc", q: "Deus pediu para Abraão sair de sua terra e ir para:", options: ["uma terra que Deus mostraria a ele", "uma ilha deserta", "o Egito para sempre", "o topo de uma montanha"], answer: 0, hint: "Foi um chamado de fé, sem saber exatamente o destino." },
                { id: "teo-2-2-5", type: "text", q: "Qual é o nome do filho de Abraão e Sara, nascido quando eles já eram idosos?", answer: "Isaque", hint: "Cumpriu a promessa feita por Deus." }
              ]
            }
          ]
        },
        {
          id: "teo-f3", title: "Fase 3 · Moisés e Jesus",
          missions: [
            {
              id: "teo-3-1", title: "Moisés e a Fuga do Egito",
              explanation:
                "Quando bebê, Moisés foi colocado num cesto e deixado nas águas do <b>rio Nilo</b> pra escapar de uma ordem cruel do Faraó. Anos depois, já adulto, Deus falou com ele através de uma <b>sarça em chamas</b> que não se consumia, pedindo que ele libertasse o povo de Israel da escravidão no Egito. Moisés foi ao Faraó repetindo: <i>'Deixa meu povo ir!'</i> Depois de dez pragas, o Faraó finalmente deixou o povo sair. Quando foram perseguidos até o <b>Mar Vermelho</b>, as águas se abriram, formando um caminho seco para eles atravessarem. Mais tarde, no <b>Monte Sinai</b>, Moisés recebeu os Dez Mandamentos.",
              exercises: [
                { id: "teo-3-1-1", type: "mc", q: "Quando bebê, Moisés foi colocado em um cesto e deixado em qual rio?", options: ["Rio Jordão", "Rio Nilo", "Rio Tigre", "Rio Eufrates"], answer: 1, hint: "É o grande rio do Egito." },
                { id: "teo-3-1-2", type: "mc", q: "Deus falou com Moisés através de:", options: ["um anjo", "uma sarça (arbusto) em chamas que não se consumia", "um sonho apenas", "um livro"], answer: 1, hint: "Um fenômeno estranho: o fogo não destruía o arbusto." },
                { id: "teo-3-1-3", type: "mc", q: "Qual era a frase que Moisés repetia ao Faraó?", options: ["'Deixa meu povo em paz'", "'Deixa meu povo ir'", "'Dá-me ouro'", "'Constrói mais pirâmides'"], answer: 1, hint: "Um pedido de liberdade." },
                { id: "teo-3-1-4", type: "mc", q: "O que aconteceu com o Mar Vermelho quando o povo de Israel precisou atravessar?", options: ["Ficou congelado", "As águas se abriram formando um caminho seco", "Secou completamente para sempre", "Ninguém atravessou"], answer: 1, hint: "Um dos milagres mais conhecidos da Bíblia." },
                { id: "teo-3-1-5", type: "mc", q: "Onde Moisés recebeu os Dez Mandamentos?", options: ["No Monte Sinai", "No Jardim do Éden", "No Egito", "Em Jerusalém"], answer: 0, hint: "Um monte específico, bem conhecido nessa história." }
              ]
            },
            {
              id: "teo-3-2", title: "Jesus — Nascimento e Ensinamentos",
              explanation:
                "Jesus nasceu na cidade de <b>Belém</b>, e como não havia lugar na hospedaria, foi colocado numa <b>manjedoura</b> (onde os animais comiam). Cresceu na cidade de <b>Nazaré</b>. Quando adulto, começou a ensinar as pessoas, principalmente sobre <b>amor ao próximo e perdão</b>. Ele contava histórias do dia a dia com lições profundas, chamadas de <b>parábolas</b>, e realizava milagres para ajudar quem precisava.",
              exercises: [
                { id: "teo-3-2-1", type: "mc", q: "Em que cidade Jesus nasceu?", options: ["Jerusalém", "Belém", "Nazaré", "Roma"], answer: 1, hint: "É a cidade citada nas canções de Natal." },
                { id: "teo-3-2-2", type: "mc", q: "Onde Jesus foi colocado logo depois de nascer, por não haver lugar na hospedaria?", options: ["Em um palácio", "Em uma manjedoura (onde os animais comiam)", "Em um berço de ouro", "Em uma cesta no rio"], answer: 1, hint: "Um lugar bem simples, entre animais." },
                { id: "teo-3-2-3", type: "mc", q: "Jesus é conhecido por ensinar as pessoas principalmente sobre:", options: ["riqueza e poder", "amor ao próximo e perdão", "guerra", "magia"], answer: 1, hint: "Um dos temas centrais dos seus ensinamentos." },
                { id: "teo-3-2-4", type: "mc", q: "As histórias que Jesus contava para ensinar lições, usando exemplos do dia a dia, são chamadas de:", options: ["mandamentos", "parábolas", "salmos", "profecias"], answer: 1, hint: "Histórias simples com lições profundas." },
                { id: "teo-3-2-5", type: "text", q: "Em que cidade Jesus cresceu, que dá nome a um dos seus títulos ('Jesus de ___')?", answer: "Nazaré", hint: "É de onde vem o termo 'nazareno'." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== INGLÊS ==================== */
    {
      id: "ing", name: "Inglês", icon: "🌎", color: "#0f8a7c",
      fases: [
        {
          id: "ing-f1", title: "Fase 1 · Primeiros Passos",
          missions: [
            {
              id: "ing-1-1", title: "Verb to be",
              explanation:
                "O verbo <b>to be</b> (ser/estar) muda de forma dependendo de quem fala: <b>I am</b> (eu sou/estou) · <b>He/She/It is</b> (ele/ela é/está) · <b>You/We/They are</b> (você(s)/nós/eles são/estão).",
              exercises: [
                { id: "ing-1-1-1", type: "mc", q: "\"They ___ my friends.\"", options: ["am", "is", "are", "be"], answer: 2, hint: "'They' pede 'are'." },
                { id: "ing-1-1-2", type: "mc", q: "\"She ___ a good student.\"", options: ["am", "is", "are", "be"], answer: 1, hint: "'She' pede 'is'." },
                { id: "ing-1-1-3", type: "mc", q: "\"I ___ happy today.\"", options: ["am", "is", "are", "be"], answer: 0, hint: "'I' sempre usa 'am'." },
                { id: "ing-1-1-4", type: "text", q: "Traduza para o inglês: 'Eu sou brasileiro.'", answer: "i am brazilian", altAnswers: ["i'm brazilian", "iambrazilian"], hint: "I am + nacionalidade." },
                { id: "ing-1-1-5", type: "mc", q: "\"We ___ ready.\"", options: ["am", "is", "are", "be"], answer: 2, hint: "'We' pede 'are'." }
              ]
            },
            {
              id: "ing-1-2", title: "Family & rotina diária",
              explanation:
                "O <b>Present Simple</b> é usado para hábitos e rotina. Com he/she/it, o verbo ganha um <b>-s</b> no final: 'She studies', 'He goes'.",
              exercises: [
                { id: "ing-1-2-1", type: "mc", q: "'Mother' significa:", options: ["Pai", "Irmã", "Mãe", "Avó"], answer: 2, hint: "É a mamãe." },
                { id: "ing-1-2-2", type: "mc", q: "Complete: \"He ___ to school every day.\" (go)", options: ["go", "goes", "going", "went"], answer: 1, hint: "Com 'he', o verbo ganha -s/-es." },
                { id: "ing-1-2-3", type: "mc", q: "'Sister' significa:", options: ["Irmão", "Irmã", "Prima", "Mãe"], answer: 1, hint: "É a irmã." },
                { id: "ing-1-2-4", type: "text", q: "Complete: \"I ___ (wake up) at 7 am.\"", answer: "wake up", altAnswers: ["wakeup"], hint: "Com 'I', o verbo fica na forma normal." },
                { id: "ing-1-2-5", type: "mc", q: "Qual pergunta você usa para saber um lugar?", options: ["What", "Who", "Where", "When"], answer: 2, hint: "'Where' = onde." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== CIÊNCIAS ==================== */
    {
      id: "sci", name: "Ciências", icon: "🔬", color: "#5b3e96",
      fases: [
        {
          id: "sci-f1", title: "Fase 1 · Nosso Universo e Planeta",
          missions: [
            {
              id: "sci-1-1", title: "Sistema Solar",
              explanation:
                "O Sol é uma <b>estrela</b>, uma enorme bola de gás muito quente que ilumina e aquece tudo ao redor. Oito planetas giram ao seu redor: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. A Terra é o único planeta onde sabemos que existe vida.",
              exercises: [
                { id: "sci-1-1-1", type: "mc", q: "Quantos planetas giram ao redor do Sol?", options: ["7", "8", "9", "10"], answer: 1, hint: "Contando de Mercúrio até Netuno." },
                { id: "sci-1-1-2", type: "mc", q: "Qual é o planeta mais próximo do Sol?", options: ["Vênus", "Mercúrio", "Terra", "Marte"], answer: 1, hint: "É o menor e mais quente durante o dia." },
                { id: "sci-1-1-3", type: "mc", q: "Qual é o único planeta onde sabemos que existe vida?", options: ["Marte", "Vênus", "Terra", "Júpiter"], answer: 2, hint: "É o nosso planeta." },
                { id: "sci-1-1-4", type: "mc", q: "O Sol é uma:", options: ["planeta", "estrela", "lua", "cometa"], answer: 1, hint: "Ele produz luz e calor próprios." },
                { id: "sci-1-1-5", type: "text", q: "Qual é o maior planeta do Sistema Solar?", answer: "Júpiter", altAnswers: ["jupiter"], hint: "É um gigante gasoso." }
              ]
            },
            {
              id: "sci-1-2", title: "Camadas da Terra e ciclo da água",
              explanation:
                "A Terra tem três camadas principais: a <b>crosta</b> (fina, onde vivemos), o <b>manto</b> (a maior parte) e o <b>núcleo</b> (o mais quente, no centro). Já a água passa por um ciclo constante: <b>evaporação</b> (vira vapor com o calor do Sol), <b>condensação</b> (forma nuvens) e <b>precipitação</b> (cai como chuva).",
              exercises: [
                { id: "sci-1-2-1", type: "mc", q: "A camada mais externa e fina da Terra, onde vivemos, é:", options: ["o núcleo", "o manto", "a crosta", "a atmosfera"], answer: 2, hint: "É a camada em que pisamos." },
                { id: "sci-1-2-2", type: "mc", q: "A camada mais quente e profunda da Terra é:", options: ["a crosta", "o manto", "o núcleo", "a atmosfera"], answer: 2, hint: "Fica bem no centro do planeta." },
                { id: "sci-1-2-3", type: "mc", q: "No ciclo da água, o processo em que a água vira vapor por causa do calor do Sol é a:", options: ["condensação", "evaporação", "precipitação", "infiltração"], answer: 1, hint: "Pense na água 'evaporando' de uma poça no sol." },
                { id: "sci-1-2-4", type: "mc", q: "A chuva é um exemplo de:", options: ["evaporação", "condensação", "precipitação", "fotossíntese"], answer: 2, hint: "É quando a água 'cai' do céu." },
                { id: "sci-1-2-5", type: "text", q: "Como se chama o processo em que o vapor de água esfria e forma as nuvens?", answer: "condensação", hint: "O vapor 'condensa' formando gotinhas." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== GEOGRAFIA ==================== */
    {
      id: "geo", name: "Geografia", icon: "🌍", color: "#1b7a54",
      fases: [
        {
          id: "geo-f1", title: "Fase 1 · O Mundo em Mapas",
          missions: [
            {
              id: "geo-1-1", title: "Continentes e oceanos",
              explanation:
                "A superfície da Terra tem 6 <b>continentes</b> (América, Europa, Ásia, África, Oceania e Antártida) e 5 <b>oceanos</b> (Pacífico, Atlântico, Índico, Glacial Ártico e Glacial Antártico). O Brasil fica na América do Sul.",
              exercises: [
                { id: "geo-1-1-1", type: "mc", q: "Quantos continentes existem?", options: ["4", "5", "6", "7"], answer: 2, hint: "Conte: América, Europa, Ásia, África, Oceania, Antártida." },
                { id: "geo-1-1-2", type: "mc", q: "Em qual continente fica o Brasil?", options: ["América do Norte", "América do Sul", "Europa", "África"], answer: 1, hint: "Fica na parte sul do continente americano." },
                { id: "geo-1-1-3", type: "mc", q: "Qual é o maior oceano do mundo?", options: ["Atlântico", "Índico", "Pacífico", "Ártico"], answer: 2, hint: "Fica entre a América e a Ásia/Oceania." },
                { id: "geo-1-1-4", type: "mc", q: "A Antártida é um continente coberto principalmente por:", options: ["areia", "gelo", "floresta", "água doce"], answer: 1, hint: "É a região mais fria do planeta." },
                { id: "geo-1-1-5", type: "text", q: "Quantos oceanos existem no total?", answer: "5", altAnswers: ["cinco"], hint: "Pacífico, Atlântico, Índico, Ártico e Antártico." }
              ]
            },
            {
              id: "geo-1-2", title: "Coordenadas geográficas",
              explanation:
                "As linhas de <b>latitude</b> são horizontais (deitadas) e medem a distância Norte/Sul a partir da Linha do Equador. As linhas de <b>longitude</b> são verticais (em pé) e medem Leste/Oeste a partir do Meridiano de Greenwich.",
              exercises: [
                { id: "geo-1-2-1", type: "mc", q: "As linhas de latitude são:", options: ["verticais (em pé)", "horizontais (deitadas) e medem Norte/Sul", "só existem no deserto", "o nome dos oceanos"], answer: 1, hint: "Pense na Linha do Equador." },
                { id: "geo-1-2-2", type: "mc", q: "A Linha do Equador divide a Terra em:", options: ["Leste e Oeste", "Norte e Sul", "Terra e Água", "Dia e Noite"], answer: 1, hint: "Hemisfério Norte e Hemisfério Sul." },
                { id: "geo-1-2-3", type: "mc", q: "As linhas de longitude medem:", options: ["Norte e Sul", "Leste e Oeste", "altura", "temperatura"], answer: 1, hint: "São as linhas verticais." },
                { id: "geo-1-2-4", type: "mc", q: "O Meridiano de Greenwich é a referência para medir:", options: ["a latitude", "a longitude", "a altitude", "a temperatura"], answer: 1, hint: "É o 'zero' da longitude." },
                { id: "geo-1-2-5", type: "text", q: "Qual linha imaginária divide a Terra em Hemisfério Norte e Hemisfério Sul?", answer: "equador", altAnswers: ["linha do equador"], hint: "Fica bem no 'meio' do globo." }
              ]
            }
          ]
        }
      ]
    },

    /* ==================== HISTÓRIA ==================== */
    {
      id: "hist", name: "História", icon: "🏛️", color: "#c0492b",
      fases: [
        {
          id: "hist-f1", title: "Fase 1 · Civilizações Antigas",
          missions: [
            {
              id: "hist-1-1", title: "Pré-História e Mesopotâmia",
              explanation:
                "No <b>Paleolítico</b>, os seres humanos eram nômades, caçadores e coletores. No <b>Neolítico</b>, aprenderam a plantar e criar animais — a <b>Revolução Agrícola</b> — e se tornaram sedentários, formando as primeiras aldeias. A <b>Mesopotâmia</b>, entre os rios Tigre e Eufrates, foi berço de uma das primeiras civilizações, com a escrita cuneiforme.",
              exercises: [
                { id: "hist-1-1-1", type: "mc", q: "O período da Pré-História marcado pela descoberta da agricultura é o:", options: ["Paleolítico", "Neolítico", "Idade do Ferro", "Idade Média"], answer: 1, hint: "'Neo' significa 'novo'." },
                { id: "hist-1-1-2", type: "mc", q: "A Mesopotâmia se desenvolveu entre quais dois rios?", options: ["Nilo e Amazonas", "Tigre e Eufrates", "Tietê e São Francisco", "Nilo e Tigre"], answer: 1, hint: "O nome 'Mesopotâmia' significa 'entre rios'." },
                { id: "hist-1-1-3", type: "mc", q: "A escrita cuneiforme, uma das primeiras da história, foi criada na:", options: ["Mesopotâmia", "Grécia", "Roma", "China"], answer: 0, hint: "Feita com sinais em forma de cunha no barro." },
                { id: "hist-1-1-4", type: "mc", q: "No Paleolítico, os seres humanos eram principalmente:", options: ["agricultores", "nômades caçadores-coletores", "comerciantes", "reis"], answer: 1, hint: "Ainda não sabiam plantar." },
                { id: "hist-1-1-5", type: "text", q: "Como é chamada a 'revolução' que aconteceu quando os humanos aprenderam a plantar e criar animais?", answer: "revolução agrícola", altAnswers: ["revolucao agricola", "agrícola"], hint: "Tem a ver com 'agricultura'." }
              ]
            },
            {
              id: "hist-1-2", title: "Egito e Grécia Antiga",
              explanation:
                "O <b>rio Nilo</b> era essencial para a vida no Egito Antigo. Os faraós eram enterrados em <b>pirâmides</b>. Já na <b>Grécia Antiga</b>, surgiu a <b>democracia</b> — governo do povo — e as cidades-estado mais famosas eram Atenas e Esparta.",
              exercises: [
                { id: "hist-1-2-1", type: "mc", q: "O rio que era fundamental para a vida no Egito Antigo era o:", options: ["Tigre", "Nilo", "Eufrates", "Jordão"], answer: 1, hint: "Suas cheias fertilizavam as margens." },
                { id: "hist-1-2-2", type: "mc", q: "As pirâmides do Egito Antigo serviam principalmente como:", options: ["casas de camponeses", "túmulos dos faraós", "escolas", "fortalezas"], answer: 1, hint: "Eram construídas para os governantes egípcios." },
                { id: "hist-1-2-3", type: "mc", q: "Na Grécia Antiga, a palavra 'democracia' significa:", options: ["governo dos deuses", "governo do povo", "governo de um rei", "governo dos soldados"], answer: 1, hint: "'Demo' = povo, 'cracia' = governo." },
                { id: "hist-1-2-4", type: "mc", q: "As duas cidades-estado mais famosas da Grécia Antiga eram:", options: ["Roma e Atenas", "Atenas e Esparta", "Esparta e Troia", "Troia e Roma"], answer: 1, hint: "Uma valorizava a cultura, a outra os guerreiros." },
                { id: "hist-1-2-5", type: "text", q: "Qual era o título do governante do Egito Antigo?", answer: "faraó", altAnswers: ["farao"], hint: "Considerado um deus vivo pelos egípcios." }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   DAILY_TRIVIA — pool de curiosidades (bíblicas, história do
   Brasil e curiosidades gerais). 5 são sorteadas por dia.
   ============================================================ */
const DAILY_TRIVIA = [
  { id: "tv-1", category: "Bíblia", text: "A Bíblia tem duas partes principais: o Antigo Testamento e o Novo Testamento.", isTrue: true, explain: "O Antigo Testamento conta a história antes de Jesus, e o Novo Testamento conta sua vida e o início da Igreja." },
  { id: "tv-2", category: "Bíblia", text: "A Bíblia diz que Jonas foi engolido por uma baleia.", isTrue: false, explain: "O texto original diz 'um grande peixe' — a ideia de 'baleia' é uma popularização que veio depois." },
  { id: "tv-3", category: "Bíblia", text: "Davi enfrentou o gigante Golias usando apenas uma funda (estilingue) e pedras.", isTrue: true, explain: "Foi uma vitória da fé e da coragem sobre a força bruta." },
  { id: "tv-4", category: "Bíblia", text: "O rei Salomão, filho de Davi, ficou conhecido por sua grande sabedoria.", isTrue: true, explain: "Ele pediu sabedoria a Deus em vez de riquezas, e por isso é lembrado até hoje." },
  { id: "tv-5", category: "Bíblia", text: "Os Dez Mandamentos foram entregues a Moisés no Monte Everest.", isTrue: false, explain: "Foi no Monte Sinai, no Oriente Médio — o Everest fica na Ásia, muito longe dali." },
  { id: "tv-6", category: "Bíblia", text: "Judas Iscariotes foi um dos doze apóstolos de Jesus.", isTrue: true, explain: "Ele é lembrado por trair Jesus, mas fazia parte do grupo mais próximo." },
  { id: "tv-7", category: "Bíblia", text: "A cidade de Belém, onde Jesus nasceu, fica no Brasil.", isTrue: false, explain: "Belém fica no Oriente Médio (hoje, território palestino), bem longe do Brasil." },
  { id: "tv-8", category: "Bíblia", text: "O livro de Salmos é conhecido por seus cânticos e orações.", isTrue: true, explain: "É um dos livros mais poéticos da Bíblia, cheio de louvores e pedidos a Deus." },
  { id: "tv-9", category: "História do Brasil", text: "O Brasil foi 'descoberto' pelos portugueses em 1500, liderados por Pedro Álvares Cabral.", isTrue: true, explain: "A esquadra portuguesa chegou à costa da Bahia em abril de 1500." },
  { id: "tv-10", category: "História do Brasil", text: "A capital do Brasil sempre foi Brasília, desde o início da colonização.", isTrue: false, explain: "Antes de Brasília (1960), a capital já foi Salvador e depois o Rio de Janeiro." },
  { id: "tv-11", category: "História do Brasil", text: "A Proclamação da Independência do Brasil aconteceu em 1822.", isTrue: true, explain: "Foi Dom Pedro I quem proclamou, às margens do rio Ipiranga." },
  { id: "tv-12", category: "História do Brasil", text: "Dom Pedro II foi o primeiro imperador do Brasil.", isTrue: false, explain: "O primeiro foi Dom Pedro I — Dom Pedro II foi seu filho, o segundo imperador." },
  { id: "tv-13", category: "História do Brasil", text: "A escravidão foi abolida no Brasil em 1888, pela Lei Áurea.", isTrue: true, explain: "Foi assinada pela Princesa Isabel, encerrando oficialmente a escravidão no país." },
  { id: "tv-14", category: "História do Brasil", text: "O Brasil já teve mais de uma bandeira oficial ao longo da história.", isTrue: true, explain: "A bandeira mudou algumas vezes desde a época do Império até a República." },
  { id: "tv-15", category: "História do Brasil", text: "A capital do Brasil foi transferida para Brasília em 1960.", isTrue: true, explain: "A mudança foi um projeto do presidente Juscelino Kubitschek." },
  { id: "tv-16", category: "História do Brasil", text: "O carnaval é uma festa que só existe no Brasil.", isTrue: false, explain: "O carnaval é celebrado em vários países, como Portugal, Itália e países do Caribe." },
  { id: "tv-17", category: "Curiosidades", text: "O coração humano bate, em média, mais de 100 mil vezes por dia.", isTrue: true, explain: "Em repouso, o coração bate cerca de 60 a 100 vezes por minuto — somando o dia todo, passa de 100 mil batidas!" },
  { id: "tv-18", category: "Curiosidades", text: "Os polvos têm três corações.", isTrue: true, explain: "Dois corações bombeiam sangue para as brânquias, e um terceiro para o resto do corpo." },
  { id: "tv-19", category: "Curiosidades", text: "A luz do Sol demora cerca de 8 minutos para chegar à Terra.", isTrue: true, explain: "Mesmo viajando na velocidade da luz, a distância até o Sol é enorme." },
  { id: "tv-20", category: "Curiosidades", text: "Todos os planetas do Sistema Solar têm anéis, como Saturno.", isTrue: false, explain: "Só alguns planetas gasosos (Saturno, Júpiter, Urano e Netuno) têm anéis — a Terra e Marte não têm." },
  { id: "tv-21", category: "Curiosidades", text: "O corpo humano adulto tem 206 ossos.", isTrue: true, explain: "Bebês nascem com mais ossos, que vão se fundindo ao longo do crescimento." },
  { id: "tv-22", category: "Curiosidades", text: "As formigas conseguem carregar objetos muito mais pesados que o próprio corpo.", isTrue: true, explain: "Algumas espécies carregam até 50 vezes o próprio peso!" },
  { id: "tv-23", category: "Curiosidades", text: "A Grande Muralha da China pode ser vista a olho nu do espaço.", isTrue: false, explain: "Isso é um mito popular — astronautas confirmam que ela não é visível a olho nu do espaço." },
  { id: "tv-24", category: "Curiosidades", text: "O corpo humano é composto principalmente por água.", isTrue: true, explain: "Cerca de 60% do corpo de um adulto é água." }
];

/* ============================================================
   FEYNMAN_TOPICS — temas do Modo "Ensine o Sistema"
   ============================================================ */
const FEYNMAN_TOPICS = [
  {
    id: "fey-fracoes", subjectId: "mat", title: "Frações",
    prompt: "Explique com suas palavras o que é uma fração e para que ela serve.",
    keywords: ["parte", "todo", "numerador", "denominador", "dividir", "pedaço", "inteiro"]
  },
  {
    id: "fey-interpretacao", subjectId: "port", title: "Interpretação de texto",
    prompt: "Explique com suas palavras o que é 'ideia central' de um texto e como encontrá-la.",
    keywords: ["assunto", "principal", "resumo", "tema", "texto", "começo", "repete"]
  },
  {
    id: "fey-biblia", subjectId: "teo", title: "Uma história bíblica",
    prompt: "Escolha uma das histórias que você aprendeu (Criação, Adão e Eva, Noé, Abraão, Moisés ou Jesus) e conte com suas próprias palavras.",
    keywords: ["deus", "bíblia", "noé", "moisés", "jesus", "abraão", "criação", "adão", "eva"]
  },
  {
    id: "fey-sistema-solar", subjectId: "sci", title: "Sistema Solar",
    prompt: "Explique com suas palavras o que é o Sistema Solar e como os planetas se organizam ao redor do Sol.",
    keywords: ["sol", "planetas", "girar", "órbita", "terra", "estrela", "sistema"]
  }
];
