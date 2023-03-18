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
        fetch("https://www.omdbapi.com/?apikey=d24fb342&s="+inputBuscarFilme.value)
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
    //console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }


    //não acontece NADA ao clicar no botão
    let detalhesFilme = async (id) => {

        //ocultar div aqui?

        fetch("https://www.omdbapi.com/?apikey=d24fb342&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {

            //instanciar objeto filme
            //dados vindo undefined

            console.log(resp);
            let filme = new Filme(
                resp.imdbID, //id
                resp.Title, //titulo
                resp.Year, //ano
                resp.Genre, //genero
                resp.Runtime, //duracao
                resp.Plot, //sinopse
                resp.Poster, //cartaz
                resp.Director, //direcao
                resp.Actors, //elenco
                resp.Rated, //classificacao
                resp.Ratings, //avaliacao
            );
            
            console.log(filme);

            //chamar metodo para gerar card com detalhes do filme
            filme.getCardDetalhado();

            //ocultar div #lista-filmes
            function ocultarDivListaFilmes(){
                document.getElementsById("lista-filmes").style.display="none";
            }
            //ocultar ---> //let listaFilmes = await document.querySelector("#lista-filmes");
            //let mostrarFilme = await document.querySelector("#mostrar-filme");
            

        });
    }

}