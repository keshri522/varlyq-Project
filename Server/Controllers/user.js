// this is the conrollers function that will save all the data in the database
const User = require("../Model/user");
const { stack } = require("../routes/userroutes");
const UserControllers = async (req, res) => {
  // console.log(req.body);
  // destructure the data
  const {
    availiblity,
    checkskill,
    companyname,
    contact,
    currency,
    finalQuestion,
    frequency,
    intern,
    jobTitle,
    jobpipeline,
    location,
    maxsalary,
    minsalary,
    qualification,
    skill,
    // Include stack in the destructuring assignment
  } = req.body.mergedData;

  try {
    // first need to verify if all the data is properly coming or not
    if (
      !availiblity ||
      !checkskill ||
      !companyname ||
      !contact ||
      !currency ||
      !finalQuestion ||
      !frequency ||
      !intern ||
      !jobTitle ||
      !jobpipeline ||
      !location ||
      !minsalary ||
      !maxsalary ||
      !qualification
    ) {
      res.status(400).json({
        message: "Please enter all the Fields",
      });
      return; // Add return statement to prevent further execution
    }

    // need to save the data in the db
    // Create a new User instance with the provided data
    const newUser = new User({
      availability: availiblity,
      checkskill: checkskill,
      companyname: companyname,
      contact: contact,
      currency: currency,
      finalQuestion: finalQuestion,
      frequency: frequency,
      intern: intern,
      jobTitle: jobTitle,
      jobpipeline: jobpipeline,
      location: location,
      maxsalary: maxsalary,
      minsalary: minsalary,
      qualification: qualification,
      skill: skill,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    console.log("Some errors", error); // just for debugging
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// this is the get request for show all the data
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}); // it will find all the da with user collection

    res.status(200).json({
      message: "Successfully retrieved all users",
      users: users,
    });
  } catch (error) {
    //  console.log(error) // just for DEBUG purposes
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = { UserControllers, getAllUsers };
