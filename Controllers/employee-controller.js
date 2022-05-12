const { Employee } = require("../Models/employee-model");

const AddDetails = async (req, res, next) => {
  let employee = new Employee(req.body);
  await employee
    .save()
    .then((Employee) => {
      res.status(200).json({ employee: "employee is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
const getDetails = async (req, res) => {
  await Employee.find(function (err, employee) {
    if (err) console.log(err);
    else {
      res.json(employee);  
    }
  });
};
const editDetails = async (req, res) => {
  await Employee.findById(req.params.id, function (err, employee) {
    res.json(employee);
  });
};
const updateDetails = async (req, res) => {
  await Employee.findById(req.params.id, function (err, employee) {
    console.log(req.body);
    if (!employee) res.status(404).send("data is not found");
    else {
      employee.name = req.body.name;
      employee.address = req.body.address;
      employee.contactnumber = req.body.contactnumber;
      employee.email = req.body.email;
      employee.designation = req.body.designation;
      employee.salary = req.body.salary;
     
      employee
        .save()
        .then((employee) => {
          console.log(employee);
          res.json(employee);
        })
        .catch((err) => {
          res.status(400).send("unable to update database ");
        });
    }
  });
};
const deleteDetails = async (req, res) => {
  await Employee.findByIdAndRemove(
    { _id: req.params.id },
    function (err, employee) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};

module.exports = {
  AddDetails,
  getDetails,
  editDetails,
  updateDetails,
  deleteDetails,
};
