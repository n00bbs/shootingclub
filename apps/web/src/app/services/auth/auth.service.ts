import { Injectable, NgModule } from '@angular/core';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    this.loadCredentialsFromStorage();
  }

  private credentials?: Credentials;
  private roles: string[] = [];

  private setCredentials(credentials?: Credentials) {
    this.credentials = credentials;
    if (credentials) {
      window.localStorage.setItem('credentials', JSON.stringify(credentials));
    } else {
      window.localStorage.removeItem('credentials');
    }
  }

  /**
   *
   * @returns true if credentials could be loaded from storage, false otherwise
   */
  loadCredentialsFromStorage() {
    const credentials = window.localStorage.getItem('credentials');
    if (credentials) {
      this.credentials = JSON.parse(credentials);
      return true;
    }
    return false;
  }

  credentialsAreSet() {
    return !!this.credentials;
  }

  getRoles() {
    return this.roles.map((role) => role);
  }

  async login(username: string, password: string) {
    // TODO: Implement login
    this.setCredentials({ username, password });
    if (username === 'admin') {
      this.roles = ['admin', 'user'];
    } else {
      this.roles = ['user'];
    }
  }

  async register(
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    birthdate: string,
  ) {
    console.log(
      'Registering user',
      username,
      password,
      first_name,
      last_name,
      birthdate,
    );
    this.roles = ['user'];
  }

  logout() {
    this.setCredentials(undefined);
  }

  getCredentials() {
    if (!this.credentials) return undefined;
    return {
      ...this.credentials,
    };
  }
}

@NgModule({
  providers: [AuthService],
})
export class AuthModule {}
