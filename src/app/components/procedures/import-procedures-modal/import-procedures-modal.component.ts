import { Component, inject } from '@angular/core';
import { ProcedureService } from '../../../services/procedure.service';
import { SharedService } from '../../../services/shared.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule, ProgressBarMode } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

const groupChannel = new BroadcastChannel('group-channel');
const subgroupChannel = new BroadcastChannel('subgroup-channel');
const organizationFormChannel = new BroadcastChannel('organization-form-channel');
const financingChannel = new BroadcastChannel('financing-channel');
const modalityChannel = new BroadcastChannel('modality-channel');
const notificationChannel = new BroadcastChannel('notification-channel');
const procedureChannel = new BroadcastChannel('procedure-channel');

@Component({
  selector: 'app-import-procedures-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatProgressBarModule,
  ],
  templateUrl: './import-procedures-modal.component.html',
  styleUrl: './import-procedures-modal.component.scss'
})
export class ImportProceduresModalComponent {

  procedureService = inject(ProcedureService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)
  router = inject(Router)

  file!:File
  fileName = 'Nenhum arquivo anexado.';
  isAttach: boolean = true
  btnAttach: boolean = false
  progressType: ProgressBarMode = 'determinate'

  disableProc() {
    this.isAttach = true
    this.btnAttach = true
    this.progressType = 'indeterminate'
  }

  onSubmit() {
    this.procedureService.importProcedures(this.file).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        groupChannel.postMessage('update')
        subgroupChannel.postMessage('update')
        organizationFormChannel.postMessage('update')
        financingChannel.postMessage('update')
        modalityChannel.postMessage('update')
        notificationChannel.postMessage('update')
        procedureChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.closeAll()
        this.router.navigate(['/anos/de/exercicio'])
      }
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0 && event.target.files[0].type == 'application/x-zip-compressed') {
      this.file = event.target.files[0];
      this.fileName = event.target.files[0].name;
      this.isAttach = false
    }
  }

}
