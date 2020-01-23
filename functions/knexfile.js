// Update with your config settings.
var options = {
  development: {
    client: 'pg',
    connection: 'postgres://jlzlzpuq:YJdzCCRJdbmqm7sm6Bhm5LEmE5chGyCD@rajje.db.elephantsql.com:5432/jlzlzpuq',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: 'postgres://jlzlzpuq:YJdzCCRJdbmqm7sm6Bhm5LEmE5chGyCD@rajje.db.elephantsql.com:5432/jlzlzpuq',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = config