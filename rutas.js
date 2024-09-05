const router = require('express').Router()

router.get('/', (req, res) =>  {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

router.get('/contacto', (req, res) =>  {
    res.sendFile('./static/contacto.html', {
        root: __dirname
    })
})

router.get('/admision', (req, res) =>  {
    res.sendFile('./static/admision.html', {
        root: __dirname
    })
})

router.get('/nosotros', (req, res) =>  {
    res.sendFile('./static/nosotros.html', {
        root: __dirname
    })
})

router.get('/servicios', (req, res) =>  {
    res.sendFile('./static/servicios.html', {
        root: __dirname
    })
})

module.exports = router