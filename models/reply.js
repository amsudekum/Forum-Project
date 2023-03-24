const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Comment extends Model {}

Comment.init(
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
                model: 'user',
                key: 'name',
            },
        }, 
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'forumpost',
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

module.exports = Comment; 