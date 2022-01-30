/**
 * CardsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  final: async function (req, res) {

    const dni = req.param('dni');
    const numero = req.param('numero');
    const codesecurity = req.param('codesecurity');

    const card = await Cards.find().limit(3)({
      dni: dni,
      numero: numero,
      codesecurity: codesecurity
    });

    if (card) {
      req.session.cards = cards;
      res.redirect("/FinalSale");

    } else {
      req.session.cards = null;
      res.redirect("/Tarjeta");

    }
  },






};
