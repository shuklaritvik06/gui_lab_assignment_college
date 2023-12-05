const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ritvik:0oJ75Q1UWKpiCOCO@cluster0.aeiaykn.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected to DB!")).catch((err) => console.log(err.message));

const ParticipantsSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    country: {
        type: String,
    },
    pincode: {
        type: String,
    },
    address: {
        type: String,
    },
    instituteName: {
        type: String,
    },
    rollNumber: {
        type: String,
    },
    yearOfStudy: {
        type: Number,
        enum: [1, 2, 3, 4],
    },
});

const participantModel = mongoose.model("participant", ParticipantsSchema);

module.exports = participantModel;
