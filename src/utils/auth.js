const models = require('@models');

exports.checkAndGetUser = async (ctx) => {
  ctx.assert(ctx.request.user, 401, '401: Unauthorized user');
  const { id } = ctx.request.user;
  const user = await models.User.findOne({
    where: { id },
  });
  ctx.assert(user, 401, '401: Unauthorized user');
  return user;
};
