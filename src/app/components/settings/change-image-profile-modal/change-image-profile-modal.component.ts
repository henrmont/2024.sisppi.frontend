import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImageCroppedEvent, ImageCropperModule, LoadedImage } from 'ngx-image-cropper';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-image-profile-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    ImageCropperModule,
  ],
  templateUrl: './change-image-profile-modal.component.html',
  styleUrl: './change-image-profile-modal.component.scss'
})
export class ChangeImageProfileModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)
  router = inject(Router)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    image: [null, Validators.required],
  });

  imageChangedEvent: any = this.data.event;
  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64
    this.formulario.patchValue({
      image: this.croppedImage
    })
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }
  onSubmit() {
    this.userService.changeImageProfile(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.closeAll()
        this.router.navigate(['/'])
      }
    })
  }

}
