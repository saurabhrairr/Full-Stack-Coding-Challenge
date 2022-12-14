const express = require("express");
const mongoose = require("mongoose");
const userController = require("./user/routes/user");
const orderController = require("./user/routes/orders");
const cartController = require("./user/routes/cart");
const itemController = require("./user/routes/items");
const multer = require("multer")();
const app = express();
const jwt = require("jsonwebtoken");
require('dotenv').config();
const cors = require("cors");
const uprotectedRoutes = ["/user/login", "/user/signup"];

//server
app.listen(3002, (err)=> {
    if(!err) {
        console.log("Server started at port 3001")
    } else {
        console.log(err);
    } 
});
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(multer.array());
app.use(cors());


mongoose.connect("mongodb://localhost/ecommercesite", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/", (req, res)=> {
    res.send("Ecommerce Backend")
});

//middleware
app.use("/user", userController);
app.use("/order", orderController);
app.use("/cart", cartController);
app.use("/item", itemController)