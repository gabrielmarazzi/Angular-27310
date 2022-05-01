export class SharedFunctions {

    public static getRole(): number {
        let role: number = parseInt(sessionStorage.getItem("role")!)
        if (role == null) {
            role = 9999;
        }
        return role;
    }

    public static getId(): number {
        let id: number = parseInt(sessionStorage.getItem("id")!)
        if (id == null) {
            id = 0;
        }
        return id;
    }

}