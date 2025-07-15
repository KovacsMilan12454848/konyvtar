//const express = require('express');
export default function Reg_Log(cim){
     
const main=document.getElementById("content");
main.innerHTML='<h1>Üdvözöljük a regisztráción</h1>';
main.setAttribute('class','bg-dark');
document.getElementById("test").setAttribute('class','bg-dark');

const adat=`

<form method="POST" class="bg-secondary rounded "  id="kk"  >
                <label class=" h2">${cim}</label><br><br>
                <label for="username" class="h5">Felhasználónév:</label><br>
                <input type="text" id="username" name="username" class="btn btn-light" required><br><br>
                <label for="password" class="h5">Jelszó:</label><br>
                <input type="password" id="password" name="password" class="btn btn-light" required><br><br>
                <input type="submit" class="btn btn-primary" value="Bejelentkezés"><br><br>
                <label class=" h5"><a href="#">Még nincs fiókod?<br> Regisztrálj!</a></label>
            </form>
        `;
        main.innerHTML=adat;
}

//module.exports= Reg_Log();
