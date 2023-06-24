const {Schema, model} = require('mongoose');

const PredmetSchema = new Schema({ 
    //Название
    title: { 
       type: String, 
       require: true, 
       unique: true
    },
    //Названия тем и ссылки к ним
    themas: { 
        type: Array, 
        default: []
    },
    //Описание
    description: { 
       type: String, 
       default: ""
    }, 
    //Картинка
    imgUrl: { 
       type: String, 
       default: ''
    }, 
    vievsCount: {
       type: Number, 
       default: 0
    },
 } , { 
    timestamps: true
 })
 
 module.exports = model('Predmet' , PredmetSchema);

