function faz_login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("senha").value

    if (email == "ryanceleste@gmail.com" && password == "celestethebest") {
        alert("Login com Sucesso.")
    } else {
        alert("Email ou Senha Inválidos.")
    }
}
