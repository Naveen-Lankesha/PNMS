import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization denied. No token provided" });
  }
  try {
    const toke_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = toke_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
