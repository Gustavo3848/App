const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const cors = require('cors');
mongoose.connect('mongodb+srv://gustavo:rerogu361@cluster0.zeabn.mongodb.net/mobile?retryWrites=true&w=majority',
        {useNewUrlParser: true , 
        useCreateIndex: true
        }).then(function(){
            console.log("Banco de dados conectado com sucesso...");
        }).catch(function(err){
            console.log('Erro ao conectar com o banco de dados: ' + err);
        })
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000); 

console.log("Servidor rodando no end: http://localhost:3000");