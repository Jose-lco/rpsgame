module.exports = function(sequelize, DataTypes) {
  let Leaderboard = sequelize.define("Leaderboard", {
    player: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    ties: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    }
  });
  return Leaderboard;
};
