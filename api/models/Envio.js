/**
 * Envio.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    // id,created y update se crean automaticamente, creamos name email pass etc

    provincia:{
      type: 'string',
      required: true,
    },
    ciudad:{
      type: 'string',
      required: true,
    },
    direccion: {
      type: 'string',
      required: true,
    }

  },
};
