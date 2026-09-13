let carrinho =
JSON.parse(
localStorage.getItem("carrinho")
)
||
[];




function adicionarCarrinho(id){



const produto =
produtos.find(
p=>p.id == id
);



carrinho.push(produto);



localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);



alert(
"Produto adicionado ao carrinho!"
);



}





function carregarCarrinho(){



const area =
document.getElementById(
"lista-carrinho"
);



if(!area)
return;



let total=0;



carrinho.forEach((produto,index)=>{


total += produto.preco;



area.innerHTML += `


<div class="produto-card">


<h3>

${produto.nome}

</h3>


<p>

R$ ${produto.preco}

</p>


<button onclick="removerProduto(${index})">

Remover

</button>


</div>


`;



});



document.getElementById(
"total"
).innerHTML =
"Total: R$ "+total.toFixed(2);



}




function removerProduto(index){


carrinho.splice(index,1);



localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);



location.reload();


}


carregarCarrinho();

function finalizarWhatsApp(){


let mensagem =
"Olá, quero comprar:%0A";



carrinho.forEach(produto=>{


mensagem +=

"- "
+
produto.nome
+
" R$ "
+
produto.preco
+
"%0A";


});



window.open(

"https://wa.me/5587998212912?text="
+
mensagem

);


}