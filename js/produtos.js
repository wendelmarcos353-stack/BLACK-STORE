const produtos = [


{
id:1,

nome:"Fone Bluetooth Premium",

categoria:"Tecnologia",

preco:99.90,

imagem:"imagens/produtos/fone.jpg",

descricao:"Fone sem fio com alta qualidade de som."

},



{
id:2,

nome:"Mouse Gamer RGB",

categoria:"Games",

preco:79.90,

imagem:"imagens/produtos/mouse.jpg",

descricao:"Mouse gamer com iluminação RGB."

},



{
id:3,

nome:"Smartwatch Black",

categoria:"Acessórios",

preco:199.90,

imagem:"imagens/produtos/watch.jpg",

descricao:"Relógio inteligente completo."

}



];





function mostrarProdutos(id){


let area=document.getElementById(id);


if(!area) return;



produtos.forEach(produto=>{


area.innerHTML += `


<div class="produto-card">


<img src="${produto.imagem}">


<h3>

${produto.nome}

</h3>



<p>

${produto.categoria}

</p>



<strong>

R$ ${produto.preco.toFixed(2)}

</strong>



<a href="produto.html?id=${produto.id}">

<button>

Ver produto

</button>

</a>



</div>



`;



});


}




mostrarProdutos("catalogo-produtos");

mostrarProdutos("lista-produtos");