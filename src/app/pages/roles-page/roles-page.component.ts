import { Component, Input, inject } from '@angular/core';
import { RolesListComponent } from '../../components/roles/roles-list/roles-list.component';
import { PermissionsListComponent } from '../../components/roles/permissions-list/permissions-list.component';
import { CreateRoleModalComponent } from '../../components/roles/create-role-modal/create-role-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-roles-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    RolesListComponent,
    PermissionsListComponent,
  ],
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.scss'
})
export class RolesPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createRole() {
    this.dialog.open(CreateRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
    })
  }

}
