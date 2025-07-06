import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import { connectDB } from './db/connectDB.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json()); // allow to parse json
app.use(cookieParser()); // allow us to parse incoming cookies

app.use("/api/auth", authRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port 5000");
    });
});


