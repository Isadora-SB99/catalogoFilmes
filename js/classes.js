class Ator{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Diretor{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero= genero
        this.duracao= duracao
        this.sinopse= sinopse
        this.cartaz = cartaz
        this.direcao = direcao
        this.elenco = elenco
        this.classificacao = classificacao
        this.avaliacao = avaliacao

    }

    getCard = () => {
        let card = document.createElement("div").setAttribute("class", "card mb-3 w-25");
        let imgCartaz = document.createElement("img").setAttribute("src", this.cartaz);
        imgCartaz.setAttribute("class", "card-img-top");
        let cardBody = document.createElement("div").setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h6").setAttribute("class", "card-title");
        

        let pCardSinopse = document.createElement("p").setAttribute("class", "card-text");
        //todos os abaixo dentro de uma div
        let cardDivInformacoes = document.createElement("div").setAttribute("style", "display: flex; justify-content:space-around;");

        let cardGenero = document.createElement("div").setAttribute("style", "flex-grow: 1");
        let cardAno = document.createElement("div").setAttribute("style", "flex-grow: 1");
        let cardClassificacao = document.createElement("div").setAttribute("style", "flex-grow: 1");

        //fecha a div
        let cardLinkDetalhamento = document.createElement("a").setAttribute("href", "#");


    }


    // <div class="card mb-3 w-25">
    //           <img src="./imagens/tch1.jpg" class="card-img-top" alt="Cartaz do filme ${nome-do-filme}">
    //           <div class="card-body">
    //               <h6 class="card-title">Nome do filme (pegar da API)</h6>
    //
    //
    //               <p class="card-text">Sinopse do filme (pegar da API)</p>
    //
    //               <div style="display: flex; justify-content:space-around;">
    //                 
    //                 <div style="flex-grow: 1;">Aventura (API)</div>
    //                 <div style="flex-grow: 1;">2022 (API)</div>
    //                 <div style="flex-grow: 1;">16A (API)</div>
    //               
    //              </div>
    //               <a href="#">Detalhes (API)?</a>
    //           </div>
    //       </div>
    
}
