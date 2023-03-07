let ator = new Ator(1, "JOHN WAYNE");
console.log(ator)

let diretor = new Diretor(1, "Alfred Hitchcock");
console.log(diretor)

let direcao = [
    new Diretor(1, "Lana Wachowski"),
    new Diretor(2, "Lilly Wachowski")
]

let elenco = [
    new Ator(1, "Keanu Reeves"),
    new Ator(2, "Carrie-Anne Moss"),
    new Ator(3, "Laurence Fishburne"),
    new Ator(4, "Joe Pantoliano"),
    new Ator(5, "Hugo Weaving"),
    new Ator(6, "Antony Ray Parker"),
]

let genero = ["ação", "aventura", "ficção cinetífica"]

let sinopse = "Um jovem programador..."

let cartaz = "link da imagem"

let filme = new Filme(
    1,
    "Matrix",
    1999,
    genero,
    102,
    sinopse,
    cartaz,
    direcao,
    elenco,
    14,
    null
)

console.log(filme)