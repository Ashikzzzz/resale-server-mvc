const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/v1/user.route");
const bookingRouter = require("./routes/v1/booking.route")
const productRoute = require("./routes/v1/product.route")

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/user",userRouter)
app.use("/api/v1/booking",bookingRouter)
app.use("/api/v1/product",productRoute)


// ---------- Happy Server ----------
app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});
 

module.exports = app;