const express = require('express');   // require express for building a server
const app = express();
app.use(express.json())

app.use('/', require('./routes/postapi'));
app.use('/', require('./routes/getapi.js'));
app.use('/', require("./routes/deleteapi.js"));
app.use('/', require('./routes/updateapi.js'));



app.listen(process.env.PORT, () => {
    console.log(`server is running on this ${process.env.PORT} port`);
});
