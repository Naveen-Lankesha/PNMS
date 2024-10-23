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
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired. Please log in again." });
    }
    return res.status(401).json({ message: "Unauthorized access." });
  }
};

export default authMiddleware;
