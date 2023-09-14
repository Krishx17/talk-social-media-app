import bcrypt from "bcrypt"; // this allows us to encrypt our password
import jwt from "jsonwebtoken"; // this allows us to send user a web token that the user can use for authorization
import User from "../models/User.js";

//Basic Authentication --> 

/* Register User */
export const register = async (req, res) => {
    try {
        // Destructuring of properties from req.body
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,    
            friends,
            location,
            occupation
        } = req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

    /*so the logic behind encrypting password is whenever the user signs-up 
    with the password, the password then is going to be hashed using salt generated from the bcrypt
    and then when the user tries to login, the entered password will be hashed again and will be matched against
    the stored hashedPassword, if matched user will be provided with the jwt token to login */
    //user login password --> hash(password, salt) --> login, password --> if(hash(password,salt) == hashedPassword) --> provide jwt token.

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ error: err.message }); 
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: "User does not exist. "});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials "});

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch (err) { 
        res.status(500).json( {error: err.message} );
    }
};

