const express = require('express')
const app = express()
const fs = require('fs')


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/productos', (solicitud, respuesta) => {
    
    class Contenedor {

        constructor(nombreArchivo) {
        
        this.nombreArchivo = nombreArchivo;
        
        this.arrObjs = [];
        
        }
        
        async getAll(){
        
            try {
        
                let leoArchivo = fs.readFileSync(this.nombreArchivo, 'utf-8');

                this.arrObjs = JSON.parse(leoArchivo)

                respuesta.send(`<p> ${JSON.stringify(this.arrObjs)} </p>`);

                console.log("array: " + JSON.stringify(this.arrObjs))
                
                }
                
                catch (err) {
                
                console.log('Error al leer archivo…', err);
                
                }
        }
        
    }
    const prueba = new Contenedor('./productos.txt')
    prueba.getAll()

    
})

app.get('/productoRandom', (solicitud, respuesta) => {
    
    class Contenedor {

        constructor(nombreArchivo) {
        
        this.nombreArchivo = nombreArchivo;
        
        this.arrObjs = [];
        
        }
        
        async getRandom(){
        
            try {
        
                let leoArchivo = fs.readFileSync(this.nombreArchivo, 'utf-8');

                this.arrObjs = JSON.parse(leoArchivo)

                var rand = Math.floor(Math.random()*this.arrObjs.length);
                var rValue = this.arrObjs[rand];

                console.log(rValue);
                respuesta.send(`<p> ${JSON.stringify(rValue)}</p>`);

                console.log("array: " + JSON.stringify(this.arrObjs))
                
                }
                
                catch (err) {
                
                console.log('Error al leer archivo…', err);
                
                }
        }
        
    }
    const prueba = new Contenedor('./productos.txt')
    prueba.getRandom()

    
})

