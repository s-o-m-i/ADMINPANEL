const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/mern_admin"

const connectDb = async() => {
    try {
 await mongoose.connect(URI)
 console.log("connection successful to DB")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDb