import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsersListComponent } from '../../components/users/users-list/users-list.component';
import { CreateUserModalComponent } from '../../components/users/create-user-modal/create-user-modal.component';
import { ActivatedRoute } from '@angular/router';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    UsersListComponent,
    BookmarkComponent,
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent {

  route = inject(ActivatedRoute)
  dialog = inject(MatDialog)

  createUser() {
    this.dialog.open(CreateUserModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '45%',
      height: 'auto',
    })
  }

}
