import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/routes.js';

import { configDatabase } from './config/database-config.js';
import { configExpress} from './config/express-config.js';
import { useDefaultRoute } from './routes/default-route.js';


export const app = express();
dotenv.config();

configDatabase();
configExpress();

useDefaultRoute();
app.use(routes);