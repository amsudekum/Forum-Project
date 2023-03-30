const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 
const User = require('./user'); // import the User model

class Reply extends Model {}

Reply.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },     
        content: { //the actual post itself, cause we don't want them to publish an empty post?
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        date_created: {
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: DataTypes.NOW,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        }, 
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Forumpost',
                key: 'id',
            },
        }, 
    },
    {
        sequelize, 
        timestamps: true,
        freezeTableName: true, 
        underscored: true, 
        modelName: 'Reply'
    }
);


module.exports = Reply;