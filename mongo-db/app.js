const express = require("express")
const { connectToDb,getDb } = require("./db")
const { ObjectId } = require("mongodb");

const app = express()

let db
connectToDb((err) => {
    if(!err){
        app.listen(3000,() => {
            console.log("hello mongo!!");
        })
        db = getDb();
    }
})




//routes
app.get("/books", (req,res) => {
    let books = [];
    db.collection("books")
        .find()
        .sort({author:1})
        .forEach(ele =>  books.push(ele))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({error: "Could not fetch documents"});
        })
})

app.get("/books/:id",(req,res) => {
    if(ObjectId.isValid(req.params.id)){
        db.collection("books")
        .findOne({_id: new ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({err:"ERROR1!!!"})
        })
    }else{
        res.status(500).json({err:"ERROR1!!! enete valid id"})
    }
    
})

app.post('/books', (req, res) => {
    const book = req.body;
    db.collection('books')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: 'Could notd create a new document' });
        });
});
