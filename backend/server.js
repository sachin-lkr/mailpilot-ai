import express from "express"
import connectDB from "./src/config/dataBase.js";
import authRoutes from "./src/routes/authRoutes.js"
import aiRoutes from "./src/routes/aiRoutes.js"
import cors from "cors"


const app=express();
app.use(cors({
    origin: process.env.FRONTEND_URL || true,
    credentials: true
}));
const PORT = process.env.PORT || 3000;
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(`/api/auth`, authRoutes);
app.use(`/api/ai`,aiRoutes)



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})


