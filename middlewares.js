module.exports.getMain = function(req, res, next) {
  res.status(200).render("index.pug");
}

module.exports.postLogin = function(req, res, next) {
  req.session.userName = req.body.userName
  res.redirect("/home");
  req.session.save()
}

module.exports.getHome = function(req, res, next) {
  console.log(req.session);
  res.send("Hello " + req.session.userName);
}