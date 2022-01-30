/**
 * Envio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {


    Dni:{
      type: 'string',
      required: true,
    },
    Nombre:{
      type: 'string',
      required: true,
    },
    Apellido: {
      type: 'string',
      required: true,
    },
    NumeroTarjeta:{
      type: 'string',
      required: true,
    },
    CodigoSeguridad:{
      type: 'string',
      required: true,
    },

  },
};
