import { Roles } from "./roles";

export class MenuItems {
    constructor(
        public id: number,
        public title: string,
        public icon: string,
        public route: string,
        public active: boolean = false,
    ) { }


    static menuAdmin: MenuItems[] = [
        new MenuItems(1, 'Inicio', 'home', '/home', true),
        new MenuItems(4, 'Cursos', 'book', '/courses', true),
        new MenuItems(5, 'Estudiantes', 'people', '/students', true),
        new MenuItems(6, 'Profesores', 'school', '/teachers', true),
        new MenuItems(7, 'Ayudantes', 'cast_for_education', '/assistants', true),
        new MenuItems(8, 'Incripciones', 'assignment', '/inscriptions', true),
    ]

    static menuTeacher: MenuItems[] = [
        new MenuItems(1, 'Inicio', 'home', '/home', true),
        new MenuItems(5, 'Estudiantes', 'people', '/students', true),
        new MenuItems(6, 'Profesores', 'school', '/teachers', true),
        new MenuItems(7, 'Ayudantes', 'cast_for_education', '/assistants', true),
        new MenuItems(8, 'Incripciones', 'assignment', '/inscriptions', true),
    ]

    static menuAssistant: MenuItems[] = [
        new MenuItems(1, 'Inicio', 'home', '/home', true),
        new MenuItems(4, 'Cursos', 'book', '/courses', true),
        new MenuItems(5, 'Estudiantes', 'people', '/students', true),
        new MenuItems(7, 'Ayudantes', 'cast_for_education', '/assistants', true),
    ]

    static menuStudent: MenuItems[] = [
        new MenuItems(1, 'Inicio', 'home', '/home', true),
        new MenuItems(4, 'Cursos', 'book', '/courses', true),
    ]

    public static hasItemRole(pIdMenuItem: number, pIdRole: number): boolean {
        if (pIdRole == 1) {
            return true; //tiene permiso a todo
        } else {
            if (pIdRole == 2) {
                let menuItem = this.menuTeacher.find(x => x.id == pIdMenuItem);
                if (menuItem != null) {
                    return true;
                } else {
                    return false;
                }

            } else {
                if (pIdRole == 3) {
                    let menuItem = this.menuAssistant.find(x => x.id == pIdMenuItem);
                    if (menuItem != null) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (pIdRole == 4) {
                        let menuItem = this.menuStudent.find(x => x.id == pIdMenuItem);
                        if (menuItem != null) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
        }
    }


    public static getMenuByRole(pIdRole: number): MenuItems[] {
        // return [
        //     new MenuItems(1, 'Inicio', 'home', '/home', true),
        //     new MenuItems(4, 'Cursos', 'book', '/courses', true),
        //     new MenuItems(5, 'Estudiantes', 'people', '/students', true),
        //     new MenuItems(6, 'Profesores', 'school', '/teachers', true),
        //     new MenuItems(7, 'Ayudantes', 'cast_for_education', '/assistants', true),
        //     new MenuItems(8, 'Incripciones', 'assignment', '/inscriptions', true),

        // ]
        switch (pIdRole) {
            case 1: //admin
                return this.menuAdmin;
                break;
            case 2: //profesor
                return this.menuTeacher;
                break;

            case 3: //ayudante
                return this.menuAssistant;
                break;
            case 4: //estudiante
                return this.menuStudent;
                break;
            default:
                return [];
                break;
        }
    }
}


