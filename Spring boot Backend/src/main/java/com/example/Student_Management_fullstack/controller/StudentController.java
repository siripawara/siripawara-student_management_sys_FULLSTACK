package com.example.Student_Management_fullstack.controller;


import com.example.Student_Management_fullstack.entitiy.Course;
import com.example.Student_Management_fullstack.entitiy.Student;
import com.example.Student_Management_fullstack.service.CourseService;
import com.example.Student_Management_fullstack.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/")
public class StudentController {

    @Autowired
    private CourseService courseService;
    @Autowired
    private StudentService studentService;

    @GetMapping("test")
    public String test(){
        return "ok";
    }

    @PostMapping("addStudentWithCourse")
    public String createStudentWithCourse(@RequestBody Student student){
        studentService.createStudentWithCourse(student);
        return "Added";
    }

    @GetMapping("allStudents")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }


    @PostMapping("seletedCourses/{id}")
    public Course seletedCourses(@PathVariable("id") Long id){
        System.out.println(id);
        return courseService.seletedCourses(id);
    }

    @GetMapping("allCourses")
    public List<Course> allCourses(Long id){

        return courseService.allCourses();
    }

    @PostMapping("addCourse")
    public String addCourse(@RequestBody Course course){
        courseService.addCourse(course);
        return "added";
    }


}
