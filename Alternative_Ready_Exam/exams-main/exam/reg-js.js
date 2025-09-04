document.getElementById('register-button').onclick = function() {
    const login = document.getElementById('login-output').value;
    const pass = document.getElementById('pass-output').value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.login === login)) {
        alert('This login is register before');
        return;
    }

    users.push({ login: login, pass: pass });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Login completed');
    window.location.href = 'Auth.html'; 
};