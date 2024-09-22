import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  collegeEmailID: {
    type: String,
    required: true,
  },
  collegeRollNumber: {
    type: String,
    required: true,
  },
  // arrayOfNumber :{
  //     type: [Number],
  //     required: true
  // },
  // arrayOfAlphabets: {
  //     type: [String],
  //     required: true
  // },
  // file: {
  //     fileValid: {
  //         type: Boolean,
  //         required: true,
  //     },
  //     fileMimeType: {
  //         type: String,
  //         required: true,
  //     },
  //     fileSize: {
  //         type: Number,
  //         required: true,
  //     },
  // }
});

export const Student = mongoose.model("Student", StudentSchema);
