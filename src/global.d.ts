export interface IUser {
  id?: string;
  email?: string;
  verified_email?: boolean;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
}

export type TUserStore = {
  user: IUser;
  saveUser: (userData: IUser) => void;
  removeUser: () => void;
};
