const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const scheduleInputSchema = new Schema ({
  firstName: {
    type: String,
    required: [true, "Please enter first name"]
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email"]
  },
  message: {
    type: String,
    required: [true, "Please enter a short message"]
  }
});

const ScheduleModel = mongoose.model("Schedule", scheduleInputSchema);

module.exports = ScheduleModel;
