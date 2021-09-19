import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload"

const PORT = 5000;
const URL_DB = 'mongodb+srv://user:user@cluster0.bebay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(fileUpload({}))
app.use(express.static('static'))
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(URL_DB) //
        app.listen(PORT, () => {
            console.log("server listen 5liss" + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()