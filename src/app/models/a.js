'use strict';
module.exports = (sequelize, DataTypes) => {
  const a = sequelize.define('a', {
    me: DataTypes.STRING
  }, {});
  a.associate = function(models) {
    // associations can be defined here
  };
  return a;
};