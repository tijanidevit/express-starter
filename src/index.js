const express = require('express');

const { serverConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();

const {PORT} = serverConfig


app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on  http://localhost:${PORT}`);
});