
function validarLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
 

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    } else {
        window.location.href = 'entrar.html';
        return true;
    }
}
 
function validarRecuperacaoSenha() {
    var email = document.getElementById('email').value;
 

    if (email === '') {
        alert('Por favor, informe seu e-mail.');
        return false;
    } else {
  
        alert('Sua senha foi recuperada. Verifique seu e-mail.');
        return true;
    }
}