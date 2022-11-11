import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Post Route");
});

export default router;
