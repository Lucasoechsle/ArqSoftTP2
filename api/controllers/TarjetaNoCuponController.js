
module.exports = {
  nexts: async function (req, res) {

    const Dni = req.param('Dni');
    const Nombre = req.param('Nombre');
    const Apellido = req.param('Apellido');
    const NumeroTarjeta = req.param('NumeroTarjeta');
    const CodigoSeguridad = req.param('CodigoSeguridad');


    const tarjetanocupon = await TarjetaNoCupon.findOne({
      Dni: Dni,
      Nombre: Nombre,
      Apellido: Apellido,
      NumeroTarjeta: NumeroTarjeta,
      CodigoSeguridad: CodigoSeguridad

    });

    if (tarjetanocupon) {
      req.session.tarjetanocupon = tarjetanocupon;
      res.redirect("/FinalSale");

    } else {
      req.session.tarjetanocupon = null;
      res.redirect("/TarjetaNoCupon");

    }
  },






};

