let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

// btnBuscarFilme.onclick = () => {
//     if(inputBuscarFilme.value.length > 0){
//         console.log(inputBuscarFilme.value);
//     }
//     return false;
// }

btnBuscarFilme.onclick = () => {
    if (inputBuscarFilme.value.length > 0) {
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=d24fb342&s=" + inputBuscarFilme.value)
            .then((resp) => resp.json())
            .then((resp) => {
                resp.Search.forEach((item) => {
                    //console.log("ITEM")
                    //console.log(item);
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
    listaFilmes.style.display = "flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerhtml = "";
    document.querySelector("#mostrar-filme").style.display = "none";
    //console.log(listaFilmes);
    if (filmes.length > 0) {
        filmes.forEach(async (filme) => {
            //console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

//não acontece NADA ao clicar no botão
let detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=d24fb342&i=" + id)
        .then((resp) => resp.json())
        .then((resp) => {
            let filme = new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                //resp.Genre.split(","),
                resp.Genre,
                resp.Runtime,
                resp.Plot,
                resp.Poster,
                resp.Director,
                //resp.Actors.split(","),
                resp.Actors,
                resp.Rated,
                resp.imdbRating
            )
            document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());
            document.querySelector("#lista-filmes").style.display = "none";
            document.querySelector("#mostrar-filme").style.display = "flex";


        });
}