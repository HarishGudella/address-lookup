const { Client } = require('pg');
const config = require('../config/config.json');
const _ = require('lodash');

/**
 * Singleton DB connection
 */
class Db {
    constructor() {
        this.client = new Client({
            host: _.get(config, 'host'),
            port: _.get(config, 'port'),
            user: _.get(config, 'user'),
            password: _.get(config, 'password'),
        });
        this.client.connect();
    }
}

module.exports = new Db()