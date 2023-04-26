const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}0&limit=${limit}`

fetch(url)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
    .finally(function () {
        console.log('Requisição Concluída!')
    })


