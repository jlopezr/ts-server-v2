import * as winston from 'winston';

const log = winston.createLogger({
    level: 'info',    
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
          })
    ]
  });

const app = require('./app');
const port = 8080; // default port to listen


// start the Express server
app.listen( process.env.PORT || port, () => {
    log.info(`server started at http://localhost:${ port }`);        
} );