require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mainRouters = require('./routers/mainRouters');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// MAIN ROUTE
app.use('/', mainRouters);

app.listen(port, () => console.log(`Listening port ${port}`));