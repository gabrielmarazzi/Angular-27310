import { Assistants } from "./assistants";
import { Courses } from "./courses";
import { Grades } from "./grades";
import { Persons } from "./persons";
import { Roles } from "./roles";
import { Students } from "./students";
import { Teachers } from "./teachers";

//Generates fakes data for the application
export class FakeData {

    createPersonWithParams(id: number, name: string, lastName: string, email: string, password: string, birthDay: Date, role: Roles, image: string, enabled: boolean): Persons {
        return new Persons(
            id,
            name,
            lastName,
            email,
            password,
            birthDay,
            role,
            image,
            enabled
        );
    }

    createStudentWithParams(id: number, legajo: string, person: Persons, courses: Courses[], grades: Grades[], average: number): Students {
        return new Students(
            id,
            legajo,
            person,
            courses,
            grades,
        );
    }

    createTeacherWithParams(id: number, legajo: string, person: Persons, courses: Courses[]): Teachers {
        return new Teachers(
            id,
            legajo,
            person,
            courses
        );
    }

    createAssistantWithParams(id: number, legajo: string, person: Persons, courses: Courses[]): Assistants {
        return new Assistants(
            id,
            legajo,
            person,
            courses
        );
    }

    createCourseWithParams(id: number, camada: string, name: string, description: string, difficulty: string, startDate: Date, endDate: Date, image: string, enabled: boolean): Courses {
        return new Courses(
            id,
            camada,
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




    // initializeFakeStudentData(): Students {


    //     // let student1: Students = this.createStudentWithParams(1, "legajo 1", this.createPersonWithParams(1, "name", "lastName", "email", "password", Roles.getRandomRole(), "./assets/img/avatars/1.jpg", true), [], [], 0);


    //     // let student: Students = this.createStudent();
    //     // let teacher: Teachers = this.createTeacher();
    //     // let assistant1: Assistants = this.createAssistant();
    //     // let assistant2: Assistants = this.createAssistant();
    //     // let course: Courses = this.createCourse();
    //     // let course2: Courses = this.createCourse();

    //     // this.addCourseToStudent(student, course);
    //     // this.addCourseToStudent(student, course2);
    //     // this.addCourseToTeacher(teacher, course);
    //     // this.addCourseToAssistant(assistant1, course);
    //     // this.addCourseToAssistant(assistant2, course);

    //     // this.addGradeToStudent(student, course, 10);
    //     // this.addGradeToStudent(student, course2, 8);
    //     let student: Students = this.createStudentWithParams(1, "legajo 1", this.createPersonWithParams(1, "name", "lastName", "email", "password", Roles.getRandomRole(), "./assets/img/avatars/1.jpg", true), [], [], 0);
    //     return student;

    // }

    initializeFakeCoursesData(): Courses[] {

        return [
            this.createCourseWithParams(1, "2000", "Course 1", "Description 1", "Difficulty 1", new Date(), new Date(), "./assets/img/avatars/1.jpg", true),
            this.createCourseWithParams(2, "2000", "Course 2", "Description 2", "Difficulty 2", new Date(), new Date(), "./assets/img/avatars/2.jpg", true),
            this.createCourseWithParams(3, "2000", "Course 3", "Description 3", "Difficulty 3", new Date(), new Date(), "./assets/img/avatars/3.jpg", true),
            this.createCourseWithParams(4, "2000", "Course 4", "Description 4", "Difficulty 4", new Date(), new Date(), "./assets/img/avatars/4.jpg", true),
            this.createCourseWithParams(5, "2000", "Course 5", "Description 5", "Difficulty 5", new Date(), new Date(), "./assets/img/avatars/5.jpg", true),
            this.createCourseWithParams(6, "2000", "Course 6", "Description 6", "Difficulty 6", new Date(), new Date(), "./assets/img/avatars/6.jpg", true),
            this.createCourseWithParams(7, "2000", "Course 7", "Description 7", "Difficulty 7", new Date(), new Date(), "./assets/img/avatars/7.jpg", true),
            this.createCourseWithParams(8, "2000", "Course 8", "Description 8", "Difficulty 8", new Date(), new Date(), "./assets/img/avatars/8.jpg", true),

        ]

    }

    randomDate() {
        let start = new Date(1980, 0, 1)
        let end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    initializeFakeStudentsData(): Students[] {
        let person1 = this.createPersonWithParams(1, "Gabriel", "Marazzi", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/1.jpg", true);
        let person2 = this.createPersonWithParams(2, "Joselito", "Fernandez", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/2.jpg", true);
        let person3 = this.createPersonWithParams(3, "Gustavo", "Ramirez", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/3.jpg", true);
        let person4 = this.createPersonWithParams(4, "Maria Jose", "Zuasnabal", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/4.jpg", true);
        return [
            this.createStudentWithParams(1, "1", person1, [], [], 0),
            this.createStudentWithParams(2, "2", person2, [], [], 0),
            this.createStudentWithParams(3, "3", person3, [], [], 0),
            this.createStudentWithParams(4, "4", person4, [], [], 0),


        ]
    }

    initializeFakeStudentsWithCoursesAndGradesData(): Students[] {
        let person1 = this.createPersonWithParams(1, "Gabriel", "Marazzi", "correo@correo.com", "password", this.randomDate(), Roles.getAdminRole(), "./assets/img/avatars/1.jpg", true);
        let person2 = this.createPersonWithParams(2, "Joselito", "Fernandez", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/2.jpg", true);
        let person3 = this.createPersonWithParams(3, "Gustavo", "Ramirez", "correo@correo.com", "password", this.randomDate(), Roles.getRandomRole(), "./assets/img/avatars/3.jpg", true);
        let person4 = this.createPersonWithParams(4, "Maria Jose", "Zuasnabal", "correo@correo.com", "password", this.randomDate(), Roles.getStudentRole(), "./assets/img/avatars/4.jpg", true);

        let course1 = this.createCourseWithParams(1, "2000", "Course 1", "Description 1", "Difficulty 1", new Date(), new Date(), "./assets/img/avatars/1.jpg", true);
        let course2 = this.createCourseWithParams(2, "2000", "Course 2", "Description 2", "Difficulty 2", new Date(), new Date(), "./assets/img/avatars/2.jpg", true);
        let course3 = this.createCourseWithParams(3, "2000", "Course 3", "Description 3", "Difficulty 3", new Date(), new Date(), "./assets/img/avatars/3.jpg", true);
        let course4 = this.createCourseWithParams(4, "2000", "Course 4", "Description 4", "Difficulty 4", new Date(), new Date(), "./assets/img/avatars/4.jpg", true);
        let course5 = this.createCourseWithParams(5, "2000", "Course 5", "Description 5", "Difficulty 5", new Date(), new Date(), "./assets/img/avatars/5.jpg", true);


        let grade1 = new Grades(1, 1, 10, new Date(), "grade 1");
        let grade2 = new Grades(2, 2, 8, new Date(), "grade 2");
        let grade3 = new Grades(3, 3, 9, new Date(), "grade 3");
        let grade4 = new Grades(4, 4, 7, new Date(), "grade 4");
        let grade5 = new Grades(5, 5, 6, new Date(), "grade 5");


        return [
            this.createStudentWithParams(1, "1", person1, [course1, course2], [grade1, grade2], 0),
            this.createStudentWithParams(2, "2", person2, [course3, course4], [grade3, grade4], 0),
            this.createStudentWithParams(3, "3", person3, [course5], [grade5], 0),
            this.createStudentWithParams(4, "4", person4, [], [], 0)
        ]
    }

}
