const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required:true,
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

userSchema.pre("save",async function(req,res,next){
if(!this.isModified("password")){
next()
}

try {
    const saltRound = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(this.password,saltRound)
    this.password = hashed_password
    next( )
} catch (error) {
    next(error)
}

})

module.exports = new mongoose.model("User", userSchema)