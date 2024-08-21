const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você saiu da escola e viu uma nova tecnologia de maquiagem que promete transformar seu visual instantaneamente com apenas um clique, qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é incrível e facilita muito a vida!",
                afirmacao: "Aproveito a inovação e a tecnologia."
            },
            {
                texto: "Isso parece superficial e não é confiável.",
                afirmacao: "Prefiro técnicas tradicionais de maquiagem."
            }
        ]
    },
    {
        enunciado: "Com a introdução dessa nova tecnologia de maquiagem, uma professora de estética da sua escola decidiu fazer uma série de aulas sobre técnicas de maquiagem. No final de uma aula, ela pede que você escreva um trabalho sobre a aplicação de novas tecnologias na maquiagem. Qual abordagem você escolheria para realizar essa tarefa?",
        alternativas: [
            {
                texto: "Usaria a tecnologia de maquiagem para experimentar diferentes looks e descrever como ela pode ser aplicada na prática.",
                afirmacao: "Exploro a tecnologia para uma abordagem prática."
            },
            {
                texto: "Faria o trabalho com base em pesquisas sobre técnicas de maquiagem tradicionais e opiniões pessoais, sem usar a tecnologia diretamente.",
                afirmacao: "Baseio meu trabalho em métodos tradicionais e minha própria experiência."
            }
        ]
    },
    {
        enunciado: "Durante um debate em sala sobre como a tecnologia está mudando o mundo da maquiagem, qual é a sua posição sobre o impacto dessas inovações no setor de beleza?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia pode criar novas oportunidades na maquiagem e melhorar a forma como as pessoas se expressam.",
                afirmacao: "Vejo a tecnologia como uma melhoria no setor de beleza."
            },
            {
                texto: "Estou preocupado com a perda de técnicas tradicionais e a dependência excessiva da tecnologia para alcançar resultados de beleza.",
                afirmacao: "Preocupo-me com a substituição das técnicas tradicionais pela tecnologia."
            }
        ]
    },
    {
        enunciado: "Após a discussão, você precisa criar uma imagem que represente sua opinião sobre o uso da tecnologia na maquiagem. Qual ferramenta você escolheria para essa tarefa?",
        alternativas: [
            {
                texto: "Usaria um software de design gráfico para criar a imagem manualmente, refletindo as minhas ideias pessoais sobre maquiagem.",
                afirmacao: "Prefiro criar manualmente para uma expressão mais pessoal."
            },
            {
                texto: "Optaria por um gerador de imagens de maquiagem baseado em tecnologia para criar a imagem automaticamente.",
                afirmacao: "Uso a tecnologia para criar a imagem de forma rápida."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo sobre tendências de maquiagem para entregar na próxima semana. Parte do grupo utilizou a tecnologia de maquiagem para criar o conteúdo, e o resultado é idêntico ao produzido pela ferramenta. O que você faria nessa situação?",
        alternativas: [
            {
                texto: "Considero que usar a tecnologia para criar o conteúdo é uma contribuição válida e não vejo necessidade de alterações.",
                afirmacao: "A tecnologia é uma ferramenta válida para o projeto."
            },
            {
                texto: "Embora a tecnologia seja útil, é importante revisar e personalizar o trabalho para refletir a perspectiva do grupo e garantir a autenticidade.",
                afirmacao: "A personalização e revisão são essenciais para garantir um trabalho único."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como a tecnologia influenciará o futuro da maquiagem?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
