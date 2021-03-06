'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    const body = req.body;
    // Get the user servie and `create` a new user
    app.service('users').create({
      email: body.email,
      password: body.password
    })
    .then(user => res.redirect('login.html'))
    .catch(next);

    next();
  };
};
