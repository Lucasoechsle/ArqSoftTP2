/**
 * CuponController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  next: async function (req, res) {

    const codigo = req.param('codigo');


    const cupon = await Cupon.findOne({
      codigo: codigo,

    });

    if (cupon) {
      req.session.cupon = codigo;
      res.redirect("/Tarjeta");

    } else {
      req.session.cupon = null;
      res.redirect("/Descuento");

    }
  },


};

