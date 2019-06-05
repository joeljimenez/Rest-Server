 require('./config/config');

 const express = require('express');

 const app = express();
 const body_parse = require('body-parser');


 //middleware
 app.use(body_parse.urlencoded({ extended: false }));
 app.use(body_parse.json());




 //get
 app.get('/usuario', function(req, res) {
     res.json('obtener los usuarios');
 });
 //post
 app.post('/usuario', function(req, res) {

     let data = req.body;

     if (data.nombre === undefined) {
         res.status(400).json(
             data_return = {
                 'exito': false,
                 'mensaje': 'El nombre es necesario'
             })
     } else {
         res.json({
             data
         });
     }


 });

 app.put('/usuario/:id', function(req, res) {
     let id = req.params.id;
     res.json(`Obtener los datos del usuario ${id}`);
 });

 app.delete('/usuario', function(req, res) {
     res.json('obtener los usuarios');
 });

 // puerto se coloca dinamica para no tener que cambiar muchas cosas cuando va para produccion.

 app.listen(process.env.PORT, () => {
     console.log(`Se esta esuchando el puerto ${process.env.PORT}`);
 });