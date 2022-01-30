/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/metodosdepago': { view: 'pages/metodosdepago' },
  '/shipping': { view: 'pages/shipping' },
  '/Descuento': { view: 'pages/Descuento' },
  '/transferencia': { view: 'pages/transferencia' },
  '/SantanderRio': { view: 'pages/SantanderRio' },
  '/Uala': { view: 'pages/Uala' },
  '/TarjetaNoCupon': { view: 'pages/TarjetaNoCupon' },
  '/Brubank': { view: 'pages/Brubank' },
  '/Factura': { view: 'pages/Factura' },
  '/LaEmpresa': { view: 'pages/LaEmpresa' },
  '/Carroo': 'CarritoController.add',

  '/Tarjeta': { view: 'pages/Tarjeta' },


  '/FinalSale': { view: 'pages/FinalSale' },
  '/Efectivo': { view: 'pages/Efectivo' },
  'GET /login': 'UserController.showLogin',
  'POST /login': 'UserController.login' ,
  '/logout': 'UserController.logout' ,
  'GET /ProductsFram':{view: 'pages/ProductsFram'} ,
  'GET /ProductsCastrol':{view: 'pages/ProductsCastrol'} ,
  'GET /ProductsMolykote':{view: 'pages/ProductsMolykote'},
  'GET /Carrito/sale':{view: 'pages/sale'},
  'POST /CarritoCastrol/add': 'CarritoController.add',
  'POST /CarritoFram/add': 'CarritoFramController.add',
  'POST /CarritoMolykote/add': 'CarritoMolykote.add',
  'POST /Descuento': 'EnvioController.next',
  'POST /FinalSale': 'CardsController.final',
  'POST /Tarjeta': 'CuponController.next',





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
