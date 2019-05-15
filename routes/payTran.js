const payTranRouter = require('express').Router();

const getAllPayTran = require('../controllers/payTran/gettAllPayTran');
const addPayTran = require('../controllers/payTran/addPayTran');


payTranRouter.get('/', getAllPayTran);
payTranRouter.post('/add', addPayTran);


module.exports = payTranRouter;

