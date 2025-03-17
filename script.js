let perguntaAtual = 0;
let respostasCorretas = 0;
let respostasErradas = 0;
let tempoRestante = 600;
let timer;
let nomeAluno = "";
let materiaEscolhida = "";
let raAluno = "";

const perguntas = {
  portugues: [
    {
      pergunta: "Qual é o antônimo de 'feliz'?",
      respostas: ["Triste", "Bom", "Rápido", "Claro"],
      correta: 0,
    },
    {
      pergunta: "Qual destas palavras é um substantivo?",
      respostas: ["Correr", "Feliz", "Cachorro", "Andar"],
      correta: 2,
    },
    {
      pergunta: "Qual é a frase correta?",
      respostas: [
        "Eu gosto de correr.",
        "Eu gosto corre de.",
        "Correr eu de gosto.",
        "Eu correr gosto de.",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o verbo da frase: 'Eu estudo todos os dias.'?",
      respostas: ["Eu", "Estudo", "Todos", "Dias"],
      correta: 1,
    },
    {
      pergunta: "Qual dessas palavras é um adjetivo?",
      respostas: ["Cão", "Branco", "Correr", "Dia"],
      correta: 1,
    },
    {
      pergunta: "A palavra 'livro' é o quê?",
      respostas: ["Verbo", "Substantivo", "Adjetivo", "Pronome"],
      correta: 1,
    },
    {
      pergunta:
        "Qual é o pronome correto para completar: '___ fui ao mercado.'?",
      respostas: ["Ela", "Nós", "Eu", "Tu"],
      correta: 2,
    },
    {
      pergunta:
        "Como chamamos uma palavra que substitui o nome de uma pessoa ou coisa?",
      respostas: ["Verbo", "Substantivo", "Pronome", "Adjetivo"],
      correta: 2,
    },
    {
      pergunta: "Qual é o plural de 'gato'?",
      respostas: ["Gatos", "Gata", "Gatinhos", "Gatinho"],
      correta: 0,
    },
    {
      pergunta: "O que significa a palavra 'amigo'?",
      respostas: [
        "Uma pessoa que é legal",
        "Uma comida",
        "Um objeto",
        "Uma cor",
      ],
      correta: 0,
    },
  ],

  matematica: [
    {
      pergunta: "Quanto é 3 + 2?",
      respostas: ["6", "4", "5", "7"],
      correta: 2,
    },
    {
      pergunta: "Quanto é 10 - 3?",
      respostas: ["7", "5", "6", "4"],
      correta: 0,
    },
    {
      pergunta: "Qual é o dobro de 4?",
      respostas: ["8", "10", "12", "6"],
      correta: 0,
    },
    {
      pergunta: "Quanto é 5 x 2?",
      respostas: ["10", "8", "7", "12"],
      correta: 0,
    },
    {
      pergunta: "Quanto é 20 ÷ 4?",
      respostas: ["6", "5", "4", "3"],
      correta: 1,
    },
    {
      pergunta: "Se você tem 3 maçãs e ganha 2, quantas maçãs você tem agora?",
      respostas: ["5", "3", "2", "6"],
      correta: 0,
    },
    {
      pergunta: "Quanto é 7 + 7?",
      respostas: ["13", "14", "12", "15"],
      correta: 1,
    },
    {
      pergunta: "Quanto é 9 - 6?",
      respostas: ["5", "3", "4", "2"],
      correta: 1,
    },
    {
      pergunta: "Qual é o próximo número após 19?",
      respostas: ["20", "18", "21", "17"],
      correta: 0,
    },
    {
      pergunta: "Quanto é 6 x 3?",
      respostas: ["18", "15", "12", "9"],
      correta: 0,
    },
  ],

  geografia: [
    {
      pergunta: "Qual é o continente onde fica o Brasil?",
      respostas: ["África", "América do Sul", "Ásia", "Europa"],
      correta: 1,
      justificativa: "O Brasil está localizado no continente sula-americano.",
    },
    {
      pergunta: "Qual é o maior estado do Brasil?",
      respostas: ["São Paulo", "Amazonas", "Rio de Janeiro", "Bahia"],
      correta: 1,
      justificativa: "O maior estado do Brasil é o Amazonas.",
    },
    {
      pergunta: "Qual é o nome do rio mais longo do Brasil?",
      respostas: [
        "Rio São Francisco",
        "Rio Amazonas",
        "Rio Paraná",
        "Rio Tietê",
      ],
      correta: 1,
      justificativa: "O Rio Amazonas é o mais longo do Brasil.",
    },
    {
      pergunta: "O Brasil é um país localizado no hemisfério?",
      respostas: ["Norte", "Sul", "Oeste", "Leste"],
      correta: 1,
      justificativa: "O Brasil está localizado no hemisfério sul.",
    },
    {
      pergunta: "Quantos estados tem o Brasil?",
      respostas: ["26", "27", "25", "30"],
      correta: 1,
      justificativa: "O Brasil tem 26 estados e o Distrito Federal.",
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      correta: 2,
      justificativa: "Brasília é a capital do Brasil.",
    },
    {
      pergunta: "O que é o clima?",
      respostas: [
        "O tempo de um dia",
        "O tempo em uma estação do ano",
        "A temperatura média de uma região",
        "O que acontece durante a noite",
      ],
      correta: 2,
      justificativa:
        "Clima é a temperatura média de uma região ao longo do tempo.",
    },
    {
      pergunta: "Qual desses é um bioma do Brasil?",
      respostas: ["Deserto", "Cerrado", "Geleiras", "Tundra"],
      correta: 1,
      justificativa: "O Cerrado é um bioma do Brasil.",
    },
    {
      pergunta: "Qual é o nome do maior país do mundo?",
      respostas: ["China", "Brasil", "Rússia", "Estados Unidos"],
      correta: 2,
      justificativa: "A Rússia é o maior país do mundo.",
    },
    {
      pergunta: "Onde fica o Monte Everest?",
      respostas: ["Na África", "Na América", "Na Ásia", "Na Europa"],
      correta: 2,
      justificativa: "O Monte Everest fica na Ásia.",
    },
  ],

  historia: [
    {
      pergunta: "Quem foi o primeiro presidente do Brasil?",
      respostas: [
        "Getúlio Vargas",
        "Deodoro da Fonseca",
        "Juscelino Kubitschek",
        "Pedro Álvares Cabral",
      ],
      correta: 1,
      justificativa: "Deodoro da Fonseca foi o primeiro presidente do Brasil.",
    },
    {
      pergunta: "Em que ano o Brasil se tornou independente?",
      respostas: ["1822", "1500", "1889", "1930"],
      correta: 0,
      justificativa: "O Brasil se tornou independente em 1822.",
    },
    {
      pergunta: "Quem foi a primeira mulher a assinar a Lei Áurea?",
      respostas: ["D. Maria I", "Princesa Isabel", "D. Pedro II", "Catarina"],
      correta: 1,
      justificativa: "A Princesa Isabel assinou a Lei Áurea em 1888.",
    },
    {
      pergunta: "Quem foi o responsável por descobrir o Brasil?",
      respostas: [
        "Pedro Álvares Cabral",
        "Cristóvão Colombo",
        "Vasco da Gama",
        "Fernão de Magalhães",
      ],
      correta: 0,
      justificativa:
        "Pedro Álvares Cabral foi quem descobriu o Brasil em 1500.",
    },
    {
      pergunta: "Em que ano a República foi proclamada?",
      respostas: ["1889", "1900", "1822", "1930"],
      correta: 0,
      justificativa: "A República foi proclamada em 1889.",
    },
    {
      pergunta: "Quem foi o imperador do Brasil?",
      respostas: [
        "Deodoro da Fonseca",
        "Getúlio Vargas",
        "D. Pedro II",
        "Juscelino Kubitschek",
      ],
      correta: 2,
      justificativa: "D. Pedro II foi o imperador do Brasil.",
    },
    {
      pergunta: "O que aconteceu no 7 de setembro de 1822?",
      respostas: [
        "Proclamação da República",
        "Independência do Brasil",
        "Golpe Militar",
        "Revolução de 1930",
      ],
      correta: 1,
      justificativa:
        "No dia 7 de setembro de 1822, o Brasil proclamou sua independência.",
    },
    {
      pergunta: "Quem foi o rei de Portugal quando o Brasil foi descoberto?",
      respostas: ["Dom Pedro I", "Dom João VI", "Dom Afonso", "Dom Henrique"],
      correta: 1,
      justificativa:
        "Dom João VI era o rei de Portugal quando o Brasil foi descoberto.",
    },
    {
      pergunta: "Quem assinou a Constituição de 1988?",
      respostas: [
        "Fernando Collor",
        "José Sarney",
        "Tancredo Neves",
        "Getúlio Vargas",
      ],
      correta: 1,
      justificativa:
        "José Sarney foi o presidente que assinou a Constituição de 1988.",
    },
    {
      pergunta: "O que é a escravidão?",
      respostas: [
        "Pessoa livre",
        "Trabalho forçado sem liberdade",
        "Governo",
        "Militarismo",
      ],
      correta: 1,
      justificativa:
        "A escravidão foi um sistema onde pessoas eram forçadas a trabalhar sem liberdade.",
    },
  ],

  ciencias: [
    {
      pergunta: "O que é fotossíntese?",
      respostas: [
        "Processo de respiração das plantas",
        "Transformação de luz em energia pelas plantas",
        "Produção de sementes pelas plantas",
        "O processo de alimentação das plantas",
      ],
      correta: 1,
      justificativa:
        "A fotossíntese é o processo em que as plantas transformam a luz do sol em energia.",
    },
    {
      pergunta: "Qual é o nome do nosso planeta?",
      respostas: ["Vênus", "Terra", "Marte", "Saturno"],
      correta: 1,
      justificativa: "O nome do nosso planeta é Terra.",
    },
    {
      pergunta: "O que é a água?",
      respostas: [
        "Um líquido sem sabor",
        "Uma substância que faz plantas crescerem",
        "Uma substância que forma rios e mares",
        "Todas as alternativas estão corretas",
      ],
      correta: 3,
      justificativa:
        "A água é um líquido essencial para a vida, que pode ser encontrada em rios, mares e também ajuda as plantas a crescerem.",
    },
    {
      pergunta: "Quantos continentes existem?",
      respostas: ["4", "5", "6", "7"],
      correta: 3,
      justificativa:
        "Existem 7 continentes: África, Antártica, Ásia, Europa, América, Oceania e a América do Norte.",
    },
    {
      pergunta: "Qual dos seguintes é um animal vertebrado?",
      respostas: ["Peixe", "Aranha", "Cavalo", "Formiga"],
      correta: 2,
      justificativa:
        "O cavalo é um animal vertebrado, pois possui coluna vertebral.",
    },
    {
      pergunta: "Qual é a principal fonte de energia para as plantas?",
      respostas: ["Água", "Sol", "Ar", "Solo"],
      correta: 1,
      justificativa:
        "A principal fonte de energia para as plantas é a luz do Sol.",
    },
    {
      pergunta: "O que são os planetas?",
      respostas: [
        "Estrelas",
        "Astros que giram ao redor do Sol",
        "Cometas",
        "Nuvens de gás",
      ],
      correta: 1,
      justificativa: "Os planetas são astros que giram ao redor do Sol.",
    },
    {
      pergunta: "Onde podemos encontrar oxigênio?",
      respostas: [
        "Na água",
        "No ar",
        "Em todos os lugares",
        "Somente nas plantas",
      ],
      correta: 1,
      justificativa:
        "O oxigênio pode ser encontrado no ar e é essencial para a respiração dos seres vivos.",
    },
    {
      pergunta: "Qual é o principal gás que compõe o ar?",
      respostas: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Dióxido de carbono"],
      correta: 2,
      justificativa: "O principal gás que compõe o ar é o Nitrogênio.",
    },
    {
      pergunta: "O que é a metamorfose de uma borboleta?",
      respostas: [
        "Quando ela nasce",
        "Quando ela se alimenta de plantas",
        "Quando ela se transforma de larva para borboleta",
        "Quando ela voa",
      ],
      correta: 2,
      justificativa:
        "A metamorfose da borboleta é o processo de transformação de larva em borboleta.",
    },
  ],
};

function startGame() {
  const nomeInput = document.getElementById("nome-aluno").value;
  const raInput = document.getElementById("ra").value;
  if (nomeInput === "" || raInput === "") {
    alert("Por favor, digite seu nome e RA.");
    return;
  }
  nomeAluno = nomeInput;
  raAluno = raInput;
  document.getElementById("nome-usuario").textContent = nomeAluno;
  document.getElementById("inicio").style.display = "none";
  document.getElementById("escolha-materia").style.display = "block"; 

}

document
  .getElementById("btn-iniciar-nome")
  .addEventListener("click", startGame);

function escolherMateria(materia) {
  materiaEscolhida = materia;
  document.getElementById("escolha-materia").style.display = "none";
  document.getElementById("jogo").style.display = "block";
  mostrarPergunta();
  iniciarTempo();
}

document
  .getElementById("btn-portugues")
  .addEventListener("click", () => escolherMateria("portugues"));
document
  .getElementById("btn-matematica")
  .addEventListener("click", () => escolherMateria("matematica"));
document
  .getElementById("btn-historia")
  .addEventListener("click", () => escolherMateria("historia"));
document
  .getElementById("btn-geografia")
  .addEventListener("click", () => escolherMateria("geografia"));
document
  .getElementById("btn-ciencias")
  .addEventListener("click", () => escolherMateria("ciencias"));

function mostrarPergunta() {
  if (perguntaAtual >= perguntas[materiaEscolhida].length) {
    clearInterval(timer);
    mostrarResultado();
    return;
  }

  const pergunta = perguntas[materiaEscolhida][perguntaAtual];
  document.getElementById("pergunta").textContent = pergunta.pergunta;

  const respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";
  pergunta.respostas.forEach((resposta, index) => {
    const button = document.createElement("button");
    button.textContent = resposta;
    button.onclick = function () {
      if (index === pergunta.correta) {
        respostasCorretas++;
      } else {
        respostasErradas++;
      }
      perguntaAtual++;
      mostrarPergunta();
    };
    respostasDiv.appendChild(button);
  });
}

function iniciarTempo() {
  timer = setInterval(() => {
    tempoRestante--;
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    document.getElementById("tempo-restante").textContent = `${minutos}:${
      segundos < 10 ? "0" : ""
    }${segundos}`;

    if (tempoRestante <= 0) {
      clearInterval(timer);
      mostrarResultado();
    }
  }, 1000);
}

function mostrarResultado() {
  const totalPerguntas = perguntas[materiaEscolhida].length;
  const desempenho = (respostasCorretas / totalPerguntas) * 100;
  const notaFinal = (desempenho / 100) * 10;

  document.getElementById("nome-aluno-resultado").textContent = nomeAluno;
  document.getElementById("acertos").textContent = respostasCorretas;
  document.getElementById("erros").textContent = respostasErradas;
  document.getElementById("porcentagem").textContent = `${desempenho.toFixed(2)}%`;
  document.getElementById("nota-final").textContent = notaFinal.toFixed(1);
  document.getElementById("jogo").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("nome-aluno").value = "";
  document.getElementById("ra").value = "";

    // Enviar dados para o backend   
    const resultado = {
      nomeAluno: nomeAluno,
      raAluno: raAluno,
      materia: materiaEscolhida,
      acertos: respostasCorretas,
      erros: respostasErradas,
      porcentagem: desempenho,
      notaFinal: notaFinal
    };
  
    fetch('http://localhost/quiz/salvar_resultado.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resultado)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erro ao salvar resultado:', error);
    });
  }
    document.getElementById("reiniciar").addEventListener("click", function () { 
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("nome-aluno").value = "";
    document.getElementById("ra").value = "";
    respostasCorretas = 0;
    respostasErradas = 0;
    perguntaAtual = 0;
    tempoRestante = 600;
});