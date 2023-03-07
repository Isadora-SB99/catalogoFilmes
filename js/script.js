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
        fetch("http://www.omdbapi.com/?apikey=d24fb342&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp) => {
            console.log(resp);
        })
    }
    return false;
}