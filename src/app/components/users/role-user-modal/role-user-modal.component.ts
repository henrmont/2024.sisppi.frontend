import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-role-user-modal',
  standalone: true,
  imports: [],
  templateUrl: './role-user-modal.component.html',
  styleUrl: './role-user-modal.component.scss'
})
export class RoleUserModalComponent {

  data = inject(MAT_DIALOG_DATA)

}
