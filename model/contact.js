function contactModel(sequelize, DataTypes) {
    const Contact = sequelize.define(
      "contact",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        message: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },
      {
        freezeTableName: true,
      }
    );
  
    return Contact;
  }
  
  module.exports = contactModel;
  