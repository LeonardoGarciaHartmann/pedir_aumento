const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagemFinal = document.getElementById('mensagemFinal');
const botoes = document.getElementById('botoes');

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
  mensagemFinal.style.display = 'block';
});
