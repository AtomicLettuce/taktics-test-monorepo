module.exports = function(frontendUrl) {
  return function oauthEmailError(err, req, res, next) {
    if (err && err.name === 'oauth-email-error') {
      res.redirect(frontendUrl + '?error=' + err.name);
    } else if (err) {
      next(err);
    }

    next();
  };
};
