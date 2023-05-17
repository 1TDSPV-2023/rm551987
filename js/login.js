"use strict";

//MOSTRAR SENHA



//MOSTRAR SENHA

//CRIANDO OBJETOS


//Lista de usuario

let listDeusuario = [

    {
        nomeCompleto : "José das Couves",
        nomeUsuario : "Jose",
        senhaUsuario : 123456
    }

    ,

    
    {
        nomeCompleto : "João Paulino",
        nomeUsuario : "Joao",
        senhaUsuario : 123456
    }

    ,

    {
        nomeCompleto : "Maria Tomaite",
        nomeUsuario : "Maria",
        senhaUsuario : 123456
    }
    ,
    {
        nomeCompleto : "Paulo da Selva",
        nomeUsuario : "paulo",
        senhaUsuario : 123456
    }



];

localStorage.setItem( 'listaUser', JSON.stringify(listDeusuario));




addEventListener('click', (evento) => {
    let userInput = document.querySelector("#idUser");
    
    let passwordInput = document.querySelector("#idPass");
    
   //MOSTRAR SENHA
   // const eyePass = document.querySelector(".fa-eyes");

   if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){

    evento.target.setAttribute("style","cursor:pointer;")

    if(passInput.getAttribute("type") == "password"){
        passInput.setAttribute("type","text");
        evento.target.setAttribute("class","fa fa-eye-slash")  
    }else{
        evento.target.setAttribute("style","cursor:pointer");
        evento.target.setAttribute("class","fa fa-eye");  
        passInput.setAttribute("type","password"); 
    }


}


    let listDeusuarioRecuperada =  JSON.parse(localStorage.getItem("listaUser"))
    
    
    if (evento.target.id == "btnSubmit") {
        
       try{
       
        listDeusuarioRecuperada.forEach( (usuario) => {

        
        if (userInput.value == usuario.nomeUsuario && passwordInput.value == usuario.senhaUsuario) {
            
            throw "Usuário VALIDO!!!";

        } 

            } );

            throw "Usuário ou Senha Invalido!!!";
    
    
        }catch(err){
            if(err == "Usuário VALIDO !!!"){
                
                window.location.href = "../sucesso.html"
            
            }
            else{
                console.log("Usuário ou Senha Invalido!!!");
            }
    }
    }
});