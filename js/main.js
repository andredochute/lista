// window.onload = () => {
//     "use strict";
//     if("serviceWorker" in navigator){
//         navigator.serviceWorker.register("./sw.js");
//     }
// };


function adicionar(){

    const descricao = document.getElementById("descricao").value;


    const tarefa = document.getElementById("tarefa").innerHTML = descricao;

}

function data(){
    const data = document.getElementById("data").value;
    const data_adicionada = document.getElementById("data_adicionada").innerHTML = data;
}