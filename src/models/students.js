const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Id already exists!!!"],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Please, Enter Valid Email Id");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        // max: 10,
        required: true,
        unique: [true, "Mobile no. already exists!!!"]
    },
    address: {
        type: String,
        required: true,

    }
});

// created a student collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;