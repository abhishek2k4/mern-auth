const express = require('express');
const dotenv = require('dotenv').config();;
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.get("/", (req, res) => {
  res.json({message: "Backend is running!"});
});

app.get("/api/test", (req, res) => {
    res.json({message: "API is working!"});
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
