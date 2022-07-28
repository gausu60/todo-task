const express = require("express");
const bodyParser = require("body-parser")
const app = express();
var items = [];
const PORT = 5000;
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var today = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US",option);
    res.render("list",{kindOfDay:day,newListItem:items})
});
app.post("/",(req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(PORT, () => console.log("Server running on port " + PORT));