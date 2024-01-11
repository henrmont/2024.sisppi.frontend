import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../../services/user.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-role-user-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './role-user-modal.component.html',
  styleUrl: './role-user-modal.component.scss'
})
export class RoleUserModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  dialogRef = inject(MatDialog)
  userService = inject(UserService)
  perm: any

  ngOnInit(): void {
    console.log(this.data)
  }

}
