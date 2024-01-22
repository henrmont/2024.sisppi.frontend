import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GroupsListComponent } from '../../components/groups/groups-list/groups-list.component';
import { SubgroupsListComponent } from '../../components/subgroups/subgroups-list/subgroups-list.component';
import { OrganizationFormsListComponent } from '../../components/organization-forms/organization-forms-list/organization-forms-list.component';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-groups-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    GroupsListComponent,
    SubgroupsListComponent,
    OrganizationFormsListComponent,
  ],
  templateUrl: './groups-page.component.html',
  styleUrl: './groups-page.component.scss'
})
export class GroupsPageComponent {

  @Input() link: any

}
