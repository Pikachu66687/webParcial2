function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'mel' && password === '123') {
        window.location.href = `admin.html?user=${username}`; 

    } else {
        const error = document.getElementById('login-error');
        error.classList.remove('d-none');
    }
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('user'); 

    if (username) {
        document.getElementById('bienvenida').innerHTML = `<h2>Bienvenido/a, ${username}</h2>`;
    } else {
        document.getElementById('bienvenida').innerHTML = '<h2>Usuario no reconocido</h2>';
    }
};