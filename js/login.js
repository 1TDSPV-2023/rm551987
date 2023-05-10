"use strict";

const usuario1 = { 
    nomeUsuario : "rita-lee", 
    senhaUsuario: "98762"
}

const usuario2 = { 
    nomeUsuario : "pt01", 
    senhaUsuario: "7777"
}

console.log()
usuario2.nomeUsuario = "Juquinha";
console.log(usuario2.nomeUsuario);

//Lista de usuario

let listDeusuario = [];
listDeusuario.push(usuario1);
listDeusuario.push(usuario2);

addEventListener('click', (evento) => {
    let userInput = document.querySelector("#idUser");
    
    let passwordInput = document.querySelector("#idPass");
    
    if (evento.target.id == "btnSubmit") {
        
       try{
       
        listDeusuario.forEach( (usuario) => {

        
        if (userInput.value == usuario.nomeUsuario && passwordInput.value == usuario.senhaUsuario) {
            
            throw "Usuário VALIDO!!!";

        } 

            } );

            throw "Usuário ou Senha Invalido!!!";
    
    
        }catch(err){
            if(err == "Usuário VALIDO !!!"){
                console.log("Usuário VALIDO !!!");
            }
            else{
                console.log("Usuário ou Senha Invalido!!!");
            }
    }
    }
});