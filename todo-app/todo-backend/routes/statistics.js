const express = require("express");
const router = express.Router();
const { get, set } = require("../redis/index");

router.get("/", async (_, res) => {
  const cachedStats = await get("added_todos");
  res.json({ added_todos: Number(cachedStats) });
});

module.exports = router;
