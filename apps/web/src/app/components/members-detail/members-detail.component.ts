import { members } from '@repo/types';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-members-details',
  templateUrl: 'members-detail.component.html',
  styleUrls: ['members-detail.component.scss'],
})
export class MembersDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  private memberId?: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.memberId = params.get('id') ?? undefined;
      this.loadMemberDetails();
    });
  }

  loadMemberDetails() {
    console.log('Loading member details for member ID:', this.memberId);
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
  ],
  declarations: [MembersDetailComponent],
  exports: [MembersDetailComponent],
})
export class MemberDetailsComponentModule {}
