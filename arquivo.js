//pegar elementos do html para o js
const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// clicar em fazer pergunta

function fazerPergunta() {
  //caso a pergunta esteja vazia
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  //juntar pergunta e resposta
  const pergunta = '<div>' + inputPergunta.value + '</div>'

  //gera numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  //sumir a resposta depois de 3 segundos
  setTimeout(function () {
    respostaElement.style.opacity = 0
  }, 5000)
}
