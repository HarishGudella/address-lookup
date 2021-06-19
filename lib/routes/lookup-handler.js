const _ = require('lodash');
const Boom = require('@hapi/boom');
const data = require('../data/addresses.json');
const db = require('../db/db');

class LookupHandler {
    constructor() {
        //TODO - Initialization of other features
    }

    /**
     * Handler for version one - in memory implementation
     * @param request
     * @param h
     * @returns {Promise<{q: string, addresses}>}
     */
    async queryAddress(request, h) {
        try {
            const self = this;
            if (!request.query.q) {
                request.query.q = '*'
            }
            self.q = '.'.concat(request.query.q);
            const regex = new RegExp(self.q, 'i');
            const addresses = data.filter((item) => {
                if (regex.test(JSON.stringify(item))) {
                    return true;
                }
            });

            return {
                q: request.query.q,
                addresses: addresses
            }
        } catch (e) {
            const error = Boom.badRequest(e.message);
            error.output.statusCode = 400;
            error.reformat();
            throw error;
        }
    }

    /**
     * Handler for version two - postgres implementation
     * @param request
     * @param h
     * @returns {Promise<{q: *, addresses: *}>}
     */
    async queryAddressFromDb(request, h) {
        try {
            let q = '% %';
            if (!_.isUndefined(request.query.q)) {
                q = '%'.concat(request.query.q).concat('%');
            }
            const res = await db.client.query("SELECT line_1, line_2, city, state, zipcode FROM demo.addresses WHERE search LIKE LOWER($1)", [q]);
            return {
                q: request.query.q,
                addresses: res.rows
            }
        } catch (e) {
            const error = Boom.badRequest(e.message);
            error.output.statusCode = 400;
            error.reformat();
            throw error;
        }
    }
}

exports.LookupHandler = LookupHandler;