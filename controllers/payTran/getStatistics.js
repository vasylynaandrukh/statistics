const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const PayTran = dataBase.getModel('PayTran');

        let name = req.params.name;
        let date = req.params.date;
        if (!name) throw new Error('No name');

        let getName = await PayTran.findOne({
            where: {
                Sender_name: name
            }
        });

        let {Sender_name} = getName;

        //get all sum of payments
        let getAmount = await PayTran.sum('Amount');
        //get sum of all transactions
        let numberOfTransactions = await PayTran.count("id");
        //get statistic for user what we need/ sum of all payments and all transactions
        let userStatistics = await PayTran.sum('Amount', {
            where: {
                Sender_name: name
            }

        });
        let userTransaction = await PayTran.count('id', {
            where: {
                Sender_name: name
            }
        });
        //get statistics per day
        let dayTransaction = await PayTran.count('id', {
            where: {
                Date: date
            }
        });


        res.json({
            success: true,
            message: {
                Number_of_transactions: numberOfTransactions,
                Total_amount: getAmount,
                Stats_for_user: {
                    user: `${Sender_name}`,
                    amount: userStatistics,
                    transaction: userTransaction
                },
                Stats_per_day: dayTransaction

            }
        });

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });

    }
};
