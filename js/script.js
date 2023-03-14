let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

// btnBuscarFilme.onclick = () => {
//     if(inputBuscarFilme.value.length > 0){
//         console.log(inputBuscarFilme.value);
//     }
//     return false;
// }

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=d24fb342&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach((item) => {
                console.log(item);
                let filme = new Filme(
                    item.imdbID, //id
                    item.Title, //titulo
                    item.Year, //ano
                    null, //genero
                    null, //duracao
                    null, //sinopse
                    item.Poster, //cartaz
                    null, //direcao
                    null, //elenco
                    null, //classificacao
                    null, //avaliacao
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }
    return false;
}

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
        });
    }
}