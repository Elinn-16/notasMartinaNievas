const express = require('express');
const path = require ('path');
const mongoose = require('mongoose');

const app = express();
const uri = "const uri = "mongodb+srv://notas:hector@cluster0.onoq98e.mongodb.net/?retryWrites=true&w=majority";";
const PORT = 3000; 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


mongoose.connect(uri,
    {useNewUrlParser:true,useUnifiedTopology:true})
    
    .then(console.log("Connected to database"))
    .catch((error)=>console.log("tienes un error, tu error es :" + error))


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
