package com.example.Student_Management_fullstack.service;

import com.example.Student_Management_fullstack.entitiy.Course;
import com.example.Student_Management_fullstack.repository.CourseRepository;
import com.example.Student_Management_fullstack.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> allCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course seletedCourses(Long id) {
        return courseRepository.findById(id).get();
    }

    @Override
    public void addCourse(Course course) {
        courseRepository.save(course);
    }
}
