'use strict';

const Hapi = require('@hapi/hapi');
const LookupHandler = require('./lib/routes/lookup-handler').LookupHandler;

const init = async () => {
    // TODO - Configurations need to come from vault
    const lookupHandler = new LookupHandler();
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/v1/lookup',
        handler: async function (request, h) {
            return await lookupHandler.queryAddress(request, h);
        }
    });

    server.route({
        method: 'GET',
        path: '/v2/lookup',
        handler: async function (request, h) {
            return await lookupHandler.queryAddressFromDb(request, h);
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();