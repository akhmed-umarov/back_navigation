const PredmetModel = require('../models/predmet-model');

class PredmetController { 
   async getPredmetsArray (req, res) { 
      return res.status(200).json([
      { title: 'Информатика', imagUrl: 'informaticImg.jpg', link: 'informatic'},
      { title: 'Математика', imagUrl: 'mathsImg.jpg',  link: 'maths'},
      { title: 'Физика', imagUrl: 'physicsImg.jpg',  link: 'physics'}
   ])}

   async getPhysicsPredmet (req, res) { 
      try { 
         PredmetModel.findOneAndUpdate(
            { title: 'physics'}, 
            { $inc: { vievsCount: 1}},
            {returnDocument : 'after'},
            (err , doc)=>{ 
               if (err) { 
                  return res.status(500).json({ 
                     message: 'Не получилось получить данные о физике'
                  })
               } 
               if (!doc) { 
                  return res.status(404).json({ 
                     message: 'Неправильный запрос'
                  })
               }
               return res.status(200).json(doc)
            }
            )
      } catch(err) { 
        return  res.status(500).json({ 
            message: 'Не получилось получить информацию о предмете'
         })
      }}
   async getInformaticPredmet (req, res) { 
      try { 
         PredmetModel.findOneAndUpdate(
            { title: 'informatic'}, 
            { $inc: { vievsCount: 1}},
            {returnDocument : 'after'},
            (err , doc)=>{ 
               if (err) { 
                  return res.status(500).json({ 
                     message: 'Не получилось получить данные о информатике'
                  })
               } 
               if (!doc) { 
                  return res.status(404).json({ 
                     message: 'Неправильный запрос'
                  })
               }
               return res.status(200).json(doc)
            }
            )
      } catch(err) { 
         return res.status(500).json({ 
            message: 'Не получилось получить информацию о предмете'
         })
      }}
   async getMathsPredmet (req, res) { 
      try { 
         PredmetModel.findOneAndUpdate(
            { title: 'maths'}, 
            { $inc: { vievsCount: 1}},
            {returnDocument : 'after'},
            (err , doc)=>{ 
               if (err) { 
                  return res.status(500).json({ 
                     message: 'Не получилось получить данные о математике'
                  })
               } 
               if (!doc) { 
                  return res.status(404).json({ 
                     message: 'Неправильный запрос'
                  })
               }
               return res.status(200).json(doc)
            }
            )
      } catch(err) { 
        return res.status(500).json({ 
            message: 'Не получилось получить информацию о предмете'
         })
      }
   }
}

module.exports = new PredmetController();


// export const getPhysics = async (req, res)=>{ 
//    try { 
//       PredmetModel.findOneAndUpdate(
//          { title: 'physics'}, 
//          { $inc: { vievsCount: 1}},
//          {returnDocument : 'after'},
//          (err , doc)=>{ 
//             if (err) { 
//                return res.status(500).json({ 
//                   message: 'Не получилось получить данные о физике'
//                })
//             } 
//             if (!doc) { 
//                return res.status(404).json({ 
//                   message: 'Неправильный запрос'
//                })
//             }
//             return res.status(200).json(doc)
//          }
//          )
//    } catch(err) { 
//       res.status(500).json({ 
//          message: 'Не получилось получить информацию о предмете'
//       })
//    }
// }
// export const getInformatic = async (req, res)=>{ 
//    try { 
//       PredmetModel.findOneAndUpdate(
//          { title: 'informatic'}, 
//          { $inc: { vievsCount: 1}},
//          {returnDocument : 'after'},
//          (err , doc)=>{ 
//             if (err) { 
//                return res.status(500).json({ 
//                   message: 'Не получилось получить данные о информатике'
//                })
//             } 
//             if (!doc) { 
//                return res.status(404).json({ 
//                   message: 'Неправильный запрос'
//                })
//             }
//             return res.status(200).json(doc)
//          }
//          )
//    } catch(err) { 
//       res.status(500).json({ 
//          message: 'Не получилось получить информацию о предмете'
//       })
//    }
// }
// export const getMaths= async (req, res)=>{ 
//    try { 
//       PredmetModel.findOneAndUpdate(
//          { title: 'maths'}, 
//          { $inc: { vievsCount: 1}},
//          {returnDocument : 'after'},
//          (err , doc)=>{ 
//             if (err) { 
//                return res.status(500).json({ 
//                   message: 'Не получилось получить данные о математике'
//                })
//             } 
//             if (!doc) { 
//                return res.status(404).json({ 
//                   message: 'Неправильный запрос'
//                })
//             }
//             return res.status(200).json(doc)
//          }
//          )
//    } catch(err) { 
//       res.status(500).json({ 
//          message: 'Не получилось получить информацию о предмете'
//       })
//    }
// }

