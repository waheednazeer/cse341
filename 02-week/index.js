const express= require('express');
const bodyparser= require('body-parser');
const cors=require('cors');
const app=express();

const port=3000;

let books=[];

app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/book', (req, res) =>{
    const book=req.body;
    console.log(book);
    books.push(book);
    res.send("New Book Added into Database!");
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(port, () =>{
console.log("Listening on port"+ port);
})