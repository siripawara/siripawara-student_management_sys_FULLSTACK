package com.example.Student_Management_fullstack.service;

import com.example.Student_Management_fullstack.entitiy.Student;
import com.example.Student_Management_fullstack.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;


    @Override
    public void createStudentWithCourse(Student student) {
        studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
