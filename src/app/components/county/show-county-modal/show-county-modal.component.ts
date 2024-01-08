import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-show-county-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
  ],
  templateUrl: './show-county-modal.component.html',
  styleUrl: './show-county-modal.component.scss'
})
export class ShowCountyModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
