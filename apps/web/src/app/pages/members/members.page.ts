import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { members } from '@repo/types';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPageComponent {
  constructor() {}
  members: members.getAll.Member[] = [
    {
      id: '',
      name: 'Hans',
      departments: [
        {
          id: '',
          name: 'Bogen',
          color: 'green',
        },
        {
          id: '',
          name: 'Schützen',
          color: 'red',
        },
      ],
    },
    {
      id: '',
      name: 'Peter',
      departments: [
        {
          id: '',
          name: 'Schützen',
          color: 'red',
        },
        {
          id: '',
          name: 'Speerwerfen',
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
  ],
  declarations: [MembersPageComponent],
  exports: [MembersPageComponent],
})
export class MembersPageModule {}
