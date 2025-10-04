let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  carrinho.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarPedido() {
  let mensagem = "Olá, gostaria de fazer o seguinte pedido:\n";
  carrinho.forEach(item => {
    mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
  });
  mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
  
  let telefone = "5541999539139"; // coloque o número do WhatsApp do dono
  let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}
