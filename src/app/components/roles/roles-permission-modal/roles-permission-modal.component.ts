import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-roles-permission-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatChipsModule,
  ],
  templateUrl: './roles-permission-modal.component.html',
  styleUrl: './roles-permission-modal.component.scss'
})
export class RolesPermissionModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  dialogRef = inject(MatDialog)

  ngOnInit(): void {
    console.log(this.data)
  }

}
