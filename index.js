const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();
const morgan = require('morgan');
let stremfile =fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan(' Method - :method \n Status - :status \n content-length - :res[content-length] \n time taken - :total-time ms \n date - :date[clf] \n http version - :http-version \n url accesed - :url \n',{stream:stremfile}))

// app.use(morgan('tiny'));
// app.use(morgan('combined'));
// app.use(morgan('common'));
// app.use(morgan('dev '));
// app.use(morgan('short'));

app.get("/info",(req,res)=>{
    res.send("all data here");
})

app.listen(4000);