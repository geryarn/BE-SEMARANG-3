// url
// // mysql://root:U8g7Ni1Dx4h4PwW5iAZo@containers-us-west-176.railway.app:6040/railway
//  // mysql://root:czgtKMhQhDrtEWGqMZXxiUmpmyzobaPh@mysql-er1r.railway.internal:3306/railway

// database
// // railway
// // railway

// host
//  // viaduct.proxy.rlwy.net
// // containers-us-west-176.railway.app

// password
//  // czgtKMhQhDrtEWGqMZXxiUmpmyzobaPh
// // U8g7Ni1Dx4h4PwW5iAZo

// port
// // 39376
// // 6040

// user
// // root

const { Sequelize } = require("sequelize");
const contactModel = require("../model/contact");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("railway", "root", "czgtKMhQhDrtEWGqMZXxiUmpmyzobaPh", {
  host: "viaduct.proxy.rlwy.net",
  dialect: "mysql",
  port: 39376,
  logging: console.log,  // Optional: to log SQL queries
});

const db = {};
db.sequelize = sequelize;
db.contact = contactModel(sequelize, Sequelize.DataTypes);

module.exports = db;

// Test connection
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  testConnection();
  
  module.exports = db;

