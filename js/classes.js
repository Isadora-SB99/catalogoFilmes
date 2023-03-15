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
        this.btnDetalhes = null;

    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card mb-3 w-25");
        
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);
        
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h6");
        hCardTitle.setAttribute("class", "card-title");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
        
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1");

        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));

        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        card.appendChild(hCardTitle);
        card.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement("button");
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }

    getCardDetalhado = async () => {
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        let cardDetalhado = document.createElement("div");
        cardDetalhado.setAttribute("class", "card mb-3 w-25");

        let imgPoster = document.createElement("img");
        imgPoster.setAttribute("class", "card-img-topz");
        imgPoster.setAttribute("src", this.cartaz);

        let hCardTitle = document.createElement("h6");
        hCardTitle.setAttribute("class", "card-title");

        let pCardText = document.createElement("p");
        pCardText.setAttribute("class", "card-text");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        
        pCardText.appendChild(document.createTextNode(this.ano));
        pCardText.appendChild(document.createTextNode(this.genero));
        pCardText.appendChild(document.createTextNode(this.duracao));
        pCardText.appendChild(document.createTextNode(this.sinopse));
        pCardText.appendChild(document.createTextNode(this.direcao));
        pCardText.appendChild(document.createTextNode(this.elenco));
        pCardText.appendChild(document.createTextNode(this.classificacao));
        pCardText.appendChild(document.createTextNode(this.avaliacao));

        cardDetalhado.appendChild(imgPoster);
        cardDetalhado.appendChild(hCardTitle);
        cardDetalhado.appendChild(pCardText);

        return cardDetalhado;

    }

    
}
