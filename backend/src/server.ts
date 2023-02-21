import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import bookRouter from './routers/book.router';
import userRouter from "./routers/user.router";
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4202"]
}));

app.use("/api/book", bookRouter);

app.use("/api/users", userRouter);

app.use("/api/orders", orderRouter);


const port = 5000;
app.listen(port, () => {
    console.log("website served on http://localhost:" + port);
})



