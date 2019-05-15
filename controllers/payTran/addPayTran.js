const dataBase = require('../../dataBase').getInstance();
module.exports = async (req, res)=> {
    try {


    const PayTran = dataBase.getModels('Payttan');

    const info = req.body;
    if (!info) throw new Error('Body is empty');

    const {Sender_name, Receiver_name, Amount, Date} = info;
    if (!Sender_name || !Receiver_name || !Amount || !Date) throw new Error('Some fields are empty');
    await PayTran.create({
        Sender_name,
        Receiver_name,
        Amount,
        Date
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
