const express = require('express');
const dotenv = require('dotenv').config();;
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // Vite runs on 5173
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({message: "Backend is running!"});
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
