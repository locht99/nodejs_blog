class UserController {
  // get all user
  index(req, res) {
    res.render('user/list');
  }
}

module.exports = new UserController();
