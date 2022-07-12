import express from "express";

const router = express.Router();

const homeController = router.get("/", (_, res) => {
  try {
    const message = "gzip-and-brotli-stack-examples-node-gzip";
    res.send(message.repeat(50));
  } catch (error) {
    console.error(error);
  }
});

export default homeController;
