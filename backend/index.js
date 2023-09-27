const express = require("express"); // it is for mvc.
const mongoose = require("mongoose"); //it is for connecting with mongodb
const cors=require("cors")
const app = express();
const router=require("./routes/routes");
const port = 9050;// port number where your server is running 

const usermodel=require('./model/user')
app.use(cors())

//middelware function to handel json data 
app.use(express.json());

//navigate all request to router
app.use("/",router)

//connecting to mongodb.
mongoose.connect(
    "mongodb+srv://dzende725:rader123@cluster0.ze8ajor.mongodb.net/realestate",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("connected to mngodb successfull");
    app.listen(port, () => {
        console.log("server is running on port ", port);
    })
})
    .catch(err => {
        console.log(err);
    }
    )
app.post('/signup',(req,res)=>{
    usermodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})