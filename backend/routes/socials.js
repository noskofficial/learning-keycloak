import express from "express";

const router = express.Router();

let data = {
  "test@gmail.com": {
    github: "https://github.com/test",
    linkedin: "https://linkedin.com/in/test",
    twitter: "https://twitter.com/test",
    facebook: "https://facebook.com/test",
  },
  "best@gmail.com": {
    github: "https://github.com/best",
    linkedin: "https://linkedin.com/in/best",
    twitter: "https://twitter.com/best",
    facebook: "https://facebook.com/best",
  },
};

const getSocials = async (req, res) => {
  try {
    const email = req.user;

    res.status(200).send(data[email]);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getSocials);
export default router;
