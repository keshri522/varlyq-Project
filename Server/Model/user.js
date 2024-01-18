// this is schema components menas here we defiend all the blueprint of documents coming from body
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    availability: { type: String, required: true },
    checkskill: { type: String, required: true },
    companyname: { type: String, required: true },
    contact: { type: String, required: true },
    currency: { type: String, required: true },
    finalQuestion: { type: String, required: true },
    frequency: { type: String, required: true },
    intern: { type: String, required: true },
    jobTitle: { type: String, required: true },
    jobpipeline: { type: String, required: true },
    location: { type: String, required: true },
    maxsalary: { type: String, required: true },
    minsalary: { type: String, required: true },
    qualification: { type: String, required: true },
    skill: { type: String, required: true },
  },
  { timestamps: true }
);

// Create the model
const User = mongoose.model("Job", UserSchema);
