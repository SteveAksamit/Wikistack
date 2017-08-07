var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
logging: false});


const Page = db.define(
  "page",
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        max: 60,
        notEmpty: true
      }
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        const route = this.getDataValue('urlTitle')
        return '/wiki/' + route
      }
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate:
      {max: 200}
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  },
  {

  }
);

const User = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        max: 50
      }
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    }
  }
);

const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      const title = this.getDataValue('title');
      // 'this' allows you to access attributes of the instance
      return this.getDataValue('/wiki/') + ' (' + ')';
    },
  }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};
