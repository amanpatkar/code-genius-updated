import express from 'express'
import apiRoutes from './routes/index.js';
import mongoose from './db/mongo.db.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader("Access-Control-Allow-Method","GET,POST,PATCH,DELETE,OPTIONS,PUT")
  next();
})

// OPTIONS route handler
app.options('/api/posts/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
  res.sendStatus(200);
});
app.use('/api',apiRoutes)

app.listen(3000,()=>{
  console.log("app is running")
})



