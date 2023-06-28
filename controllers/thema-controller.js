const ThemaModel = require("../models/thema-model");

class ThemaController {
  async getPhysicThema(req, res) {
    const PhysicThema = req.params.thema;
    try {
      ThemaModel.findOne(
        { predmet: "physics", link: PhysicThema },
        { $inc: { vievsCount: 1 } },
        { returnDocument: "after" },
        (err, doc) => {
          if (err) {
            return res.status(500).json({
              message: "Не получилось получить данные о физике",
            });
          }
          if (!doc) {
            return res.status(404).json({
              message: "Неправильный запрос",
            });
          }
          return res.status(200).json(doc);
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: "Не получилось получить информацию о предмете",
      });
    }
  }
  async getInformaticThema(req, res) {
    const InformaticThema = req.params.thema;
    try {
      ThemaModel.findOne(
        { predmet: "informatic", link: InformaticThema },
        (err, doc) => {
          if (err) {
            return res.status(500).json({
              message: "Не получилось получить данные о информатике",
            });
          }
          if (!doc) {
            return res.status(404).json({
              message: "Неправильный запрос",
            });
          }
          return res.status(200).json(doc);
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: "Не получилось получить информацию о предмете",
      });
    }
  }
  async getMathsThema(req, res) {
    const MathsThema = req.params.thema;
    try {
      ThemaModel.findOneAndUpdate(
        { predmet: "maths", link: MathsThema },
        { $inc: { vievsCount: 1 } },
        { returnDocument: "after" },
        (err, doc) => {
          if (err) {
            return res.status(500).json({
              message: "Не получилось получить данные о математике",
            });
          }
          if (!doc) {
            return res.status(404).json({
              message: "Неправильный запрос",
            });
          }
          return res.status(200).json(doc);
        }
      );
    } catch (err) {
      return res.status(500).json({
        message: "Не получилось получить информацию о предмете",
      });
    }
  }
}

module.exports = new ThemaController();

// export const getPhysicThema = async (req, res)=>{
//    const PhysicThema = req.params.thema;
//    try {
//       ThemaModel.findOne(
//          { predmet: 'physics' , thema: PhysicThema },
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
// export const getInformaticThema = async (req, res)=>{
//    const InformaticThema = req.params.thema;
//    try {
//       ThemaModel.findOneAndUpdate(
//          { predmet: 'informatic', thema: InformaticThema},
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
// export const getMathsThema = async (req, res)=>{
//    const MathsThema = req.params.thema;
//    try {
//       ThemaModel.findOneAndUpdate(
//          { predmet: 'maths' , thema: MathsThema},
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
