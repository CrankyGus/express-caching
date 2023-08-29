import express from "express";
import { employeeRouter } from "./employee";

const router = express.Router();

router.use("/employee", employeeRouter);

export { router as MainRouter };
