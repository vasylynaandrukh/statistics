const payTranRouter = require('express').Router();

const getAllPayTran = require();
const addPayTran = require();
const deletePayTran = require();

payTranRouter.get('/', getAllPayTran);
payTranRouter.post('/add', addPayTran);
payTranRouter.delete('/name', deletePayTran);

module.exports = payTranRouter;

