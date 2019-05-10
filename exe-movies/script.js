const movies = document.querySelector('.movies');

const searchBox = document.getElementById('movie');

const botao = document.querySelector('button');

botao.addEventListener('click', (evento) => {
    evento.preventDefault();


fetch(`http://www.omdbapi.com/?s=${searchBox.value}&apikey=3e82cc16`)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        data.Search.forEach((catalog) => {
            const div1 = document.createElement('div');
            div1.setAttribute('class', 'box');
            div1.setAttribute('data-id', catalog.imdbID)
            movies.appendChild(div1)

            const cartaz = document.createElement('img');
            cartaz.setAttribute('src', catalog.Poster);
            div1.appendChild(cartaz)

        })
    })

    .catch((erro) => {
        console.log(erro);
    })

})