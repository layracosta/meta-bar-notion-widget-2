const meta = 700000;

// Pega valor armazenado ou inicia com 0
let arrecadado = parseFloat(localStorage.getItem("arrecadado")) || 0;

function atualizarBarra() {
  // calcula percentual
  let percent = Math.min((arrecadado / meta) * 100, 100);

  const barra = document.getElementById("progress");
  barra.style.width = percent + "%";
  barra.innerText = Math.round(percent) + "%";

  // muda a cor da barra
  if (percent < 50) {
    barra.style.background = "#ff4d4d"; // vermelho
  } else if (percent < 80) {
    barra.style.background = "#ffcc00"; // amarelo
  } else {
    barra.style.background = "#4caf50"; // verde
  }

  // atualiza textos
  document.getElementById("valorAtual").innerText = arrecadado.toLocaleString('pt-BR');
  document.getElementById("meta").innerText = meta.toLocaleString('pt-BR');

  const restante = Math.max(meta - arrecadado, 0);
  document.getElementById("faltam").innerText = restante > 0
    ? restante.toLocaleString('pt-BR')
    : "0 🎉 Meta atingida!";

  // salva no localStorage
  localStorage.setItem("arrecadado", arrecadado);
}

// função chamada ao clicar "Adicionar"
function adicionarValor() {
  const input = document.getElementById("novoValor");
  const valor = parseFloat(input.value) || 0;
  arrecadado += valor;
  input.value = '';
  atualizarBarra();
}

// inicializa a barra ao carregar a página
atualizarBarra();

