const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const dbConnect = require("./dbConnect")
app.use(express.json())
const userRoute = require("./routes/userRoute")


app.get("/", (req, res) => {
    res.send("This is resume build app")
})

app.use("/api/user", userRoute)

app.listen(PORT, () => console.log(`listening to port ${PORT}`))