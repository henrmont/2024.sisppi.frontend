import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-show-user-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    NgxMaskPipe,
  ],
  templateUrl: './show-user-modal.component.html',
  styleUrl: './show-user-modal.component.scss'
})
export class ShowUserModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
