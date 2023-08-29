import express from "express";
import prisma from "../configs/prisma";
import { redisClient } from "../configs/redis";

const router = express.Router();

router.get("/", async (req, res) => {
  const employee = await prisma.employee.findMany();

  const cache = await redisClient.get("employee");
  await redisClient.set("employee", JSON.stringify(employee), "EX", 60);

  if (cache) {
    return res.status(200).json(JSON.parse(cache));
  }

  return res.status(200).json({ employee, isCache: false });
});

export { router as employeeRouter };
