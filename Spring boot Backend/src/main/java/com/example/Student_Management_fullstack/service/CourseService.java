package com.example.Student_Management_fullstack.service;

import com.example.Student_Management_fullstack.entitiy.Course;

import java.util.List;

public interface CourseService {
    List<Course> allCourses();


    Course seletedCourses(Long id);

    void addCourse(Course course);
}
