const apiRouter = require('express').Router();
const payTranRouter = require('./payTran');

apiRouter.use('/payTrans', payTranRouter);

module.exports = apiRouter;






