export type ROLE = "admin"| "hr"

export interface IUser {
  email: string;
  isActivated?: boolean;
  _id?: string;
  firstName: string;
  lastName: string;
  role?: ROLE;
}
