const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=> {
    try {


    const PayTran = dataBase.getModel('PayTran');

    const info = req.body;
    if (!info) throw new Error('Body is empty');

    const {Sender_name, Receiver_name, Amount} = info;
    if (!Sender_name || !Receiver_name || !Amount) throw new Error('Some fields are empty');
    await PayTran.create({
        Sender_name,
        Receiver_name,
        Amount,
        Date: new Date().toISOString()
    });

    res.json({
        success: true,
        message: 'Payments transaction successfully inserted'
    });
    }catch (e){
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })


    }
};
