const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({

    currentowner: {
        type: mongoose.Types.ObjectId,
        reference: "user",
        required: true
    },
    title: {
        type: string,
        required: true,
        min: 10
    },
    type: {
        type: string,
        enum: ["beach,mountain ,village"],
        required: true
    },
    description: {
        type: string,
        required: true,
        min: 50
    },

    image: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    suqeremeter: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true,
        min: 2
    }

});
module.exports=mongoose.model1("propertydata",propertySchema)

