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

    createCourseWithParams(id: number, name: string, description: string, difficulty: string, startDate: Date, endDate: Date, image: string, enabled: boolean): Courses {
        return new Courses(
            id,
            name,
            description,
            difficulty,
            startDate,
            endDate,
            image,
            enabled
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
            this.createCourseWithParams(1, "Course 1", "Description 1", "Difficulty 1", new Date(), new Date(), "./assets/img/avatars/1.jpg", true),
            this.createCourseWithParams(2, "Course 2", "Description 2", "Difficulty 2", new Date(), new Date(), "./assets/img/avatars/2.jpg", true),
            this.createCourseWithParams(3, "Course 3", "Description 3", "Difficulty 3", new Date(), new Date(), "./assets/img/avatars/3.jpg", true),
            this.createCourseWithParams(4, "Course 4", "Description 4", "Difficulty 4", new Date(), new Date(), "./assets/img/avatars/4.jpg", true),
            this.createCourseWithParams(5, "Course 5", "Description 5", "Difficulty 5", new Date(), new Date(), "./assets/img/avatars/5.jpg", true),
            this.createCourseWithParams(6, "Course 6", "Description 6", "Difficulty 6", new Date(), new Date(), "./assets/img/avatars/6.jpg", true),
            this.createCourseWithParams(7, "Course 7", "Description 7", "Difficulty 7", new Date(), new Date(), "./assets/img/avatars/7.jpg", true),
            this.createCourseWithParams(8, "Course 8", "Description 8", "Difficulty 8", new Date(), new Date(), "./assets/img/avatars/8.jpg", true),

        ]

    }



}
