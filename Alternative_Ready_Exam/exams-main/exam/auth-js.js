document.getElementById("auth-button").onclick = function() {
    let login = document.getElementById('login-input').value;
    let pass = document.getElementById('pass-input').value;

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.find(u => u.login === login && u.pass === pass);
    if(user) {
        alert("Login completed");
        window.location.href = 'main.html';
    } else {
        alert("Not correct login or password.");
    }
};