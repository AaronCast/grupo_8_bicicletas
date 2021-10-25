module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id_users: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        user_password: {
            type: DataTypes.STRING
        },
        user_image: {
            type: DataTypes.STRING
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(
        alias, cols, config
    );
    return User;
};