import mongoose, {Schema} from "mongoose";

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
      surname: {
        type: String,
        required: true,
        trim: true
    },
})

export interface User{
    name: String
    surname: String
}

export const UserModel = mongoose.model("User", UserSchema);