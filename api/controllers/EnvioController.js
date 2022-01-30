/**
 * EnvioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  next: async function (req, res) {

    const provincia = req.param('provincia');
    const ciudad = req.param('ciudad');
    const direccion = req.param('direccion');

      const envio = await Envio.findOne({
      provincia: provincia,
      ciudad: ciudad,
      direccion: direccion
    });

    if (envio) {
      req.session.envio = envio;
      res.redirect("/Descuento");

    } else {
      req.session.envio = null;
      res.redirect("/shipping");

    }
  },






};


