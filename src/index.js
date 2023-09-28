const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set(`port`, process.env.PORT || 3000); // si un SO nos da un purto lo usamos si no el 3K
app.set(`json spaces`, 2);

// middlewares 
//app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //para resivir y entender json


// Routes 
app.use(require('./routes/formulas'));

// inicar el server 
app.listen( app.get('port'), ()=>{
    console.log('hola');
    console.log(`puerto ${app.get('port')}`);
});



