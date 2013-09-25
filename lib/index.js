
exports.register = function (plugin, options, next) {

    plugin.select('api').route({
        method: 'GET',
        path: '/',
        handler: internals.root,
    });

    return next();
};

internals.root = function(request) {
    request.reply('ohai. this is a request');
}