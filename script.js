const semua = document.querySelectorAll(".all");
const populer = document.querySelectorAll(".populer");
const terlama = document.querySelectorAll(".terlama");
const terbaru = document.querySelectorAll(".terbaru");

filterAll("all");
function filterAll(c){
    if(c == "all"){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.add("show");
        }
    }

    if(c == "populer"){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove("show");
        }
        for(let i = 0; i < populer.length; i++){
            populer[i].classList.add("show");
        }
    }
    if(c == "terlama"){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove("show");
        }
        for(let i = 0; i < terlama.length; i++){
            terlama[i].classList.add("show");
        }
    }
    if(c == "terbaru"){
        for(let i = 0; i < semua.length; i++){
            semua[i].classList.remove("show");
        }
        for(let i = 0; i < terbaru.length; i++){
            terbaru[i].classList.add("show");
        }
    }
}