import express from 'express';
import { fileRouter } from './resources/file';

export const restRouter = express.Router();
restRouter.use('/files', fileRouter)
