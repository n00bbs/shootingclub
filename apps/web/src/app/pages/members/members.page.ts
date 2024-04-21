import { members } from '@repo/types';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MembersService, MembersServiceModule } from '../../services/members';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPageComponent implements OnInit {
  constructor(private membersService: MembersService) {}
  members?: members.getAll.Member[];

  ngOnInit(): void {
    this.membersService.getAll().then((members) => {
      this.members = members.data;
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
  ],
  declarations: [MembersPageComponent],
  exports: [MembersPageComponent],
})
export class MembersPageModule {}
