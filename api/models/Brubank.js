module.exports = {

  attributes: {
    // id,created y update se crean automaticamente, creamos name email pass etc
    cbu:{
      type: 'string',
      required: true,
    },
    alias:{
      type: 'string',
      required: true,
    }
  },
};
