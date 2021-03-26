import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// routes
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());

app.get("/", (req,res) => {
  res.json({
    author: "Burak MERN yazıyor...",
    message: "Yola çıkmak ilk adımla başlar..."
  })
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  app.listen(PORT,()=> {
    console.log(`Server ${PORT} portunda çalışıyor`); 
  });
}). catch((err)=> {
  console.error(err.message);
})