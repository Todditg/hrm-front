import { IUser } from "../models/User/IUser.ts";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { AuthService } from "../service/AuthService.ts";
import { UserService } from "../service/UserService.ts";

export class CommonStore {
  user = {} as IUser;
  isAuth = false;
  static users = {} as IUser[];

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this.isAuth = value;
  }

  setUser(user: IUser) {
    this.user = user;
  }


  public async getUser(id) {
    try {
      const response = await UserService.getUser(id)
      this.setUser(response.data.user)
    } catch (err) {
      console.log(err);
    }
  }

  public async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userID", response.data.id);
      this.setIsAuth(true);
      // this.setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  public async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        firstName,
        lastName
      );
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  public async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.error(e);
    }
  }
}
