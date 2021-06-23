const express = require('express');   // require express for building a server;
const app = express();     // calling express function;
app.use(express.json())

// using middleware importing the routes folder;
app.use('/', require('./routes/postapi'));
app.use('/', require('./routes/getapi.js'));
app.use('/', require("./routes/deleteapi.js"));
app.use('/', require('./routes/updateapi.js'));


// server is listen a port && listen is a function
app.listen(process.env.PORT, () => {
    console.log(`server is running on this ${process.env.PORT} port`);
});
