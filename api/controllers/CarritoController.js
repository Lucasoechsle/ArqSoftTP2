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

    if (!req.session.carrito) {
      req.session.carrito = {
        productos: [],
        costo: 0
      }
    }

    req.session.carrito.productos.push(
      {
        producto: producto,
        cantidad: cantidad,
        costoU: 4
      }
    )
    res.view('pages/carro')
  }
}

