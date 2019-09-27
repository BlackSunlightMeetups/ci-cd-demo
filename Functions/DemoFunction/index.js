module.exports = function (context, req) {
    let username = req.query.name;

    context.res.body = `hello, ${username}`;

    context.done();
};
