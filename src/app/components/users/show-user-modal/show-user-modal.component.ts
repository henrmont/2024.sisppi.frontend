import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-user-modal',
  standalone: true,
  imports: [],
  templateUrl: './show-user-modal.component.html',
  styleUrl: './show-user-modal.component.scss'
})
export class ShowUserModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
