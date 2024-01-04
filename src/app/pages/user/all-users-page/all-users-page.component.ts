import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { UsersListComponent } from '../../../components/users/users-list/users-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserModalComponent } from '../../../components/users/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-all-users-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    UsersListComponent,
    AddUserModalComponent,
  ],
  templateUrl: './all-users-page.component.html',
  styleUrl: './all-users-page.component.scss'
})

export class AllUsersPageComponent {

  dialog = inject(MatDialog)

  breadcrumb = [
    {name: 'Usuários'},
    {name: 'Lista de usuários'}
  ]

  addUser() {
    this.dialog.open(AddUserModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '400px',
      height: '200px',
    })
  }

}
