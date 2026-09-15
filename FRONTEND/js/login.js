let usuarios =
JSON.parse(
localStorage.getItem("usuarios")
)
||
[];





const cadastro =
document.getElementById(
"formCadastro"
);



if(cadastro){


cadastro.addEventListener(
"submit",
function(e){


e.preventDefault();



let usuario={


nome:
document.getElementById("nome").value,


email:
document.getElementById("email").value,


senha:
document.getElementById("senha").value


};



usuarios.push(usuario);



localStorage.setItem(

"usuarios",

JSON.stringify(usuarios)

);



alert(
"Cadastro realizado!"
);



window.location="login.html";



}

);



}





const login =
document.getElementById(
"formLogin"
);



if(login){


login.addEventListener(
"submit",
function(e){


e.preventDefault();



let email =
document.getElementById(
"loginEmail"
).value;



let senha =
document.getElementById(
"loginSenha"
).value;



let usuario =
usuarios.find(
u =>
u.email == email &&
u.senha == senha
);



if(usuario){


localStorage.setItem(

"usuarioLogado",

JSON.stringify(usuario)

);



alert(
"Login realizado!"
);



window.location="index.html";


}

else{


alert(
"Dados incorretos"
);


}



}

);



}