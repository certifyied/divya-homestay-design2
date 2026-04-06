import mongoose, { Document, Model, Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
});
export const User = mongoose.models.User || mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map