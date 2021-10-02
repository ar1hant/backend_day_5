const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "123456789",
  {
    host : "locahost",
    dialect : "postgres"
  }
);

sequelize.sync();
(async() => {
  try{
    await sequelize.authenticate();
    console.log("Conection Established with DB");
  }
  catch (err) {
    console.error("Unable to connect to DB");
  }
})();

module.exports = sequelize;