export class UserInfo {
    public username: string;
    public password: string;
    
    constructor(info: any) {
        this.username = info.password;
        this.password = info.password;
    }
}