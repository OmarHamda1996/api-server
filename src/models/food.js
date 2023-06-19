module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('Food', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return Food;
  };
  