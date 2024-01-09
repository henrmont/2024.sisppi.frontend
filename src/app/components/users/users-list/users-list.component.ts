import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RoleUserModalComponent } from '../role-user-modal/role-user-modal.component';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdateUserModalComponent } from '../update-user-modal/update-user-modal.component';
import { ReadUserModalComponent } from '../read-user-modal/read-user-modal.component';

const listUserChannel = new BroadcastChannel('list-user-channel');

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
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {

  userService = inject(UserService)
  dialog = inject(MatDialog)

  displayedColumns: string[] = ['name', 'email', 'county', 'is_valid', 'actions'];
  dataSource: any

  ngOnInit(): void {
    listUserChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.userService.getUsers().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
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

  readUser(info: any) {
    this.dialog.open(ReadUserModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '35%',
      data: {
        info: info
      }
    })
  }

  updateUser(info: any) {
    this.dialog.open(UpdateUserModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '45%',
      height: '40%',
      data: {
        info: info
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

  deleteUser(info: any) {
    this.dialog.open(DeleteUserModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        info: info
      }
    })
  }

}
