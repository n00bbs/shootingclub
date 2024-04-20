import { members } from '@repo/types';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPageComponent {
  constructor() {}
  members: members.getAll.Member[] = [
    {
      id: '123',
      name: 'Hans',
      departments: [
        {
          id: '',
          name: 'Bogen',
          color: 'green',
        },
        {
          id: '',
          name: 'Feuerwaffen',
          color: 'red',
        },
      ],
    },
    {
      id: '456',
      name: 'Peter',
      departments: [
        {
          id: '',
          name: 'Feuerwaffen',
          color: 'red',
        },
        {
          id: '',
          name: 'Luftdruck',
          color: 'blue',
        },
        {
          id: '',
          name: 'Bogen',
          color: 'green',
        },
      ],
    },
  ];
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
  declarations: [MembersPageComponent],
  exports: [MembersPageComponent],
})
export class MembersPageModule {}
