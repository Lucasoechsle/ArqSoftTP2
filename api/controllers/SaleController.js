/**
 * SaleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  add: async function (req, res) {
    const total = req.param('total')

    if (!req.session.sale) {
      req.session.sale = {
       total: 0
      }
    }

    req.session.sale.total.push(
      {
        total: p.costoU*p.cantidad
      }
    )
    res.view('pages/sale')
  }
}

