import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { departments } from '@repo/types';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  private apiEndpoint = '/api/departments';

  getAll() {
    return lastValueFrom(
      this.http.get<departments.getAll.ResponsePayload>(
        `${this.apiEndpoint}/getAll`,
      ),
    );
  }

  getOne(id: string) {
    return lastValueFrom(
      this.http.get<departments.getOne.ResponsePayload>(
        `${this.apiEndpoint}/getOne/${id}`,
      ),
    );
  }

  updateDepartmentFee(id: string, fee: number) {
    return lastValueFrom(
      this.http.patch<departments.updateDepartmentFee.ResponsePayload>(
        `${this.apiEndpoint}/updateDepartmentFee/${id}`,
        { fee },
      ),
    );
  }
  updateDepartmentColor(id: string, color: string) {
    return lastValueFrom(
      this.http.patch<departments.updateDepartmentColor.ResponsePayload>(
        `${this.apiEndpoint}/updateDepartmentColor/${id}`,
        { color },
      ),
    );
  }

  createDepartment(name: string, fee: number, color: string) {
    return lastValueFrom(
      this.http.post<departments.createDepartment.ResponsePayload>(
        `${this.apiEndpoint}/createDepartment`,
        { name, fee, color },
      ),
    );
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [DepartmentsService],
})
export class DepartmentsServiceModule {}
