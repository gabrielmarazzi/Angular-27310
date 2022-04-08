export class listadoMenu {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) { }
}

export const menuList = [
    new listadoMenu('Chemistry', 'chemistry', 'chemistry class material', 'science'),
    new listadoMenu('Biology', 'biology', 'biology class material', 'biotech'),
    new listadoMenu('Mathematics', 'mathematics', 'mathematics class material', 'calculate'),
    new listadoMenu('Physics', 'physics', 'physics class material', 'flash_on')
];