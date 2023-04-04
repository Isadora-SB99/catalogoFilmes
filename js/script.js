let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

let navFavoritos = document.querySelector("#nav-favoritos");

btnBuscarFilme.onclick = () => {
    if (inputBuscarFilme.value.length > 0) {
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=d24fb342&s=" + inputBuscarFilme.value)
            .then((resp) => resp.json())
            .then((resp) => {
                resp.Search.forEach((item) => {
                    let filme = new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        null,
                        null,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        null
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
    if (filmes.length > 0) {
        filmes.forEach(async (filme) => {
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=d24fb342&i=" + id)
        .then((resp) => resp.json())
        .then((resp) => {
            let filme = new Filme(
                resp.imdbID,
                resp.Title,
                resp.Year,
                resp.Genre,
                resp.Runtime,
                resp.Plot,
                resp.Poster,
                resp.Director,
                resp.Actors,
                resp.Rated,
                resp.imdbRating
            )
            //console.log("FILME: ", filme);

            document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());

            document.querySelector("#btnFechar").onclick = () => {
                document.querySelector("#lista-filmes").style.display = "flex";
                document.querySelector("#mostrar-filme").innerHTML = "";
                document.querySelector("#mostrar-filme").style.display = "none";

            }

            //console.log("filme.favorito: ",filme.favorito);

            if (filme.favorito) {
                //console.log("chegou no if filme.favorito)");
                document.querySelector("#btnRemover").onclick = () => {
                    //console.log("document.querySelector(#btnRemover).onclick = () => {");
                    removerFavorito(filme.id);
                    //console.log("removerFavorito(filme.id);");
                }
            } else {
                //console.log("chegou no else de filme.favorito)");
                document.querySelector("#btnSalvar").onclick = () => {
                    //console.log("passou pelo document.querySelector(#btnSalvar).onclick = () =>{");
                    filme.favorito = true;
                    //console.log("passou pelo filme.favorito= true;", filme.favorito)
                    salvarFilme(filme);
                    //console.log("passou pelo salvarFilme(filme);")
                    //console.log(filme);
                }
            }
            document.querySelector("#lista-filmes").style.display = "none";
            document.querySelector("#mostrar-filme").style.display = "flex";
        });
}

let salvarFilme = (filme) => {
    filme.favorito = true;
    let filmesString = localStorage.getItem('filmesFavoritos');
    if (filmesString == null || filmesString == undefined || filmesString == "") {
        let arrayFilmes = new Array();
        localStorage.setItem('filmesFavoritos', JSON.stringify(arrayFilmes));
        let filmesString = localStorage.getItem('filmesFavoritos');
        var filmes = JSON.parse(filmesString);
        filmes.push(filme);
        filmes = JSON.stringify(filmes);
        localStorage.setItem('filmesFavoritos', filmes);
        console.log("SALVOU O FILME IF");
    }
    else {
        filme.favorito = true;
        var filmes = JSON.parse(filmesString);
        filmes.push(filme);
        filmes = JSON.stringify(filmes);
        localStorage.setItem('filmesFavoritos', filmes);
        console.log("SALVOU O FILME ELSE");
    }
}

navFavoritos.onclick = () => {
    listarFavoritos();
}

let listarFavoritos = () => {
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    filmesFavoritos = JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item) => {
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.sinopse,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao,
            //item.favorito=true
            
        );
        //console.log("item.favorito=true? ", filme.favorito);
        filme.favorito = true;
        //console.log("filme.favorito = true;",filme.favorito)
        filmes.push(filme);

    });
    //console.log("ARRAY FILMES: ",filmes);
    listarFilmes(filmes);    
}

let removerFavorito = (id) => {
    //não está chegando aqui
    console.log("metodo removerFavorito");
    let filmesString = localStorage.getItem('filmesFavoritos');
    var filmes = JSON.parse(filmesString);

//    metodo certo
    for(i=0;i<filmes.length; i++){
        if(filmes[i].id==id){
            filmes[i].favorito=false;
            let filmeRemover = filmes.findIndex(i);
            filmes.splice(filmeRemover, 1);
        }
    }

    //metodo certo
    // for(i=0;i<filmes.length; i++){
    //     if(filmes[i].id==id){
    //         filmes[i].favorito=false;
    //         let filmeRemover = filmes.findIndex(i);
    //         filmes.splice(filmeRemover, 1);
    //     }
    // }

    //metodo errado
    //   filmes.forEach((filme)=>{
    //     if(filme.id==id){
    //         let filmeRemover = filmes.findIndex(indexFilmeRemover);
    //         filmes.splice(filmeRemover, 1);
    //     }
    //   });
    //     let indexFilmeRemover = filme => filme.id == id;
    //     let filmeRemover = filmes.findIndex(indexFilmeRemover);
    //     filmes.splice(filmeRemover, 1);

    localStorage.setItem('filmesFavoritos', JSON.stringify(filmes));
}
