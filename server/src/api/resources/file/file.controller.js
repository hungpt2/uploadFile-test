import Joi from 'joi';
import File from './file.model';
export default {

  async getFiles(req, res) {
    try {
      const { page, perPage } = req.query;
      const options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10
      };
      const files = await File.paginate({}, options);
      console.log(options, files);
      return res.json(files);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async create(req, res) {
    try {
      const schema = Joi.object().keys({
        fileName: Joi.string().required(),
        fileSize: Joi.number().required(),
        date: Joi.date(),
        user: Joi.string(),
      });
      const { value, error } = Joi.validate(req.body, schema);
      if (error && error.details) {
        return res.status(400).json(error);
      }
      const file = await File.create(value);
      return res.json(file);
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  }
};
