import mongoose from "mongoose";
const { Schema } = mongoose;


const book = new Schema ({
    bookName: {
        type: String,
        required: true,
      },
      author: String,
      editionNum:Number,
      publishDate:String,
      isOnlineV:Boolean,
      prise:Number,
      languages:Array,
      classification:String,

      writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    },
        {timestamps:true}
    
)

const Book = mongoose.model('Book',book);

export default Book;
