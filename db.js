const  mongoose  = require("mongoose")

const connectToDb=()=>{
    try {
        mongoose.connect("mongodb+srv://alijan061333:lzsQ7fMPJBJOGMOi@cluster0.kunfurd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then
        ((res)=>console.log("connected to db")).catch((err)=>console.log("error occured in db"))
    } catch (error) {
        console.log("error",error)
    }
}
module.exports=connectToDb