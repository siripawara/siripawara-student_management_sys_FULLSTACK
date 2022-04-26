package com.example.Student_Management_fullstack.repository;

import com.example.Student_Management_fullstack.entitiy.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
}
