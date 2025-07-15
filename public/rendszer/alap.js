






async function Register(endpoint, data) {
    //{nev: 'Laptop', email: 'Milan@gmail.com', jelszo_hash:'jelszó',profil_kep_url:'/th.bing.com/th/id/OIP.2nnX9oAytGGL-2Q2lYXuPAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'}
    const response = await fetch(`/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data)
    });
    const result = await response.text();
    document.getElementById('status').innerText = result;
}





async function fetchProducts() {
    const response = await fetch('/home');
    const products = await response.json();
    console.log("itt volt");
    document.getElementById('products').innerHTML = products.map(p => `${p.id}: ${p.cim} - ${p.beszerzesi_ar} Ft ujinan kiirt`).join('<br>');
}


function Home() {
    const keppek = document.getElementById('carouselExampleAutoplaying');
    const main = document.getElementById('content');
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
    <div class='carousel-item ${alapot}'>
            <img src='${url}'
                class='d-block w-100'>
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





















