import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserModalComponent } from '../../components/users/add-user-modal/add-user-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    UsersListComponent,
    AddUserModalComponent,
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

  dialog = inject(MatDialog)

  breadcrumb = [
    {name: 'Usuários'},
    {name: 'Lista de usuários'}
  ]

  addUser() {
    this.dialog.open(AddUserModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '45%',
      height: '45%',
    })
  }

}
