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

  updateMember(id: string, payload: members.updateMember.RequestPayload) {
    return lastValueFrom(
      this.http.patch<members.updateMember.ResponsePayload>(
        `${this.apiEndpoint}/updateMember/${id}`,
        payload,
      ),
    );
  }

  createAttendance(
    userId: string,
    payload: members.createAttendance.RequestPayload,
  ) {
    return lastValueFrom(
      this.http.post<members.createAttendance.ResponsePayload>(
        `${this.apiEndpoint}/createAttendance/${userId}`,
        payload,
      ),
    );
  }

  deleteMember(id: string) {
    return lastValueFrom(
      this.http.delete<members.deleteMember.ResponsePayload>(
        `${this.apiEndpoint}/deleteMember/${id}`,
      ),
    );
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [MembersService],
})
export class MembersServiceModule {}
