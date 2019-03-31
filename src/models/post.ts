import { prop, Typegoose } from 'typegoose';

export class PostType extends Typegoose {
    @prop()
    public title: string = "";

    @prop()
    public content: string = "";
    
    @prop()
    public date: Date = new Date();
}

export const Post = new PostType().getModelForClass(PostType);