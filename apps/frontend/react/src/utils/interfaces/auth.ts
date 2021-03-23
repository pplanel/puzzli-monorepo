interface IProfile {
  fullname: string;
  username: string;
  id: number;
}

export interface IAuthState {
  token?: string | null;
  profile?: IProfile;
}

interface ISignInCredentials {
  username: string;
  password: string;
}

export interface IAuthContext {
  signIn(credentials: ISignInCredentials): Promise<boolean>;
  signOut(): void;
  data: IAuthState;
  checkLogin(): Promise<boolean>;
}
