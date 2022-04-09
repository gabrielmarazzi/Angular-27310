import { Assistants } from "./assistants";
import { Courses } from "./courses";
import { Grades } from "./grades";
import { Persons } from "./persons";
import { Roles } from "./roles";
import { Students } from "./students";
import { Teachers } from "./teachers";

//Generates fakes data for the application
export class FakeData {

    createPerson(): Persons {
        return new Persons(
            Math.floor(Math.random() * 100),
            "name",
            "lastName",
            "email",
            "password",
            Roles.getRandomRole(),
            "./assets/img/avatars/2.jpg",
            true
        );
    }

    createStudent(): Students {
        return new Students(
            Math.floor(Math.random() * 100),
            "legajo",
            this.createPerson(),
            [],
            [],
            0,
        );
    }

    createTeacher(): Teachers {
        return new Teachers(
            Math.floor(Math.random() * 100),
            "legajo",
            this.createPerson(),
            [],
        );
    }

    createAssistant(): Assistants {
        return new Assistants(
            Math.floor(Math.random() * 100),
            "legajo",
            this.createPerson(),
            [],
        );
    }
    createCourse(): Courses {
        return new Courses(
            Math.floor(Math.random() * 100),
            "name",
            "description",
            "difficulty",
            new Date(),
            new Date(),
            "./assets/img/avatars/1.jpg",
            true
        );
    }

    addCourseToStudent(student: Students, course: Courses): Students {
        student.courses.push(course);
        return student;
    }

    addCourseToTeacher(teacher: Teachers, course: Courses): Teachers {
        teacher.courses.push(course);
        return teacher;
    }

    addCourseToAssistant(assistant: Assistants, course: Courses): Assistants {
        assistant.courses.push(course);
        return assistant;
    }

    addGradeToStudent(student: Students, course: Courses, grade: number): Students {
        student.grades.push(new Grades(course.id, grade, new Date()));
        return student;
    }




    initializeFakeStudentData(): Students {

        let student: Students = this.createStudent();
        let teacher: Teachers = this.createTeacher();
        let assistant1: Assistants = this.createAssistant();
        let assistant2: Assistants = this.createAssistant();
        let course: Courses = this.createCourse();
        let course2: Courses = this.createCourse();

        this.addCourseToStudent(student, course);
        this.addCourseToStudent(student, course2);
        this.addCourseToTeacher(teacher, course);
        this.addCourseToAssistant(assistant1, course);
        this.addCourseToAssistant(assistant2, course);

        this.addGradeToStudent(student, course, 10);
        this.addGradeToStudent(student, course2, 8);

        return student;

    }

    initializeFakeCoursesData(): Courses[] {

        return [
            this.createCourse(),
            this.createCourse(),
            this.createCourse(),
            this.createCourse(),
        ]

    }


}
