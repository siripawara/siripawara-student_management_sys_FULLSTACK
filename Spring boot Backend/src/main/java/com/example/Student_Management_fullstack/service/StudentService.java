package com.example.Student_Management_fullstack.service;

import com.example.Student_Management_fullstack.entitiy.Student;

import java.util.List;

public interface StudentService {
    void createStudentWithCourse(Student student);

    List<Student> getAllStudents();
}
