  const Users = require("../models/users");

  exports.renderSignUp = (req, res) => {
    const cookie = req.session.isLoggedIn;  
    res.render("sign-up", { isLoggedIn: req.cookies.isLoggedIn });
  };

  exports.registerUser = (req, res) => {  
    const { userName, password, confirmPassword } = req.body;
    console.log("Received data:", req.body);
    const users = new Users(null, userName, password);

    users.insertUser().then(() => {
      res.redirect("/");
    });
  };

  exports.renderLogin = (req, res) => {
    const cookie = req.session.isLoggedIn;
    res.render("login", { isLoggedIn: req.cookies.isLoggedIn });
  };

  exports.validateLogin = (req, res) => {
    const { userName, password } = req.body;
    Users.fetchUserByUsername(userName)
        .then(( [[userCredentials], tInfo]  ) => {
      if (userCredentials) {
        if (userCredentials.password === password) {
          // res.cookie("isLoggedIn", "true");
          req.session.isLoggedIn = "true";
          res.redirect("/");
        } else {
          // res.cookie("isLoggedIn", "invalidPassword");
          req.session.isLoggedIn = "invalidPassword";
          res.redirect("/login");
        }
      } else {
        // res.cookie("isLoggedIn", "invalidUsername");
        req.session.isLoggedIn = "invalidUsername";
        res.redirect("/login");
      }
    });
  };

  exports.logout = (req, res) => {
    // res.cookie("isLoggedIn", "false");
    // req.session.isLoggedIn=false ;
    req.session.destroy(req.session.id); // deletes session from database table sessions when logout
    res.redirect('/');
  }
