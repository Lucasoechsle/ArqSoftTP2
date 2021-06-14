

/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/*

module.exports = {
  orden: async function (req, res) {
    let product = await Product.find({});

    res.view('homepages/orden', {products: product, amount: 0, sum: 0, arrprod: [0]});
  },


  addorden: async function (req, res) {
    let found = await Product.findOne({
      name: req.param("size")
    });

    let arrprod = [];

    for (let i = 0; i < req.param("arrprod").length; i++) {
      if (req.param("arrprod")[i] !== ',') {
        arrprod.push(Number(req.param("arrprod")[i]));
      }
    }

    arrprod.push(found.id);

    let amount = Number(req.param("Price"));
    amount += found.cost;
    let cant = req.param("plus");
    cant++;

  };
  */

