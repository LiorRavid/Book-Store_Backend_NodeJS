const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
require('./db/mongoose');
const path = require('path');
const adminRouter = require('./db/routers/adminRouter');
const userRouter = require('./db/routers/userRouter');
const bookRouter = require('./db/routers/bookRouter');

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(adminRouter);
app.use(userRouter);
app.use(bookRouter);

app.listen(port, ()=>{
    console.log('Server is online on port: ',port);
    console.log(`Server running at http://127.0.0.1:${port}/`);
});