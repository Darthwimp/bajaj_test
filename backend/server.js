import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB.js";
import { Student } from "./model/student.model.js";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

app.listen(5000, () => {
  connectDB();
  console.log("server started at port 5000");
});

app.get("/", async (req, res) => {
  try {
    res.status(200).json({ operation_code: 1 });
  } catch (error) {
    res
      .status(500)
      .json({ operation_code: 0, message: "Internal server error" });
  }
});

app.get("/hlbf/student", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/hlbf", async (req, res) => {
  try {
    const { status, userID, collegeEmailID, collegeRollNumber } = req.body;
    if (!status || !userID || !collegeEmailID || !collegeRollNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newStudent = new Student({
      status,
      userID,
      collegeEmailID,
      collegeRollNumber,
    });
    await newStudent.save();
    res.status(200).json({
      message: "Student data successfully saved",
      student: newStudent,
    });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
});
