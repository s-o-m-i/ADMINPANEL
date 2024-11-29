const express = require("express")
const app = express()
const router = require("./routes/auth-route")
const connectDb = require("./utils/db")

app.use(express.json())
app.use("/api/auth/", router)

app.get("/", async (req, res) => {
    res.status(400).json({ message: "Welcome to the home page" })
})

app.get("/register", (req, res) => {
    res.status(200).send("welcome to registraton page")
})

const PORT = 3200
const startServer = async () => {
    await connectDb()
    app.listen(PORT, () => {
        console.log("Serever is started on port 3200")
    })
}
startServer()