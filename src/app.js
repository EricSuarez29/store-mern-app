import express from "express";
import logger from "morgan";
import { boomErrorHandler } from "./middlewares/error.handler";
import { validatorHandler } from "./middlewares/validator.handler";
import router from "./routes"
import path from "path";
import { PORT } from "./config/config"
import "./config/database"

const app = express();

app.use(express.json())
app.use(logger("dev"))

app.use('/api', router);
app.use(validatorHandler);
app.use(boomErrorHandler);

app.use(express.static(path.join(__dirname, "/public")))

app.listen(PORT, ()=>{
    console.log(`server listen on port ${PORT}`)
})