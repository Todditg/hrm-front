import { IUser } from "../models/IUser.ts";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../service/AuthService.ts";
import { UserService } from "../service/UserService.ts";
import { VacanciesService } from "../service/VacanciesService.ts";
import { IVacancies } from "../models/IVacancies.ts";

export class CommonStore {
  users= [] as IUser[];
  user = {} as IUser;
  vacancies = [] as IVacancies[];
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean) {
    this.isAuth = value;
  }

  setAllUsers(users: IUser[]) {
    this.users = users;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setVacancies(vacancies: IVacancies[]) {
    this.vacancies = vacancies;
  }

  public async getUser(id) {
    try {
      await UserService.getUser(id).then((res) => this.setUser(res.data.user));
    } catch (err) {
      console.log(err);
    }
  }

  public async getAllUsers() {
    try {
      const res = await UserService.getUsers();
      this.setAllUsers(res.data);
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
    } catch (e) {
      console.error(e);
    }
  }

  // public async checkAuth {
  //     this.setLoading(true);
  //     try {
  //         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
  //         console.log(response);
  //         localStorage.setItem('token', response.data.accessToken);
  //         this.setAuth(true);
  //         this.setUser(response.data.user);
  //     } catch (e) {
  //         console.log(e.response?.data?.message);
  //     } finally {
  //         this.setLoading(false);
  //     }
  // }

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

  //БЛОК РАБОТЫ С ВАКАНСИЯМИ

  public async getVacancies() {
    try {
      await VacanciesService.getVacancies().then((res) =>
        this.setVacancies(res.data)
      );
    } catch (e) {
      console.error(e);
    }
  }

  public async createVacancy(vacancy: IVacancies) {
    try {
      await VacanciesService.createVacancy(vacancy).then((res) => {
        this.vacancies.push(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }

  public async updateVacancy(id: string | undefined, formData: IVacancies) {
    try {
      await VacanciesService.updateVacancy(id, formData).then((res) => {
        this.vacancies = this.vacancies.map((vacancy) =>
          vacancy._id === id ? res.data : vacancy
        );
      });
    } catch (e) {
      console.error(e);
    }
  }
}
