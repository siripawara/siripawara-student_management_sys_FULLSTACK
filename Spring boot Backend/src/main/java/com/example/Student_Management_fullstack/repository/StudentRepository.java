package com.example.Student_Management_fullstack.repository;

import com.example.Student_Management_fullstack.entitiy.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
}
