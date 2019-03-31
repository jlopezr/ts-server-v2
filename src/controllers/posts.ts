import { Request, RequestHandler, Response, Router }  from 'express';
import { Post, PostType } from '../models/post';

class PostsController {
  public path = '/posts';
  public router = Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);    
  }

  protected getAllPosts : RequestHandler = async (request: Request, response: Response) => {
    try {
      const posts = await Post.find({});
      response.statusCode = 200;
      response.json({result: posts});
    } catch(err) {
      response.statusCode = 500;
      response.json({err});
    }    
  }
 
  protected createAPost = async (request: Request, response: Response) => {
    const post = new Post(request.body);

    try {
      const result = await post.save();
      response.statusCode = 201;      
      response.json({id: result._id});
    } catch(err) {
      response.statusCode = 500;
      response.json({err});
    }
  }
}

export default PostsController;