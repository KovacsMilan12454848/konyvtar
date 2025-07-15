//const express = require('express');

function Home() {
    const keppek = document.getElementById("carouselExampleAutoplaying");
    const main = document.getElementById("content");
    keppek.innerHTML += ` <div class="carousel-inner" id="adat"></div>`;
    const adat = document.getElementById("adat");
    const gomb_l = ["prev", "next"]
    const kepek_l = [
        { alapot: "active", kep: "https://excelstructure.net/wp-content/uploads/2022/06/leaf-symbol-book-3783272.jpg" },
        { alapot: "", kep: "https://cdn.firstcuriosity.com/wp-content/uploads/2023/06/10232647/IMG_COM_20230610_2259_02_4935-1024x768.jpg" },
        { alapot: "", kep: "https://excelstructure.net/wp-content/uploads/2022/06/leaf-symbol-book-3783272.jpg" }]

    //                    <h1 class="w3-display-middle w3-large h1">Üdvözlünk A Könyvek Birodalmában</h1>   w3-display-container  w3-text-white
    kepek_l.forEach(element => {
        adat.innerHTML += Kepgenerator(element.alapot, element.kep)
    });
    gomb_l.forEach(element => {
        keppek.innerHTML += Gombgenerator(element)
    });

    
    main.innerHTML+=`<button onclick="fetchProducts()">Listázás</button>
        <div id="products"></div>
         <div id="status">valami</div>`;
}

function Kepgenerator(alapot, url) {
    const kep = `
    <div class="carousel-item ${alapot}">
            <img src="${url}"
                class="d-block w-100">
        </div>`;
    return kep;
}
function Gombgenerator(alapot) {
    const gomb = `
    <button class="carousel-control-${alapot}" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="${alapot}">
                <span class="carousel-control-${alapot}-icon" aria-hidden="true"></span>
                <span class="visually-hidden">${alapot}</span>
            </button>`;
    return gomb;
}

//module.exports=Home;

export default function init() {
   Home();
}