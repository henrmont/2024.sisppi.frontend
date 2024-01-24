import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncentiveService } from '../../../services/incentive.service';
import { SharedService } from '../../../services/shared.service';
import { saveAs } from 'file-saver';

const incentiveChannel = new BroadcastChannel('incentive-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-attach-incentive-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './attach-incentive-modal.component.html',
  styleUrl: './attach-incentive-modal.component.scss'
})
export class AttachIncentiveModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  incentiveService = inject(IncentiveService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  file!:File
  isAttach: boolean = true

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    file: [this.data.info.file, Validators.required],
  });

  onSubmit() {
    this.incentiveService.attachIncentive(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        incentiveChannel.postMessage('update')
        notificationChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0 && event.target.files[0].type == 'application/pdf') {
      if (event.target.files[0].size < 10e+6) {
        const file = event.target.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result as string;

          this.formulario.patchValue({
            file: base64String,
          })
          this.isAttach = false
        }

        reader.readAsDataURL(file)
      } else {
        this.sharedService.showMessage('Tamanho maximo do arquivo deve ser 10mb')
      }
    }
  }

  fileSave(url: any, filename: string) {
    saveAs(url,filename+'.pdf')
  }

}
