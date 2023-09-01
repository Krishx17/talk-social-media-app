import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path"; //comes with node alread need not be installed.
import { fileURLToPath } from "url"; 
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js"
import { register } from "./controller/auth.js"

/* CONFIGURATIONS --> includes all the middleware & package configs */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assests')));

/* FILE STORAGE */
/* whenever a user uploads a file onto the website then the files are going to be stored into the particular folder
"public/assests".
*/
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

//this will actually help us upload it.
const upload = multer({ storage });

/* ROUTES WITH FILES */
/*router gets triggerd, upload.single() is the middleware, this uploads the picture locally into the public/assets folder
register --> logic of actually saving the user into out database
*/
//this router uses upload function so it can't be moved to the router section
app.post("/auth/register", upload.single("picture"), register)

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001; //connect to port provided in the .env, if not available connect to port 6001
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { //do this after connection 
    app.listen(PORT, () => console.log(`Database connected, Ready to fly 🚀🔥🍀 at Server Port: ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect 🚀🍀`)); //if error --> console log error

