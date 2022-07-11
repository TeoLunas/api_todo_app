const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('Ruta Home')
});

router.get('/:id', (req, res) => {
    res.json('Ruta Home')
});

router.post('/', (req, res) => {
    res.json('Ruta Home')
});

router.patch('/', (req, res) => {
    res.json('Ruta Home')
});

router.delete('/', (req, res) => {
    res.json('Ruta Home')
});

module.export = router;
