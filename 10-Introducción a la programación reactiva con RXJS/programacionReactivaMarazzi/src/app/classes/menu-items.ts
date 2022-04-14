import { Roles } from "./roles";

export class MenuItems {
    constructor(
        public id: number,
        public title: string,
        public icon: string,
        public route: string,
        public active: boolean = false,
    ) { }

    public static getMenuByRole(pIdRole: number): MenuItems[] {
        switch (pIdRole) {
            case 1: //admin
                return [
                    new MenuItems(1, 'Inicio', 'home', '/', true),
                    // new MenuItems(2, 'Usuarios', 'people', '/users', true),
                    new MenuItems(4, 'Cursos', 'book', '/courses', true),
                    new MenuItems(5, 'Estudiantes', 'people', '/students', true),
                    new MenuItems(6, 'Profesores', 'people', '/professors', true),
                    new MenuItems(7, 'Ayudantes', 'people', '/assistants', true),
                    new MenuItems(8, 'Mis Datos', 'info', '/profile', true),
                    new MenuItems(9, 'Salir', 'close', '/close', true),
                ];
                break;
            case 2: //profesor
                return [
                    new MenuItems(1, 'Inicio', 'home', '/', true),
                    //new MenuItems(2, 'Usuarios', 'people', '/users', true),
                    new MenuItems(4, 'Cursos', 'book', '/courses', true),
                    new MenuItems(5, 'Estudiantes', 'people', '/students', true),
                    new MenuItems(6, 'Profesores', 'people', '/professors', true),
                    new MenuItems(7, 'Ayudantes', 'people', '/assistants', true),
                    new MenuItems(8, 'Mis Datos', 'info', '/profile', true),
                    new MenuItems(9, 'Salir', 'close', '/close', true),
                ];
                break;

            case 3: //ayudante
                return [
                    new MenuItems(1, 'Inicio', 'home', '/', true),
                    //new MenuItems(2, 'Usuarios', 'people', '/users', true),
                    new MenuItems(4, 'Cursos', 'book', '/courses', true),
                    new MenuItems(5, 'Estudiantes', 'people', '/students', true),
                    //new MenuItems(6, 'Profesores', 'people', '/professors', true),
                    //new MenuItems(7, 'Ayudantes', 'people', '/assistants', true),
                    new MenuItems(8, 'Mis Datos', 'info', '/profile', true),
                    new MenuItems(9, 'Salir', 'close', '/close', true),
                ];
                break;
            case 4: //estudiante
                return [
                    new MenuItems(1, 'Inicio', 'home', '/', true),
                    new MenuItems(2, 'Usuarios', 'people', '/users', true),
                    new MenuItems(4, 'Cursos', 'book', '/courses', true),
                    new MenuItems(5, 'Estudiantes', 'people', '/students', true),
                    // new MenuItems(6, 'Profesores', 'people', '/professors', true),
                    // new MenuItems(7, 'Ayudantes', 'people', '/assistants', true),
                    new MenuItems(8, 'Mis Datos', 'info', '/profile', true),
                    new MenuItems(9, 'Salir', 'close', '/close', true),
                ];
                break;
            default:
                return [];
                break;
        }
    }
}


