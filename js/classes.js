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
        let card = document.createElement("div").setAttribute("class", "card");
        let imgCartaz = document.createElement("img").setAttribute("src", this.cartaz);
        imgCartaz.setAttribute("class", "card-img-top");
        let cardBody = document.createElement("div").setAttribute("class", "card-body");
        let hCardTitle = document.createElement("h6").setAttribute("class", "card-title");
        

        let pCardSinopse = document.createElement("p").setAttribute("class", "card-text");
        //todos os abaixo dentro de uma div
        let cardGenero = document.createElement("div").setAttribute("");
        let cardAno = document.createElement("div").setAttribute("");
        let cardClassificacao = document.createElement("div").setAttribute("");
        //fecha a div
        let cardLinkDetalhamento = document.createElement("a").setAttribute("href", "#");


    }
    
}
