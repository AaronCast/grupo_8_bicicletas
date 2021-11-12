module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull:false
        },
        colors: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.STRING
        },
        brand: {
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(
        alias, cols, config
    );
    return Product;
};