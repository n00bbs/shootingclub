import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { userAuth } from '@repo/types';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.loadCredentialsFromStorage();
  }

  private apiEndpoint = '/api/auth';

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
    const query: userAuth.login.QueryParams = { email: username, password };

    await lastValueFrom(
      this.http.get<userAuth.login.ResponsePayload>(
        `${this.apiEndpoint}/login`,
        {
          params: query as unknown as Record<string, string>,
        },
      ),
    );

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
    birthdate: Date,
  ) {
    const payload: userAuth.register.RequestPayload = {
      username,
      password,
      first_name,
      last_name,
      birthdate,
    };
    const result = await lastValueFrom(
      this.http.post<userAuth.register.ResponsePayload>(
        `${this.apiEndpoint}/register`,
        payload,
      ),
    );
    this.setCredentials({ username, password });
    this.roles = result.roles;
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
