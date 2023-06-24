const {Schema, model} = require('mongoose');

const ThemaSchema = new Schema({ 
    //Название
    title: { 
       type: String, 
       require: true, 
       unique: true
    },
    predmet: { 
      type: String,
      require: true,
    },
    //Сама тема по группам
    description: { 
       type: Array, 
       default: ['']
    }, 
   //  //Картинки они будут в body
    imgUrl: { 
       type: Array, 
       default: ['']
    }, 
 } , { 
    timestamps: true
 })
 
 module.exports = model('Thema' , ThemaSchema);