const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
   
  },
  address: {
    type: String,
    
  },
  contactnumber: {
    type: String,
   
  },
  email: {
    type: String,
  
  },
  designation: {
    type: String,

  },
  salary: {
    type: String,
 
  },

},{timesamps:true})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {Employee}