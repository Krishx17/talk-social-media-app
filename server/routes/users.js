import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read Route --> Read part in CRUD, reading data from the route, no creation, updation or deletion.

/* READ */
// router.get("user/:id") --> :id ==> is the query string where id is being passed by the front-end to back-end for verification and data fetching
//database is called by using the id as the identifier.

router.get("/:id", verifyToken, getUser); 
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
