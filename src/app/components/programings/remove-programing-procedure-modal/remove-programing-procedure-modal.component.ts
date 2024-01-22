import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgramingProcedureService } from '../../../services/programing-procedure.service';
import { SharedService } from '../../../services/shared.service';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-remove-programing-procedure-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './remove-programing-procedure-modal.component.html',
  styleUrl: './remove-programing-procedure-modal.component.scss'
})
export class RemoveProgramingProcedureModalComponent {

  data = inject(MAT_DIALOG_DATA)
  programingProcedureService = inject(ProgramingProcedureService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<RemoveProgramingProcedureModalComponent>)

  onSubmit() {
    this.programingProcedureService.removeProgramingProcedure(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        programingChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.close()
      }
    })
  }

}
