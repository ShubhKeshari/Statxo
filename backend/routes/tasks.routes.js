const express = require("express");
const { Task } = require("../models/task.model");
const { authenticateUser } = require("../middleware/users.middleware");
const morgan = require("morgan");
const tasksRoute = express.Router();
const fs = require("fs");
const path = require("path");

let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../logs/access.log"),
  {
    flags: "a",
  }
);

morgan.token("params", (req) => JSON.stringify(req.params));
morgan.token("email", (req) => req.email);
morgan.token("username", (req) => req.name);

const logFormat = `Method-:method Status-:status Route-:url Id-:params Email-:email Name-:username`;

tasksRoute.get("/task", async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ data: tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: `Some error occurred, error : ${error}` });
  }
});

tasksRoute.patch(
  "/update/:id",
  authenticateUser,
  morgan(logFormat, { stream: accessLogStream }),
  async (req, res) => {
    try {
      const { id } = req.params;

      const { ActionType, ActionName } = req.body;

      if (!ActionType || !ActionName) {
        return res.status(400).json({
          error: true,
          message: "ActionType or ActionName fields are missing",
        });
      }

      if (
        ![
          "Price-Negotiation",
          "Scrap",
          "Product ERP",
          "Price Non ERP",
        ].includes(ActionType)
      ) {
        return res
          .status(400)
          .json({ error: true, message: "Invalid Action Type" });
      }

      if (
        ![
          "Rebate",
          "Refund",
          "Price Increase",
          "Additional Task",
          "Price Decrease",
        ].includes(ActionName)
      ) {
        return res
          .status(400)
          .json({ error: true, message: "Invalid Action Name" });
      }

      const newDate = new Date();

      const taskData = await Task.findByIdAndUpdate(
        id,
        {
          ActionType,
          ActionName,
          UserName: req.name,
          EditedAt: newDate.toUTCString(),
        },
        {
          new: true,
        }
      );

      if (!taskData) {
        return res.status(400).json({
          error: true,
          message: `Some error occurred, error : ${error}`,
        });
      }

      return res
        .status(200)
        .json({ message: "Field updated successfully", data: taskData });
    } catch (error) {
      return res
        .status(500)
        .json({
          error: true,
          message: `Some error occurred, error : ${error}`,
        });
    }
  }
);

tasksRoute.all("*", (req, res) => {
  return res.status(404).json({ message: "404 Invalid Route" });
});

module.exports = { tasksRoute };
