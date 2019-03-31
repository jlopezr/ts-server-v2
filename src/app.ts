import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import {Request, Response} from 'express';
import * as methodOverride from 'method-override';
import * as logger from 'morgan';
import * as winston from 'winston';

const app = express();

const log = winston.createLogger({
    level: 'info',    
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
          })
    ]
  });

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

module.exports = app;