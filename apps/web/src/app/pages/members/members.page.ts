import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
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
          name: 'Hurentreiber',
          color: 'fe36fs',
        },
        {
          id: '',
          name: 'Schützen',
          color: '',
        },
      ],
    },
  ];
}

@NgModule({
  imports: [CommonModule, MatListModule, MatIconModule, MatChipsModule],
  declarations: [MembersPageComponent],
  exports: [MembersPageComponent],
})
export class MembersPageModule {}
