const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você lê uma notícia sobre o aquecimento global e descobre que a temperatura média da Terra está aumentando rapidamente. Qual é a sua reação imediata?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Sentiu uma preocupação com as possíveis consequências do aumento da temperatura global, como o derretimento das calotas polares e eventos climáticos extremos."
            },
            {
                texto: "Isso é interessante!",
                afirmacao: "Quis saber mais sobre as causas e efeitos do aquecimento global e como isso pode ser solucionado."
            }
        ]
    },
    {
        enunciado: "Após aprender sobre o aquecimento global, sua professora pede que você faça uma pesquisa sobre como reduzir a emissão de gases de efeito estufa. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta online para pesquisar soluções sobre a redução de gases de efeito estufa e compila as informações em um relatório.",
                afirmacao: "Conseguiu encontrar várias estratégias eficazes para reduzir as emissões e usou essas informações para elaborar um relatório detalhado."
            },
            {
                texto: "Baseia-se em livros e artigos científicos que você já tem em casa, além de discutir o tema com seus colegas para coletar diferentes opiniões.",
                afirmacao: "Preferiu utilizar recursos que já conhece e envolver outros para enriquecer seu entendimento sobre o tema."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre o aquecimento global, discutem como as mudanças climáticas podem afetar a agricultura e a segurança alimentar. Qual é a sua posição neste debate?",
        alternativas: [
            {
                texto: "Defende que o aquecimento global pode afetar negativamente a agricultura, mas também acredita que novas tecnologias podem ajudar a mitigar esses impactos.",
                afirmacao: "Acredita que, embora o aquecimento global represente um desafio para a agricultura, a inovação tecnológica pode oferecer soluções para minimizar os danos."
            },
            {
                texto: "Preocupa-se com a possibilidade de que mudanças climáticas possam causar escassez de alimentos e defende ações urgentes para proteger a segurança alimentar.",
                afirmacao: "Sua preocupação com a segurança alimentar motivou a apoiar políticas e práticas que ajudem a garantir a produção de alimentos em um clima em mudança."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um cartaz sobre a importância de reduzir a emissão de gases de efeito estufa. Qual método você escolhe para criar o cartaz?",
        alternativas: [
            {
                texto: "Cria o cartaz utilizando uma ferramenta de design gráfica como o Canva para incluir gráficos e informações visuais sobre o impacto das emissões.",
                afirmacao: "Decidiu usar uma ferramenta de design para tornar o cartaz informativo e visualmente atraente, ajudando a transmitir a mensagem de forma eficaz."
            },
            {
                texto: "Desenha o cartaz à mão, destacando mensagens e ilustrações sobre a redução de gases de efeito estufa.",
                afirmacao: "Optou por um design manual para adicionar um toque pessoal e criativo ao cartaz, destacando a importância da ação individual e coletiva."
            }
        ]
    },
    {
        enunciado: "Você está colaborando em um projeto de grupo sobre as consequências do aquecimento global e percebe que um membro do grupo copiou informações diretamente de um site sem citar a fonte. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o trabalho como está, pensando que a informação é útil, mesmo que não tenha sido referenciada corretamente.",
                afirmacao: "Percebeu que aceitar trabalho não original pode levar a problemas de integridade e passou a se sentir mais cauteloso sobre o uso de fontes."
            },
            {
                texto: "Sugere revisar o trabalho para garantir que todas as fontes sejam corretamente citadas e que o conteúdo seja original e ético.",
                afirmacao: "Acredita na importância da integridade acadêmica e ajudou a garantir que o trabalho do grupo respeite as normas de citação e originalidade."
            }
        ]
    }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
