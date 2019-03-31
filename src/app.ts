import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import {Request, Response} from 'express';
import * as methodOverride from 'method-override';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as winston from 'winston';
import PostsController from './controllers/posts';
import UsersController from './controllers/users';

const app = express();

const log = winston.createLogger({
    level: 'info',    
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
          })
    ]
  });

// Configure MongoDB
//mongoose.connect('mongodb://localhost/jander', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
    res.send( "Hello world!" );
} );

app.get("/hello", (req: Request, res: Response) => {
    res.json({hello:"world"});
});

app.use('/api/posts', new PostsController().router);
app.use('/api/users', new UsersController().router);

module.exports = app;