const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagemFinal = document.getElementById('mensagemFinal');
const botoes = document.getElementById('botoes');
const body = document.body;

botaoNao.addEventListener('mouseover', () => {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  const x = Math.random() * (larguraJanela - 100);
  const y = Math.random() * (alturaJanela - 50);

  botaoNao.style.left = `${x}px`;
  botaoNao.style.top = `${y}px`;
});

botaoSim.addEventListener('click', () => {
  botoes.style.display = 'none';
  document.querySelector('h1').style.display = 'none';
  body.style.backgroundImage = 'url(./img/urso_elvis.jpg)'; 
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  botaoSim.style.backgroundImage = 'none'; 
  mensagemFinal.style.display = 'block';
});