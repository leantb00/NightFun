const express = require('express'); //requerer o módulo express, instalado no npm pelo através do nodejs.
const {resolve, join} =require('path');
const app = express();

app.use('/', express.static(resolve(__dirname,'./build')))        //o express vai observar um diretório e vai servidr os arquivos que estão dentro do diretorio dentro dessa rota '/'.

if (process.env.NODE_ENV === 'production') {
    const publicPath = join(__dirname, '../public');
    app.use(express.static(publicPath));
    app.use('*', express.static(publicPath));
  }
app.listen(process.env.PORT || 3000,(err) =>{
   if  (err){
       return console.log(err);
   }
   console.log("Tudo Está Funcionado Certinho")
})
