import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShowUserModalComponent } from '../show-user-modal/show-user-modal.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import { RoleUserModalComponent } from '../role-user-modal/role-user-modal.component';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    ShowUserModalComponent,
    EditUserModalComponent,
    RoleUserModalComponent,
    DeleteUserModalComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {

  userService = inject(UserService)
  dialog = inject(MatDialog)

  displayedColumns: string[] = ['name', 'cell_phone', 'email', 'is_valid', 'actions'];
  dataSource: any

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showUser(id: number) {
    this.dialog.open(ShowUserModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '400px',
      height: '200px',
      data: {
        id: id
      }
    })
  }

  editUser(id: number) {
    this.dialog.open(EditUserModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '400px',
      height: '200px',
      data: {
        id: id
      }
    })
  }

  roleUser(id: number) {
    this.dialog.open(RoleUserModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '400px',
      height: '200px',
      data: {
        id: id
      }
    })
  }

  deleteUser(id: number) {
    this.dialog.open(DeleteUserModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '400px',
      height: '200px',
      data: {
        id: id
      }
    })
  }

}
