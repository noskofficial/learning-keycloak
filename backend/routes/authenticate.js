import jwt from "jsonwebtoken";

export const jwtMiddleware = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

  const decodedToken = jwt.verify(token, public_key, {
    algorithms: ["RS256"],
  });

  const { email } = decodedToken;
  req.user = email;
  next();
};
