document.addEventListener('DOMContentLoaded', function() {

let nome = document.getElementById('input-nome');
let email = document.getElementById('input-email');
let telefone = document.getElementById('input-celular');
let mensagem = document.getElementById('input-mensagem');
let enviar = document.getElementById('enviar')
let obrigatorioNome = document.getElementById('obrigatorioNome')
let obrigatorioEmail = document.getElementById('obrigatorioEmail')
let obrigatorioCelular = document.getElementById('obrigatorioCelular')
let obrigatorioMensagem = document.getElementById('obrigatorioMensagem')


nome.addEventListener('change', function() {
    if (nome.value == '')
        { nome.classList.add('erro')
        obrigatorioNome.classList.add('display');}
    else { obrigatorioNome.classList.remove('display')
           nome.classList.remove('erro') 
           nome.classList.add('certo');}
});

email.addEventListener('change', function() {
    if (email.value == ''){ email.classList.add('erro')
        obrigatorioEmail.classList.add('display');} 
    else { obrigatorioEmail.classList.remove('display')
        email.classList.remove('erro')
        email.classList.add('certo');}
});

telefone.addEventListener('change', function() {
    if (telefone.value == ''){ telefone.classList.add('erro')
        obrigatorioCelular.classList.add('display');} 
    else { obrigatorioCelular.classList.remove('display')
         telefone.classList.remove('erro')
         telefone.classList.add('certo');}
});

mensagem.addEventListener('change', function() {
    if (mensagem.value == ''){ mensagem.classList.add('erro')
        obrigatorioMensagem.classList.add('display');}
    else { obrigatorioMensagem.classList.remove('display')
           mensagem.classList.remove('erro') 
           mensagem.classList.add('certo');}
});


enviar.addEventListener('click', verificador);

function verificador(event) {

let inputValido = true
       
if (nome.value == ''){ nome.classList.add('erro'); inputValido = false;
        obrigatorioNome.classList.add('display');}
else { obrigatorioNome.classList.remove('display')
           nome.classList.remove('erro') 
           nome.classList.add('certo');}

if (email.value == ''){ email.classList.add('erro'); inputValido = false;
            obrigatorioEmail.classList.add('display');} 
else { obrigatorioEmail.classList.remove('display')
            email.classList.remove('erro')
            email.classList.add('certo');}

if (telefone.value == ''){ telefone.classList.add('erro'); inputValido = false;
                obrigatorioCelular.classList.add('display');} 
else { obrigatorioCelular.classList.remove('display')
                 telefone.classList.remove('erro')
                 telefone.classList.add('certo');}

if (mensagem.value == ''){ mensagem.classList.add('erro'); inputValido = false;
                    obrigatorioMensagem.classList.add('display');}
else { obrigatorioMensagem.classList.remove('display')
                       mensagem.classList.remove('erro') 
                       mensagem.classList.add('certo');}

                       if (!inputValido) {
                        event.preventDefault();
                    }
}

});


    
    

       





   






