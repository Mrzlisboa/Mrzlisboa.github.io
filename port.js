const curriculo = document.getElementById('curriculo');
const ods3 = document.getElementById('ods3');
const site = document.getElementById('cardapio');
const imgcv = document.querySelector('.imgcv');
const imgsite = document.querySelector('.imgsite');
const imgods = document.querySelector('.imgods');


curriculo.addEventListener("click", () =>{
    curriculo.classList.toggle('active');
    imgcv.classList.toggle('active');
});
ods3.addEventListener("click", () =>{
    ods3.classList.toggle('active');
    imgods.classList.toggle('active');
});
site.addEventListener("click", () =>{
    site.classList.toggle('active');
    imgsite.classList.toggle('active');
});


