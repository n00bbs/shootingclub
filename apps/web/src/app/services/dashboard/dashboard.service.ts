import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { dashboard } from '@repo/types';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  private apiEndpoint = '/api/dashboard';

  getData() {
    return lastValueFrom(
      this.http.get<dashboard.getData.ResponsePayload>(
        `${this.apiEndpoint}/getData`,
      ),
    );
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [DashboardService],
})
export class DashboardServiceModule {}
