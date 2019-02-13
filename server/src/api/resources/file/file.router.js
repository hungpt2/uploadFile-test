import express from 'express';
import fileController from './file.controller';

export const fileRouter = express.Router();

fileRouter
  .route('/getListFile')
  .get(fileController.getFiles);

fileRouter
  .route('/uploadFile')
  .post(fileController.create)
