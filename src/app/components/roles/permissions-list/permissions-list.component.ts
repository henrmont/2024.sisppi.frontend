import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoleService } from '../../../services/role.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsersPermissionModalComponent } from '../users-permission-modal/users-permission-modal.component';
import { RolesPermissionModalComponent } from '../roles-permission-modal/roles-permission-modal.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

const permissionChannel = new BroadcastChannel('permission-channel');

@Component({
  selector: 'app-permissions-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.scss'
})
export class PermissionsListComponent implements OnInit {

  dialog = inject(MatDialog)
  roleService = inject(RoleService)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any

  ngOnInit(): void {
    permissionChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.roleService.getPermissions().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.roleService.getPermissions().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  usersPermission(info: any) {
    this.dialog.open(UsersPermissionModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '35%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  rolesPermission(info: any) {
    this.dialog.open(RolesPermissionModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

}
