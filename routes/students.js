const express = require('express');
const router = express.Router();

 const Student = require('../model/student')

router.post ('/addStudent' , async (req,res,next) => {

    try{
            const student  = await Student.findOne({email: req.body.email});

            if(student){
                return res.json({
                    success:false,
                    message:"Student already registered with this email"
                });
            }else{
                let newStudent = await Student.create(req.body);

                res.json({
                        success:true,
                        message:"Student is added successfully",
                        student: newStudent

                })

            }



    }catch(error){
        next(error)


    }
   
})

router.put('/updateStudent/:id', async (req, res, next) => {
    try {

         
          let student = await Student.findById(req.params.id);

          if(!student) {
              return res.json({
                  success: false, 
                  message: "Student ID doesn't exist"

              });
          } else {
              
             let updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
                 new: true,   
                 runVaidator: true
             });

             res.json({
                 success: false,
                 message: "Student updated successfully.",
                 student: updateStudent
             });
          }
    } catch (error) {
        next(error);
    }
});


router.delete('/deleteStudent/:id', async (req, res, next) => {
    try {

         
          let student = await Student.findById(req.params.id);

          if(!student) {
              return res.json({
                  success: false,
                  message: "Student ID doesn't exist"

              });
          } else {
              
           await student.remove();
           res.json({
               success: true,
               message: `Student with id ${req.params.id} deleted successfully`,
               student: {}
           });

          }
        } catch(error) {
            next(error);
        }

    });

    







module.exports = router;