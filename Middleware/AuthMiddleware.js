//jwt.verify
import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";
import dotenv from "dotenv";

dotenv.config();

const authMiddlewares = async (req, res, next) => {
  const token = req.headers.token;
  //const token=req.headers.authorization?.split(' ')[1]
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Token Not Found" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    console.log(req.user);
    const user = await User.findById(req.user._id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Access Denied Not a Valid user" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Invalid Token Internal Server Error" });
  }
};

export default authMiddlewares;
