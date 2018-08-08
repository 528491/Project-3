const Session = {

  generateToken: user => {
    return ({
      token: user.email,
      date: Date.now()
    });
  },

  verifyToken: token => {

  }

}

module.exports = Session;
