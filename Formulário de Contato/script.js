$(document).ready(function(){
    $('#contactaForm').submit(function(event){
        event.preventDefault();
        var nome = $('#name').val();
        var email = $('#email').val();
        var mensagem = $('#mensagem').val();

        if (nome === ''|| email === ''|| mensagem === ''){
            alert('Por favor, preencha todos os campos do formulário.')
            return
        }
        alert('Formulário enviado com sucesso! \n\Nome: '  + nome +'\nEmail: '+ email + '\nMensagem: '+ mensagem);
        $('#name, #email,#mensagem').val('');
    })
})