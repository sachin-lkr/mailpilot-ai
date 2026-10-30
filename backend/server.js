import express from "express"
import connectDB from "./src/config/dataBase.js";
import authRoutes from "./src/routes/authRoutes.js"
import aiRoutes from "./src/routes/aiRoutes.js"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();
const app=express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://mailpilot-ai-kappa.vercel.app" 
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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


