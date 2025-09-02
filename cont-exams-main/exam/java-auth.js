document.getElementById('click_auth').onclick = auth_data;
function auth_data() {
    let a_login = document.getElementById('login-input').value.trim();
    let a_pass = document.getElementById('pass-input').value.trim();
    let a_credits = localStorage.getItem('credits');

    if (a_credits) {
        let credit = JSON.parse(a_credits)
        if (a_login === credit.login && a_pass === credit.password) {
            alert("Welcome user : " + a_login)
            window.location.href = 'main.html';
        }
        else
            alert("Incorrect validation")
    }
}