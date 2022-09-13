const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { postRoutes, authRoutes } = require('./routes/index');

mongoose
    .connect(process.env.CONNECT_DB)
    .then(() => console.log('Connected to db'))
    .catch((err) => console.log('db error', err));

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log(`App listening at http://localhost:${process.env.PORT}`);
});
