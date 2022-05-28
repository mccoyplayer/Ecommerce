import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import connectToDB from "./db/connect.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import authenticateUser from "./middleware/authentication.js";
import "dotenv/config";

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(fileUpload());
app.use(express.static('./public'));
app.use(cookieParser(process.env.JWT_SECRET));

//all routes 
//1) Authentication route
app.use('/api/v1/auth',authRouter);

//2) User route
app.use('/api/v1/user',authenticateUser,userRouter);

//3) Product route
app.use('/api/v1/product',authenticateUser,productRouter);

//connect to the database and start the app on the port
connectToDB(process.env.DB_CONNECTION_URL);
app.listen(process.env.PORT,() => {
    console.log(`server started on port ${process.env.PORT}`)
});



