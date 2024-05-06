import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { members } from '@repo/types';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpClient) {}

  private apiEndpoint = '/api/members';

  getAll() {
    return lastValueFrom(
      this.http.get<members.getAll.ResponsePayload>(
        `${this.apiEndpoint}/getAll`,
      ),
    );
  }

  getOne(id: string) {
    return lastValueFrom(
      this.http.get<members.getOne.ResponsePayload>(
        `${this.apiEndpoint}/getOne/${id}`,
      ),
    );
  }

  createUserDepartmentChange(
    userId: string,
    payload: members.createUserDepartmentChange.RequestPayload,
  ) {
    return lastValueFrom(
      this.http.post<members.createUserDepartmentChange.ResponsePayload>(
        `${this.apiEndpoint}/createUserDepartmentChange/${userId}`,
        payload,
      ),
    );
  }

  createMember(payload: members.createMember.RequestPayload) {
    return lastValueFrom(
      this.http.post<members.createMember.ResponsePayload>(
        `${this.apiEndpoint}/createMember`,
        payload,
      ),
    );
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [MembersService],
})
export class MembersServiceModule {}
