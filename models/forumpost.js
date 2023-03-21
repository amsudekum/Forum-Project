const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Forumpost extends Model {}

Forumpost.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        post_title: {   //name of the post author
            type: DataTypes.STRING,
            allowNull: false,
        },      
        forum_body: { //the actual post itself, cause we don't want them to publish an empty post?
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        date_created: {
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        }, 
    },
    {
        sequelize, 
        timestamps: true,
        freezeTableName: true, 
        underscored: true, 
        modelName: 'Forumpost'
    }
); 

module.exports = Forumpost; 