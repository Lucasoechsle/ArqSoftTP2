module.exports = {

  attributes: {
    // id,created y update se crean automaticamente, creamos name email pass etc
    addres:{
      type: 'string',
    },
    country:{
      type: 'string',
      required: true,
    },
    city:{
      type: 'string',
      required: true,
    },
    zip:{
      type: 'string',
      required: true,
    },
    number:{
      type: 'string',
      required: true,
    }
  },
};
