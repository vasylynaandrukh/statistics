const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const PayTran = dataBase.getModel('PayTran');

        const all = await PayTran.findAll();
        if (!all) throw new Error('No payments transactions');
        res.json({
            success: true,
            message: all
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
