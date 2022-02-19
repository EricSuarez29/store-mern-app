import express from "express";
import logger from "morgan";
import { boomErrorHandler } from "./middlewares/error.handler";
import router from "./routes"
import { PORT } from "./config/config"

const app = express();

app.use(express.json())
app.use(logger("dev"))

app.use('/api', router);
app.use(boomErrorHandler);

app.listen(PORT, ()=>{
    console.log(`server listen on port ${PORT}`)
})