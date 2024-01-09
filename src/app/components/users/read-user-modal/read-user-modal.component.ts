import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-read-user-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    NgxMaskPipe,
  ],
  templateUrl: './read-user-modal.component.html',
  styleUrl: './read-user-modal.component.scss'
})
export class ReadUserModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
