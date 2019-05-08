const button = document.getElementById('send_form');
button.addEventListener('click', (evento) => {
    // console.log('oi'); //faz requisição do formulário, submete automaticamente (recarrega a página). Para evitar, utiliza-se preventDefault
    evento.preventDefault(); //previne evento padrão. Geralmente é inserido no começo da função

    const nome = document.getElementById('first_name').value;
    const sobrenome = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json', //----->metatags
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //------>BODY: informações para mandar ou não para api / JSON.stringify: transforma o objeto em string.
            'first_name': nome,
            'last_name': sobrenome,
            'email': email,
        })
    })
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data);
            // document.getElementById('message').innerHTML = 'Sucesso!!! :)' //inclui texto e tags
            document.getElementById('message').textContent = 'Sucesso!!! :)' //texto puro            
        })

        .catch((erro) => {
            console.log(erro);
        })
})