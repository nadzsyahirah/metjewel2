const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

//app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://metjewel_admin:hello123456@cluster0.fxb7x.mongodb.net/test_mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//create a data schema

//========== consult section ============//

const notesSchema = {
    name: String,
    email: String,
    phone: Number,
    date: Date,
    time: String,
    product: String,
    message: String
}

//========== enquiries section ===========//

const schemaTwo = {
    name: String,
    email: String,
    subject: String,
    message: String
}

//======== consult =========//

const custConsult = mongoose.model("custConsult", notesSchema);

//======== enquiry =========//

const custEnquiry = mongoose.model("custEnquiry", schemaTwo);

/*
app.get('/', function(req, res) {
    res.render("/index.html");
  });
*/

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

//=== not use ===//
app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


//======== consult =======//

app.post("/", function(req, res){
   let newCustConsult = new custConsult({

       name: req.body.name,
       email: req.body.email,
       phone: req.body.phone,
       date: req.body.date,
       time: req.body.time,
       product: req.body.product,
       message: req.body.message


   });
   newCustConsult.save();
   res.redirect('/');
})

//====== enquiry delete ===========//

app.post("/contact", function(req, res){
    let newCustEnquiry = new custEnquiry({
 
        name: req.body.name,
        email2: req.body.email2,
        subject: req.body.subject,
        message: req.body.message
 
    });
    newCustEnquiry.save();
    res.redirect('/');
 })

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

/*
app.listen(8080, function(){
    console.log("server is running on 8080");
})
*/