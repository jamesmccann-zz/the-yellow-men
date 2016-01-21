exports.initErrorHandlers = function(req, res, next) {
  res.err = function(err, title, message) {
    console.log('ERR:', err)
    res.status(500).render('errors/500', {
      err: err,
      errorTitle: title,
      errorMsg: message
    });
  }

  res.notfound = function(title, message) {
    console.log('404:', title)
    res.status(404).render('errors/404', {
      errorTitle: title,
      errorMsg: message
    });
  }

  next();
};

