/**
 * Cards.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    // id,created y update se crean automaticamente, creamos name email pass etc

    dni:{
      type: 'string',
      required: true,
    },
    number:{
      type: 'string',
      required: true,
    },
    codesecurity: {
      type: 'string',
      required: true,
    }

    },
};


