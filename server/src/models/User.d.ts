import { Document, Model } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
}
export declare const User: Model<IUser>;
//# sourceMappingURL=User.d.ts.map