import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateProfileModalComponent } from '../../components/settings/update-profile-modal/update-profile-modal.component';
import { ChangePasswordModalComponent } from '../../components/settings/change-password-modal/change-password-modal.component';
import { ChangeImageProfileModalComponent } from '../../components/settings/change-image-profile-modal/change-image-profile-modal.component';
import { NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    BookmarkComponent,
    NgxMaskPipe,
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss'
})
export class SettingsPageComponent {

  route = inject(ActivatedRoute)
  dialog = inject(MatDialog)

  updateProfile(info: any) {
    this.dialog.open(UpdateProfileModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  changePassword(info: any) {
    this.dialog.open(ChangePasswordModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  event!: any

  onFileSelected(event: any) {
    this.event = event;
    this.changeImageProfile(this.route.snapshot.data['auth'])
  }

  changeImageProfile(info: any) {
    this.dialog.open(ChangeImageProfileModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info,
        event: this.event
      }
    })
  }

}
