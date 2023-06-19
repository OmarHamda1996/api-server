module.exports = (sequelize, DataTypes) => {
    const MedicalRecord = sequelize.define('MedicalRecord', {
      patientName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      medicalHistory: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      allergies: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      medications: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    return MedicalRecord;
  };
module.exports = (sequelize, DataTypes) => {
  const MedicalRecord = sequelize.define('MedicalRecord', {
    patientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    medicalHistory: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    medications: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return MedicalRecord;
};
  