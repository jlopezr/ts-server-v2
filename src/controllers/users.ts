import { Request, RequestHandler, Response, Router }  from 'express';
import { User, UserType } from '../models/user';

class UsersController {
  public path = '/users';
  public router = Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createAUser);    
  }

  protected getAllUsers : RequestHandler = async (request: Request, response: Response) => {
    try {
      const posts = await User.find({});
      response.statusCode = 200;
      response.json({result: posts});
    } catch(err) {
      response.statusCode = 500;
      response.json({err});
    }    
  }
 
  protected createAUser = async (request: Request, response: Response) => {
    const user = new User(request.body);

    try {
      const result = await user.save();
      response.statusCode = 201;      
      response.json({id: result._id});
    } catch(err) {
      response.statusCode = 500;
      response.json({err});
    }
  }
}

export default UsersController;