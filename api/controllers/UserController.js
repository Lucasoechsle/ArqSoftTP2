module.exports = {
  login: async function (req, res) {
    const email = req.param('email')
    const contra = req.param('contrasenia')

    const user = await User.findOne({
      email: email,
      password: contra,
    })
    if (user) {
      req.session.user = user
      res.redirect('/')

    } else {
      req.session.user = null
      res.view('pages/login', { msg: 'Nombre de usuario o contraseña incorrecto' })

    }
  },

  logout: async function (req, res) {
    req.session.user = null
    res.redirect('/')
  },
  showLogin:async function (req, res) {
    res.view('pages/login',{msg:null})
  },

}

