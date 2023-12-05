const express = require("express")
const app = express()
const cors = require("cors")
const participantModel = require("./db");
app.use(cors())
app.use(express.json())

app.post("/participants", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, country, zip, address, instName, rNum, yr } = req.body;
        const newParticipant = new participantModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            pincode: zip,
            address: address,
            instituteName: instName,
            rollNumber: rNum,
            yearOfStudy: yr
        });
        const savedParticipant = await newParticipant.save();
        res.status(201).json(savedParticipant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/participants", async (req, res) => {
    try {
        const allParticipants = await participantModel.find({});
        console.log(allParticipants);
        res.status(200).json(allParticipants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => console.log("Listening!"))