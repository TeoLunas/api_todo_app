const express = require('express');
const todoRouter = require('./routes/todoRouter');

function apiRouter(app){
    const router = express.Router();
    router.use('/api/v1', router);
    router.use('/todo', todoRouter);
};

module.exports = apiRouter;