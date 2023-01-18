const express = require("express");
const cors = require("cors")
const dbConnect = require("./dbConnect")

const userRoute = require("./routes/userRoute")

const app = express();


app.use(express.json())

app.use(cors())


app.get("/", (req, res) => {
    res.send("This is resume build app")
})

app.use("/api/user", userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening to port ${PORT}`))