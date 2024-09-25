import { publicInterceptor } from "../../config/AxiosConfig";

export default class AuthService {
    publicIntercepter;
    constructor() {
        this.publicIntercepter = publicInterceptor
    }

    async userLogin(loginData) {

        return await this.publicIntercepter.post("/login", loginData);
    }

    async userProfile() {

        return await this.publicIntercepter.get("/user/profiles");
    }
}