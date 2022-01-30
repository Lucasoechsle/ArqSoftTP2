/**
 * ProductsMolykoteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: async function (req, res) {
    const cantidad = req.param('cantidad')
    const producto = req.param('producto')
    const codigo = req.param('codigo')

    if (!req.session.carrito) {
      req.session.carrito = {
        productos: []
        ,
        costo: 0
      }
    }

    req.session.carrito.productos.push(
      {
        producto: producto,
        cantidad: cantidad,
        codigo: codigo,
        costoU: 30,
      }
    )
    res.view('pages/carro')
  }
}

