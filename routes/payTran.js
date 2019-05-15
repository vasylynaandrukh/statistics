const payTranRouter = require('express').Router();

const getAllPayTran = require('../controllers/payTran/gettAllPayTran');
const addPayTran = require('../controllers/payTran/addPayTran');
const getStat = require('../controllers/payTran/getStatistics');


payTranRouter.get('/', getAllPayTran);
payTranRouter.post('/add', addPayTran);
payTranRouter.get('/stats/:name', getStat);


module.exports = payTranRouter;

