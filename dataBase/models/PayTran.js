module.exports = (sequelize, DataTypes) => {
    const PayTran = sequelize.define('PayTran', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Sender_name: {
            type: DataTypes.STRING
        },
        Receiver_name: {
            type: DataTypes.STRING
        },
        Amount: {
            type: DataTypes.STRING
        },
        Date: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'payTran',
        timestamps: false

    });
    return PayTran;
};

