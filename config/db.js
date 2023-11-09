const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect('mongourl=mongodb+srv://chauhanrohit716:Rohit221@cluster0.yhazr7e.mongodb.net/wordcount?retryWrites=true&w=majority')

module.exports={
    connection
}
