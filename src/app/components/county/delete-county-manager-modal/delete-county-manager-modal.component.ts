import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-delete-county-manager-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  templateUrl: './delete-county-manager-modal.component.html',
  styleUrl: './delete-county-manager-modal.component.scss'
})
export class DeleteCountyManagerModalComponent implements OnInit {

  user: any

  data = inject(MAT_DIALOG_DATA)
  userService = inject(UserService)
  sharedService = inject(SharedService)

  ngOnInit(): void {
    this.userService.getUser(this.data.id).subscribe({
      next: (response: any) => {
        this.user = response.data
      }
    })
  }

  onSubmit() {

  }

}
