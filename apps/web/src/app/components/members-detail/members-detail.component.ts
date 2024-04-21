import { members } from '@repo/types';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { OnInit } from '@angular/core';
import { MembersService, MembersServiceModule } from '../../services/members';

@Component({
  selector: 'app-members-details',
  templateUrl: 'members-detail.component.html',
  styleUrls: ['members-detail.component.scss'],
})
export class MembersDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService,
    private router: Router,
  ) {}

  private memberId?: string;

  loading = true;
  member?: members.getOne.ResponsePayload;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.memberId = params.get('id') ?? undefined;
      this.loadMemberDetails();
    });
  }

  loadMemberDetails() {
    if (!this.memberId) {
      throw new Error('No member ID provided');
    }
    this.membersService
      .getOne(this.memberId)
      .then((member) => {
        this.member = member;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  onDepartmentChange(id: string, join: boolean) {
    if (this.loading) return;
    this.loading = true;
    if (!this.memberId) {
      throw new Error('No member ID provided');
    }
    this.membersService
      .createUserDepartmentChange(this.memberId, {
        departmentId: id,
        type: join ? 'join' : 'leave',
      })
      .then(() => {
        // this.router.navigate(['/']).then(() => {
        //   this.router.navigate(['/members', this.memberId]);
        // });
      })
      .catch(() => {
        this.loading = false;
      });
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MembersServiceModule,
    MatGridListModule,
    MatSelectModule,
  ],
  declarations: [MembersDetailComponent],
  exports: [MembersDetailComponent],
})
export class MemberDetailsComponentModule {}
