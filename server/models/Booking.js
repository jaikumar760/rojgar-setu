const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
    service: String,
    name: String,
    address: String,
    mobile: String,
    state: String,
    city: String,
    date: String,
    time: String,

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
