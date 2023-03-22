class Ator {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Diretor {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao) {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero
        this.duracao = duracao
        this.sinopse = sinopse
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
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }

    getDetalhesFilme = () => {
        //criando os elementos do card
        let cardDetalhado = document.createElement("div");
        cardDetalhado.setAttribute("class", "card mb-3");
        cardDetalhado.setAttribute("style", "max-width: 540px;");

        let divRow = document.createElement("div");
        divRow.setAttribute("class", "row g-0");

        let divMd4 = document.createElement("div");
        divMd4.setAttribute("class", "col-md-4");

        let imgPoster = document.createElement("img");
        imgPoster.setAttribute("class", "img-fluid rounded-start");
        imgPoster.setAttribute("src", this.cartaz);
        imgPoster.setAttribute("alt", "Cartaz do filme"+this.titulo);

        let divMd8 = document.createElement("div");
        divMd8.setAttribute("class", "col-md-8");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h6");
        hCardTitle.setAttribute("class", "card-title");

        let pSinopse = document.createElement("p");
        pSinopse.setAttribute("class", "card-text");

        let pInfos = document.createElement("p");
        pSinopse.setAttribute("class", "card-text");

        let divBotao = document.createElement("div");
        divBotao.setAttribute("class", "d-grid gap-2 col-6 mx-auto mt-3 mb-2");


        //criando botão
        let btnSalvar = document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Salvar"));
        //btnSalvar.setAttribute("class", "btn btn-success");
        btnSalvar.setAttribute("id", this.id);
        btnSalvar.setAttribute("class", "btnSalvar btn btn-success");
        
        //relacionando os elementos do card

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        pSinopse.appendChild(document.createTextNode(this.sinopse));

        pInfos.appendChild(document.createTextNode("Ano: "+this.ano+"; "));
        pInfos.appendChild(document.createTextNode("Duração: "+this.duracao+"; "));
        pInfos.appendChild(document.createTextNode("Categoria: "+this.genero+"; "));
        pInfos.appendChild(document.createTextNode("Direção: "+this.direcao+"; "));
        pInfos.appendChild(document.createTextNode("Elenco: "+this.elenco+"; "));
        pInfos.appendChild(document.createTextNode("Classificação: "+this.classificacao+"; "));
        pInfos.appendChild(document.createTextNode("Avaliação: "+this.avaliacao+";"));

        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(pSinopse);
        cardBody.appendChild(pInfos);

        divMd4.appendChild(imgPoster);
        divMd8.appendChild(cardBody);
        divBotao.appendChild(btnSalvar);

        divRow.appendChild(divMd4);
        divRow.appendChild(divMd8);
        divRow.appendChild(divBotao);

        cardDetalhado.appendChild(divRow);

        return cardDetalhado;

    }


}
