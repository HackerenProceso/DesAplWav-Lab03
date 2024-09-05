const express=require('express');
const app=express();
const routes=require('./rutas.js')
const path = require('path');
const port=8080

// Configurar la carpeta 'static' para archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'static'))); 


// Usar las rutas
app.use(routes)

app.listen(port, ()=> {
    console.log('Servidor escuchando en el puerto ${8080}')
})

console.log('Server Ok')