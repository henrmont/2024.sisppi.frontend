import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-read-county-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
  ],
  templateUrl: './read-county-modal.component.html',
  styleUrl: './read-county-modal.component.scss'
})
export class ReadCountyModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
