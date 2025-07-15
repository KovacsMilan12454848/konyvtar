const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
/*
connection.connect(err => {
    if (err) {
        console.error('Hiba a csatlakozás során:', err);
        return;
    }
    console.log('Sikeres kapcsolat az adatbázishoz!');
});

*/






exports.postreg = async (req, res) => {

    const { nev, email,jelszo_hash,profil_kep_url } = req.body;
       connection.query('INSERT INTO felhasznalok (nev, email,jelszo_hash,profil_kep_url) VALUES (?,?,?,?,)', [nev, email,jelszo_hash,profil_kep_url], (err) => {
        if (err)  console.log('Hiba történt: ' + err);
        console.log('Sikeres beszúrás');
    });
};

//nev	email	jelszo_hash 	profil_kep_url	regisztracio_datuma
// CRUD műveletek


/*
app.get('/konyvek', (req, res) => {
    connection.query('SELECT * FROM konyvek', (err, results) => {
        if (err)  console.log("hiba:"+err);
        
        res.json(results);
        console.log("hiba:"+results)
    });
});

app.post('/update', (req, res) => {
    const { id, price } = req.body;
    connection.query('UPDATE products SET price = ? WHERE id = ?', [price, id], (err) => {
        if (err) return res.send('Hiba történt: ' + err);
        res.send('Sikeres módosítás');
    });
});

app.post('/delete', (req, res) => {
    const { id } = req.body;
    connection.query('DELETE FROM products WHERE id = ?', [id], (err) => {
        if (err) return res.send('Hiba történt: ' + err);
        res.send('Sikeres törlés');
    });
});
*/