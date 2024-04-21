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
}

@NgModule({
  imports: [HttpClientModule],
  providers: [MembersService],
})
export class MembersServiceModule {}
