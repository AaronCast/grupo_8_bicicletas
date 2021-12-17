module.exports = (sequelize, dataTypes) => {
    let alias = 'License'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },       
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        tableName: 'licenses',
        timestamps: false,
    }
    const License = sequelize.define(alias,cols,config);

    // License.associate = function (models) {
    //     License.hasMany(models.User, { 
    //         as: "users",
    //         foreignKey: "id_license"
    //     })
    // }

    return License;
};