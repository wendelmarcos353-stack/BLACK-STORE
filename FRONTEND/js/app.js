const parametros = new URLSearchParams(
window.location.search
);



const idProduto = parametros.get("id");



function carregarProduto(){


const area =
document.getElementById(
"detalhe-produto"
);



if(!area || !idProduto)
return;



const produto =
produtos.find(
p=>p.id == idProduto
);



area.innerHTML = `


<div class="produto-detalhe">


<img src="${produto.imagem}">



<h1>

${produto.nome}

</h1>



<p>

${produto.descricao}

</p>



<h2>

R$ ${produto.preco.toFixed(2)}

</h2>



<button onclick="adicionarCarrinho(${produto.id})">

Comprar agora

</button>



</div>



`;



}



carregarProduto();