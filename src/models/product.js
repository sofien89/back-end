const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, //remove white space
        },
        slug: {
            //   convert a string to URL
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        offer: {
            type: Number,
        },
        productPicture: [
            {
                img: {
                    type: String,
                },
            },
        ],
        createdBy:{ type: mongoose.Schema.Types.ObjectId, ref:'User'},
        updateAt: Date,
    },
    { timestamps: true }
); //assign createdAt and updatedAt fields to your schema

module.exports = mongoose.model("Product", productSchema);
