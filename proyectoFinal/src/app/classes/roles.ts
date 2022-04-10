export class Roles {
    constructor(
        public id: number,
        public name: string,
        public active: boolean = false
    ) { }


    public static getRoles(): Roles[] {
        return [
            new Roles(1, 'Admin'),
            new Roles(2, 'Profesor'),
            new Roles(3, 'Ayudante'),
            new Roles(4, 'Estudiante'),

        ];
    }

    public static getStudentRole(): Roles {
        return new Roles(4, 'Estudiante');
    }

    public static getAdminRole(): Roles {
        return new Roles(1, 'Admin');
    }

    public static getRandomRole(): Roles {
        let roles = Roles.getRoles();
        return roles[Math.floor(Math.random() * roles.length)];
    }


}
