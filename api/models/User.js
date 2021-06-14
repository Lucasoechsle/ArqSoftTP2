module.exports = {

  attributes: {
    // id,created y update se crean automaticamente, creamos name email pass etc
    name:{
      type: 'string',
    },
    email:{
      type: 'string',
      required: true,
    },
    password:{
      type: 'string',
      required: true,
    }
  },
};
