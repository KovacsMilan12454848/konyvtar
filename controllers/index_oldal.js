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


const express = require('express');
const bodyParser = require('body-parser');









exports.getINdex = async (req, res) => {
    connection.query('SELECT * FROM konyvek', (err, results) => {
        if (err) return res.send("hiba:"+err);
        res.json(results);
        
    });
};


// CRUD műveletek
/*
app.post('/add', (req, res) => {
    const { name, price } = req.body;
    connection.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], (err) => {
        if (err) return res.send('Hiba történt: ' + err);
        res.send('Sikeres beszúrás');
    });
});

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