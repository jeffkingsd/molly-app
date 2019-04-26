export class User {
    username: string;
    password: string;
    userId: number;
    name: string;

    constructor(username= '', password= '', userId= 0, name= '') {
        this.username = username;
        this.password = password;
        this.userId = userId;
        this.name = name;
    }
}