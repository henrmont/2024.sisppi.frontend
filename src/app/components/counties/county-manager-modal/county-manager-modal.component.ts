import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountyService } from '../../../services/county.service';
import { MatListModule } from '@angular/material/list';
import { AddCountyManagerModalComponent } from '../add-county-manager-modal/add-county-manager-modal.component';
import { RemoveCountyManagerModalComponent } from '../remove-county-manager-modal/remove-county-manager-modal.component';

@Component({
  selector: 'app-county-manager-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
  ],
  templateUrl: './county-manager-modal.component.html',
  styleUrl: './county-manager-modal.component.scss'
})

export class CountyManagerModalComponent {

  data = inject(MAT_DIALOG_DATA)
  dialog = inject(MatDialog)
  countyService = inject(CountyService)

  addCountyManager() {
    this.dialog.open(AddCountyManagerModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        id: this.data.info.id
      }
    })
  }

  removeCountyManager(info: any) {
    this.dialog.open(RemoveCountyManagerModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

}
