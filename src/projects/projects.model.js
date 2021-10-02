const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema for Course
const ProjectSchema = new Schema({

  
  
  body: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});




module.exports = mongoose.model('Project', ProjectSchema);
