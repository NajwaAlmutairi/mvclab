import Book from "../models/book.js";
import User from "../models/user.js";


// add new book 
export const addbook = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const book = new Book({
        bookName: req.body.bookName,
        author: req.body.author,
        editionNum: req.body.editionNum,
        publishDate: req.body.publishDate,
        isOnlineV: req.body.isOnlineV,
        prise: req.body.prise,
        languages: req.body.languages,
        classification: req.body.classification,
        writer: user._id,
      });
      await book.save();
      console.log("New book added:", book);
      user.books.push(book._id);
      console.log("User books before saving:", user.books);
      await user.save();
  
      res.status(201).json({
        message: "book created successfully",
        book: book,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating book", error });
    }
  }

