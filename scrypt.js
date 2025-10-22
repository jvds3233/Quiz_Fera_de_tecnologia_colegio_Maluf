// Banco de perguntas
const questions = [

  {
    question: "Se 2x + 7 = 27, qual o valor de x?",
    options: ['8', '9', '10', '11', '12'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Qual é a raiz quadrada de 169?",
    options: ['11', '12', '13', '14', '15'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Se um triângulo tem lados de 6 cm, 6 cm e 6 cm, ele é:",
    options: ['Equilátero', 'Isósceles', 'Escaleno', 'Retângulo', 'Obtusângulo'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 4 corresponde a 3, então 5 corresponde a quanto?",
    options: ['3.93', '3.75', '4.04', '3.7', '3.86'],
    correct: 1,
    category: "matematica",
  },
  {
    question: "Um valor de R$ 442.00 sofre aumento de 20%. Qual é o novo valor?",
    options: ['529.41', '506.02', '532.71', '530.4', '516.57'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "Se 2x + 8 = 26, qual o valor de x?",
    options: ['7', '8', '9', '10', '11'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Qual é a raiz quadrada de 36?",
    options: ['4', '5', '6', '7', '8'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Se um triângulo tem lados de 6 cm, 6 cm e 6 cm, ele é:",
    options: ['Equilátero', 'Isósceles', 'Escaleno', 'Retângulo', 'Obtusângulo'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 4 corresponde a 5, então 5 corresponde a quanto?",
    options: ['5.72', '5.65', '6.82', '6.25', '6.3'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "Um valor de R$ 216.00 sofre aumento de 20%. Qual é o novo valor?",
    options: ['259.2', '251.77', '259.62', '267.13', '263.06'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 2x + 5 = 15, qual o valor de x?",
    options: ['3', '4', '5', '6', '7'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Qual é a raiz quadrada de 400?",
    options: ['18', '19', '20', '21', '22'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Se um triângulo tem lados de 6 cm, 6 cm e 6 cm, ele é:",
    options: ['Equilátero', 'Isósceles', 'Escaleno', 'Retângulo', 'Obtusângulo'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 4 corresponde a 10, então 8 corresponde a quanto?",
    options: ['19.49', '20.0', '19.28', '18.31', '18.99'],
    correct: 1,
    category: "matematica",
  },
  {
    question: "Um valor de R$ 487.00 sofre aumento de 5%. Qual é o novo valor?",
    options: ['511.35', '486.84', '517.18', '529.14', '522.21'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 2x + 3 = 7, qual o valor de x?",
    options: ['0', '1', '2', '3', '4'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Qual é a raiz quadrada de 121?",
    options: ['9', '10', '11', '12', '13'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Se um triângulo tem lados de 6 cm, 6 cm e 6 cm, ele é:",
    options: ['Equilátero', 'Isósceles', 'Escaleno', 'Retângulo', 'Obtusângulo'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Se 12 corresponde a 8, então 5 corresponde a quanto?",
    options: ['3.29', '3.41', '3.33', '3.13', '3.22'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Um valor de R$ 238.00 sofre aumento de 25%. Qual é o novo valor?",
    options: ['300.01', '284.56', '297.41', '297.5', '287.33'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "Um carro percorre 120 km em 2 horas. Qual a velocidade média em km/h?",
    options: ['60', '120', '30', '80', '40'],
    correct: 0,
    category: "fisica",
  },
  {
    question: "Qual organela é responsável pela produção de energia (ATP) nas células eucarióticas?",
    options: ['Lisossomo', 'Mitocôndria', 'Cloroplasto', 'Ribossomo', 'Núcleo'],
    correct: 1,
    category: "biologia",
  },
  {
    question: "Um bloco de 2 kg é empurrado com força resultante de 10 N. Qual a aceleração (m/s²)? (a = F/m)",
    options: ['2', '5', '10', '0.5', '20'],
    correct: 1,
    category: "fisica",
  },
  {
    question: "Em uma cadeia alimentar, os produtores são geralmente:",
    options: ['Carnívoros', 'Herbívoros', 'Decompositores', 'Onívoros', 'Organismos fotossinteticos(Plantas e algas'],
    correct: 4,
    category: "biologia",
  },
  {
    question: "Qual é o produto principal da reação de combustão completa do metano (CH4)?",
    options: ['Monoxido de carbono', 'Dióxido de carbono e água', 'Água e oxigênio', 'Carbono puro', 'Ácido carbônico'],
    correct: 1,
    category: "quimica",
  },
  {
    question: "Uma solução com pH 3 é considerada:",
    options: ['Básica', 'Neutra', 'Ácida', 'Alcalina', 'Salina'],
    correct: 2,
    category: "quimica",
  },
  {
   question: "Uma escola aplicou uma prova para 40 alunos. A média das notas foi 7,0. Após a revisão, a nota de um aluno aumentou em 2 pontos. A nova média da turma será:",
   options: ['7', '7.05', '7.1', '7.2', '7.5'],
   correct: 1,
   category: "matematica",
  },
  {
    question: "O uso das redes sociais trouxe uma nova forma de comunicação marcada por:",
    options: ['Formalidade e rigidez gramatical', 'Abundancia de textos cientificos', 'Uso ed recursos multimodais, como memes e emojis', 'Exclusão da oralidade', 'Desaparecimento da escrita'],
    correct: 2,
    category: "portugues",
  },
  {
    question: "A Inconfidência Mineira (1789) foi um movimento de caráter:",
    options: ['Monarquia e absolutista', 'Republicano e emancipacionista', 'Escravismo e ruralismo', 'Constitucional e monárquico', 'Religioso e messiânico'],
    correct: 1,
    category: "historia",
  },
  {
    question: "Um carro percorre 180 km em 3 horas com velocidade constante. Qual é a sua velocidade média?",
    options: ['30 km/h', '50km/h', '60 km/h', '70 km/h', '90 km/h'],
    correct: 2,
    category: "fisica",
  },
  {
    question: "O gráfico de uma função do 1º grau cruza o eixo y em (0,2) e passa pelo ponto (2,6). Qual é a equação da reta?",
    options: ['y = 2x + 2', 'y = x + 2', 'y = 3x + 2', 'y = 4x + 2', 'y = 2x + 3'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "O processo de urbanização brasileira intensificou-se principalmente a partir de:",
    options: ['Expansão cafeeira no século XIX', 'Industrialização no século XX', 'Ciclo da borracha no Norte', 'Período colonial com os engenhos de açúcar', 'Expansão pecuária no interior'],
    correct: 1,
    category: "geografia",
  },
  {
    question: "A seleção natural, segundo Darwin, pode ser definida como:",
    options: ['Processo pelo qual mutações aleatórias determinam a evolução', 'Escolha dos indivíduos mais fortes', 'Reprodução apenas dos mais numerosos', 'Sobrevivência diferencial de indivíduos com características vantajosas', 'Exclusão de todas as variações genéticas'],
    correct: 3,
    category: "biologia",
  },
  {
    question: "O Modernismo brasileiro, iniciado em 1922, defendia:",
    options: ['Valorização da tradição portuguesa', 'Busca da linguagem rebuscada e formal', 'Ruptura com modelos europeus e valorização da cultura nacional', 'Produção literária exclusivamente religiosa', 'Retorno ao Parnasianismo'],
    correct: 2, 
    category: "literatura",
  },
  {
    question: "Em um dado honesto, a probabilidade de sair um número ímpar é:",
    options: ['1/2', '1/3', '2/3', '1/6', '5/6'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "A água é chamada de “solvente universal” porque:",
    options: ['Dissolve apenas substâncias polares', 'Possui alta energia de ligação iônica', 'Dissolve grande variedade de substâncias devido à polaridade da molécula', 'É apolar e interage com todos os compostos', 'Dissolve somente sais minerais'],
    correct: 2,
    category: "quimica",
  },
  //matematica
  {
    question: "Uma loja vendeu 200 produtos em uma semana. Desses, 60 foram eletrônicos. Qual a porcentagem de eletrônicos vendidos?",
    options: ['20%', '25%','30%', '35%', '40%'],
    correct: 1,
    category: "matematica",
  },
  {
    question: "A função 𝑓(x)=2x+3. O valor de 𝑓(5) é:",
    options: ['10', '11', '12', '13', '15'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "O gráfico de uma função quadrática cruza o eixo x em x=−2 e x=4. Qual é a soma das raízes?",
    options: ['-2', '2', '4', '6', '8'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "O número 0,333... (periódico) equivale a:",
    options: ['1/2', '1/3', '2/3', '3/4', '1/4'],
    correct: 1,
    category: "matematica",
  },
  {
    question: "Uma roleta tem 10 partes iguais numeradas de 1 a 10. A probabilidade de sair um número par é:",
    options: ['1/2', '1/3', '2/3', '1/4', '3/4'],
    correct: 0,
    category: "matematica",
  },
  {
    question: "Um retângulo tem área de 48 m² e base de 6 m. A altura é:",
    options: ['6', '7', '8', '9', '10'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Em um triângulo equilátero de lado 12, o perímetro é:",
    options: ['24', '30', '32', '36', '40'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "O logaritmo log10 1000 é igual a:",
    options: ['1', '2', '3', '10', '100'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Em uma turma, 60% dos alunos são meninas. Se há 40 alunos, quantos são meninos?",
    options: ['12', '16', '20', '24', '28'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Uma progressão aritmética tem primeiro termo 5 e razão 3. O 6º termo é:",
    options: ['17', '18', '20', '21', '23'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "O perímetro de um círculo de raio 7 cm é (use π ≈ 3,14):",
    options: ['21,98 cm', '38,48 cm', '43,96 cm', '50,24 cm', '60,00 cm'],
    correct: 3,
    category: "matematica",
  },
  {
    question: "A média aritmética de 6, 8 e 10 é:",
    options: ['6', '7', '8', '9', '10'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "Em uma urna, há 5 bolas vermelhas, 3 azuis e 2 verdes. A probabilidade de retirar uma bola azul é:",
    options: ['1/10', '2/10', '3/10', '4/10', '5/10'],
    correct: 2,
    category:"matematica",
  },
  {
    question: "Uma pessoa aplicou R$ 2.000,00 a 5% de juros simples ao mês por 6 meses. O juro total será:",
    options: ['R$ 400', 'R$ 500', 'R$ 600', 'R$ 700', 'R$ 800'],
    correct: 2,
    category: "matematica",
  },
  {
    question: "O valor da raiz quadrada de 144 é:",
    options: ['10', '11', '12', '13', '14'],
    correct: 2,
    category: "matematica",
  },
  //portugays
  {
    question: "O uso de memes em redes sociais é exemplo de:",
    options: ['Discurso científico', 'Texto multimodal', 'Texto literário clássico', 'Discurso religioso', 'Texto jornalístico'],
    correct: 1,
    category: "portugues",  
  },
  {
    question: "“O sol brilhava como ouro no horizonte.” Essa frase contém:",
    options: ['Metáfora', 'Comparação', 'Hipérbole', 'Ironia', 'Eufemismo'],
    correct: 1,
    category: "portugues",
  },
  {
    questions: "A Semana de Arte Moderna ocorreu em:",
    options: ['1912', '1922', '1932', '1942', '1952'],
    correct: 1,
    category: "portugues",
  },
  

];

// Variáveis do jogo
let currentQuestion = 0;
let score = 0;
let selected = null;
let timerInterval = null;
let timerLeft = 30;

// Elementos DOM
const startScreen = document.getElementById('start-game');
const gameScreen = document.getElementById('gameQuiz');
const resultsScreen = document.getElementById('result-pont');
const startBtn = document.getElementById('initButton');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('resetGame');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option');
const timerElement = document.getElementById('timer');
const progressElement = document.getElementById('progress');
const finalScoreElement = document.getElementById('final-pont');
const scoreMessageElement = document.getElementById('msg-pont');

// Iniciar game
function initGame() {
    startBtn.addEventListener('click', startGame);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', resetGame);

    optionButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => selectOption(e, index));
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; // troca elementos
    }
    return array;
}

// Começar o jogo
function startGame() {
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    currentQuestion = 0;
    score = 0;

    // cria uma cópia embaralhada e pega só 10
    gameQuestions = shuffleArray([...questions]).slice(0, 10);

    loadQuestion();
}


// Carregar pergunta
function loadQuestion() {
    if (currentQuestion >= gameQuestions.length) {
        endGame();
        return;
    }

    const question = gameQuestions[currentQuestion];
    questionText.textContent = question.question;

    optionButtons.forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.className = 'option';
        btn.disabled = false;
    });

    selected = null;
    nextBtn.disabled = true;
    nextBtn.classList.remove('active');

    const progress = ((currentQuestion + 1) / gameQuestions.length) * 100;
    progressElement.style.width = progress + '%';

    startTimer();
}

// Selecionar opção
function selectOption(e, index) {
    if (selected !== null) return;

    clearInterval(timerInterval);
    selected = index;
    const correctAnswer = gameQuestions[currentQuestion].correct;

    optionButtons.forEach((btn, i) => {
        if (i === correctAnswer) {
            btn.classList.add('correct');
        } else if (i === selected && i !== correctAnswer) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });

    if (selected === correctAnswer) {
        score++;
    }

    nextBtn.disabled = false;
    nextBtn.classList.add('active');
}

// Próxima pergunta
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

// Timer
function startTimer() {
    timerLeft = 30;
    timerElement.textContent = timerLeft + 's';
    timerElement.classList.remove('warning');

    timerInterval = setInterval(() => {
        timerLeft--;
        timerElement.textContent = timerLeft + 's';

        if (timerLeft <= 10) {
            timerElement.classList.add('warning');
        }

        if (timerLeft <= 0) {
            clearInterval(timerInterval);
            optionButtons.forEach(btn => btn.disabled = true);
            nextBtn.disabled = false;
            nextBtn.classList.add('active');
        }
    }, 1000);
}

// Finalizar o jogo
function endGame() {
    clearInterval(timerInterval);
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'block';

    finalScoreElement.textContent = `${score}/${gameQuestions.length}`;
    const percentage = (score / gameQuestions.length) * 100;
    let message = '';

    if (percentage === 100) {
        message = 'Rapaz... um dos dois: ou você sabe muito, ou eu que sou burro!';
    } else if (percentage >= 80) {
        message = 'Parabéns! Você é bem inteligente :)';
    } else if (percentage >= 60) {
        message = 'Pelo menos acertou a maioria!';
    } else if (percentage >= 40) {
        message = 'Estude um pouco mais, por favor!';
    } else if (percentage >= 20) {
        message = 'Nem faça ENEM ou vestibular... é capaz de deixar sua escola envergonhada.';
    } else {
        message = 'Você é uma vergonha para a humanidade 😅';
    }

    scoreMessageElement.textContent = message;
}

// Reiniciar jogo
function resetGame() {
    resultsScreen.style.display = 'none';
    startScreen.style.display = 'block';
    currentQuestion = 0;
    score = 0;
    progressElement.style.width = '0%';
}

// Inicia com DOM carregado
document.addEventListener('DOMContentLoaded', initGame);