import jwt from "jsonwebtoken";
const { JWT_SECRET_KEY } = process.env;

export const JWTsign = async (userData) => {
  let token = jwt.sign(userData, JWT_SECRET_KEY, { expiresIn: 60 * 60 });
  return token;
};

export const auth = async (req, res, next) => {
  const { authorization } = req.signedCookies;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      message:
        "No authorization headers, you're not authorized to access this page!",
      data: null,
    });
  }
  jwt.verify(authorization, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid token, you're not authorized to access this page!",
        err: err.message,
        data: null,
      });
    }
    req.decodedToken = decoded;
    next();
  });
};
