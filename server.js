const express = require('express'); //requerer o módulo express, instalado no npm pelo através do nodejs.
const {resolve} =require('path');
const app = express();

app.use('./', express.static(resolve(__dirname,'./build')))        //o express vai observar um diretório e vai servidr os arquivos que estão dentro do diretorio dentro dessa rota '/'.

app.listen(process.env.PORT || 3000,(err) =>{
   if  (err){
       return console.log(err);
   }
   console.log("Tudo Está Funcionado Certinho")
})