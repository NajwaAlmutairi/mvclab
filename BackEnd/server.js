import express from "express";
import mongoose from "mongoose";
import Book from "./models/book.js";
import dotenv from "dotenv";
const app = express();
app.use(express.json());

dotenv.config();

app.get("/books", (req, res) => {
  Book.find().then((result) => {
    res.send(result);
  });
});

app.post("/addBooks", (req, res) => {
  const book = new Book({
    bookName: req.body.bookName,
    author: req.body.author,
    editionNum: req.body.editionNum,
    publishDate: req.body.publishDate,
    isOnlineV: req.body.isOnlineV,
    prise: req.body.prise,
    languages:req.body.languages,
    classification: req.body.classification,
  });
  book.save()
    .then((result) => {
      res.send(result);
    });
});


app.patch("/addBooks/:id",(req,res)=>{
    const {id} = req.params 
    Book.findByIdAndUpdate(id,req.body,{new: true,runValidators:true})
    .then((result) => {
      res.send(result);
    })
    .catch((err)=>{
      res.send("error",err);
    });
  })

  app.delete("/addBooks/:id",(req,res)=>{
    const {id} = req.params 
    Book.findByIdAndDelete(id)	
    .then((result) => {
      res.send(result);
    })
    .catch((err)=>{
      res.send("error",err);
    });
  })
  
  app.get("/addBooks/:id",(req,res)=>{
    const {id} = req.params 
    Book.findById(id)	
    .then((result) => {
      res.send(result);
    })
    .catch((err)=>{
      res.send("error",err);
    });
  })

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_url);
  console.log("here");
}

app.listen(process.env.port, () => {});
