const express = require('express');
const dbClient  = require('./utils/db');
const  redisClient  = require('./utils/redis');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;


app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})