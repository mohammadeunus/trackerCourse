const mongoose = require('mongoose');
const { Schema } = mongoose;

const DetailsSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model('course', DetailsSchema); 