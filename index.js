const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const connectToDb=require("./db")
const userrouter=require("./routes/userrouter")
const noteRouter=require("./routes/noteRoutes")
const { login, signUp } = require("./coontrollers/usercontrollers")
const { createNote, getNotes, getNoteById, updateNote, deleteNote } = require("./coontrollers/noteController")
dotenv.config()
const app=express()
connectToDb()
app.use(cors())
app.use(express.json())
app.use('/auth',userrouter)
app.use("/auth",userrouter)

app.use("/note",noteRouter)

app.use("/note",noteRouter)
app.use("/note",noteRouter)
app.use("/note",noteRouter)
app.use("/note",noteRouter)



try {
    app.listen(process.env.Port,()=>{
        console.log("app is listening on port ",process.env.Port)
    })
} catch (error) {
     console.log("issues connecting to server")
}
