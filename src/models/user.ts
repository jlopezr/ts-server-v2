import { prop, Typegoose } from 'typegoose';

export class UserType extends Typegoose {
    @prop()
    public name: string = "";

    @prop()
    public surname?: string = "";
}

export const User = new UserType().getModelForClass(UserType);