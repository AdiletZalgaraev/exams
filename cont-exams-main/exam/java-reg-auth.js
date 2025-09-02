document.getElementById('click_reg').onclick = reg_data;

function reg_data() {
    let login = document.getElementById('login-output').value.trim();
    let password = document.getElementById('pass-output').value.trim();

    if(!login || !password)
    {
        alert("Why data u enter is null?")
    }
    else
    {
        let credits =
        {
            'login': login,
            'password': password
        }
        localStorage.setItem('credits', JSON.stringify(credits))
        window.location.href = 'Auth.html';
    }
}