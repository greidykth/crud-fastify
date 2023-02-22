const fastify = require('fastify')({
    logger: true
});

const productRoutes = require("./routes/products.routes");

require('./utils/mongoose');

fastify.get('/', (request, reply) => {
    reply.send({hello: "world!!!33"});
});

productRoutes.forEach(route => {
    fastify.route(route);
});

const start = async () => {
    await fastify.listen({port: 3000, host: '0.0.0.0'})
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
}

start();