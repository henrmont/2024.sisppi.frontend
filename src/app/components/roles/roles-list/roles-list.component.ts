import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateRoleModalComponent } from '../create-role-modal/create-role-modal.component';
import { RoleService } from '../../../services/role.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { DeleteRoleModalComponent } from '../delete-role-modal/delete-role-modal.component';
import { UsersRoleModalComponent } from '../users-role-modal/users-role-modal.component';
import { UpdateRoleModalComponent } from '../update-role-modal/update-role-modal.component';
import { MatBadgeModule } from '@angular/material/badge';

const roleChannel = new BroadcastChannel('role-channel');

@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.scss'
})
export class RolesListComponent implements OnInit {

  dialog = inject(MatDialog)
  roleService = inject(RoleService)

  roles: any

  ngOnInit(): void {
    roleChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.roleService.getRoles().subscribe({
          next: (response: any) => {
            this.roles = response.data
          }
        })
      }
    }
    this.roleService.getRoles().subscribe({
      next: (response: any) => {
        this.roles = response.data
      }
    })
  }



  deleteRole(info: any) {
    this.dialog.open(DeleteRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        info: info
      }
    })
  }

  usersRole(info: any) {
    this.dialog.open(UsersRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  updateRole(info: any) {
    this.dialog.open(UpdateRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '40%',
      data: {
        info: info
      }
    })
  }

}
