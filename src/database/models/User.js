module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
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
        license: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        }
        
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(
        alias, cols, config
    );

    // User.associate = function(models){
    //     User.belongsTo(models.License, {
    //         as:'licenses',
    //         foreingKey: 'id_license'
    //     })
    // }


    return User;
};