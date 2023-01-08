listAllUsers = []

addEventListener('submit', function (evento) {
    evento.preventDefault()
    
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    adicionarDados = (value1, value2, value3) => {
        const newUser = {
            name: nome,
            login: email,
            password: senha
        }
        return listAllUsers.push(newUser)
    }
    adicionarDados(nome, email, senha)

    for (let i in listAllUsers) {
        console.log(listAllUsers[i])
    }
})