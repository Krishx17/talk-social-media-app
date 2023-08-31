import mongoose from "mongoose";

//defining a schema --> 
const UserSchema = new mongoose.Schema(
    {
    firstName:{
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName:{
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email:{
        type: String,
        required: true,
        min: 2,
        max: 50,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min: 5,
    },
    picturePath:{
        type: String,
        default: "",
    },
    friends:{
        type: Array,
        default: []
    },
    location: String,
    Occupation: String,
    viewedProfile: Number,
    impressions: Number,
},
{ timestamps: true } //this automatically provides dates and times such as: created at, updated at
);

const User = mongoose.model("User", UserSchema);
export default User;