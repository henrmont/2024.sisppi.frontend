import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { RolesListComponent } from '../../components/roles/roles-list/roles-list.component';
import { PermissionsListComponent } from '../../components/roles/permissions-list/permissions-list.component';
import { CreateRoleModalComponent } from '../../components/roles/create-role-modal/create-role-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roles-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    RolesListComponent,
    PermissionsListComponent,
  ],
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.scss'
})
export class RolesPageComponent {

  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  breadcrumb = [
    {name: 'Regras e permissões'},
  ]

  createRole() {
    this.dialog.open(CreateRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '40%',
    })
  }

}
