import express from "express"
import connectDB from "./src/config/dataBase.js";
import authRoutes from "./src/routes/authRoutes.js"


const app=express();
const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(`/api/auth`, authRoutes);



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


