const express = require('express');
const app = express();
const port = 4050;
const userRouter = require('./routers/userRoute');
const { addUser } = require('./controllers/userController');
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.use('/api/auth',userRouter);


app.listen(port,()=>{
    console.log("Successfull")
})