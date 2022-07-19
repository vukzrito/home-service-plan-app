// =============================
// Email: rito@entuit.co.za
// www.entuit.co.za
// =============================

export class UserLogin {
    constructor(userName?: string, password?: string, rememberMe?: boolean) {
        this.userName = userName;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    userName: string;
    password: string;
    rememberMe: boolean;
}
