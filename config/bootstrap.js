/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await User.count() > 0) {
    console.log('No Vacia');
    return;
  }
  console.log('Vacia');
  await User.createEach([
    {
      email: 'ry@example.com',
      name: 'Ryan Dahl',
      password: '12345',
    },
    {
      email: 'juan@pepe.com',
      name: 'Juan Jose',
      password: '54321' ,
    },

  ]);

};
/*
module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await ProductoCastrol.count() > 0) {
    console.log('No Vacia');
    return;
  }
  console.log('Vacia');
  await ProductoCastrol.createEach([
    {
      name: 'Aceite Motor',
      code: 'A-2212',
      brand: 'Castrol',
      costo: '50',
      cant: '1',
    },

  ]);

};

 */
