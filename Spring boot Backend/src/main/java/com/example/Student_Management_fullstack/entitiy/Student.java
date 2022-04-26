package com.example.Student_Management_fullstack.entitiy;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long studentId;
    private String firstName;
    private String lastName;

    private String email;



    @ManyToMany(
            cascade = { CascadeType.MERGE  },
            fetch = FetchType.EAGER
    )
    @JoinTable(
            name = "student_course_map",
            joinColumns = @JoinColumn(
                    name = "student_id",
                    referencedColumnName = "studentId"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "course_id" ,
                    referencedColumnName = "courseId"
            )
    )
    private List<Course> courses;

    public void addCourse(Course course){
        courses.add(course);
    }

}
