const Sequelize = require('sequelize');

module.exports = class Reservation extends Sequelize.Model{ 
    static init(sequelize){
        return super.init({
            room : {
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            date : {
                type: Sequelize.DATEONLY,
                allowNull : false
            },
            purpose :{
                type : Sequelize.STRING,
                allowNull : false,
            },
            start : {
                type: Sequelize.DATE,
                allowNull : false
            },
            end : {
                type: Sequelize.DATE,
                allowNull : false,
            },
            mento :{
                type: Sequelize.STRING,
                allowNull : false,
            },
            student : {
                type: Sequelize.STRING,     
                allowNull : false
            },
            subject : {
                type : Sequelize.STRING,
                allowNull : false
            }
        },{
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'Reservation',
            tableName : 'reservations',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci',
            });
    }
    static associate(db){
    }
};