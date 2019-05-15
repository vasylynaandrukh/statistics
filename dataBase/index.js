const Sequelize = require('sequelize');
const fs = require('fs');
const resolve = require('path').resolve;
const DbName = 'statistics';
const DbUser = 'root';
const DbPass = 'vasylyna';

module.exports = (() => {
    let instanse;

    function initConnection() {
        let client = new Sequelize( DbName, DbUser, DbPass,{
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/models', (err, files)=> {
                files.forEach(file =>{
                    const modelName = file.split('.')[0];
                    models[modelName]=client.import(resolve('./dataBase/models/${modelName}'));
                })
            })

        }

        return{
            getModels: (modelName)=> models[modelName],
            setModels: ()=> {
                return getModels()
            }
        };
    }

    return {
        getInstance:()=> {
            if (!instanse){
                instanse = initConnection();
            }
            return instanse;
        }
    }
})();
