import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MinisterialOrdinaceDestinationService } from '../../../services/ministerial-ordinace-destination.service';
import { AddMinisterialOrdinaceDestinationModalComponent } from '../add-ministerial-ordinace-destination-modal/add-ministerial-ordinace-destination-modal.component';
import { RemoveMinisterialOrdinaceDestinationModalComponent } from '../remove-ministerial-ordinace-destination-modal/remove-ministerial-ordinace-destination-modal.component';
import { ValueMinisterialOrdinaceDestinationModalComponent } from '../value-ministerial-ordinace-destination-modal/value-ministerial-ordinace-destination-modal.component';

const ministerialOrdinaceChannel = new BroadcastChannel('ministerial-ordinace-channel');

@Component({
  selector: 'app-ministerial-ordinace-destination-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './ministerial-ordinace-destination-modal.component.html',
  styleUrl: './ministerial-ordinace-destination-modal.component.scss'
})
export class MinisterialOrdinaceDestinationModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  ministerialOrdinaceDestinationService = inject(MinisterialOrdinaceDestinationService)
  dialog = inject(MatDialog)
  valueAllocated:number = 0

  displayedColumns: string[] = ['county', 'value', 'actions'];
  dataSource: any

  ngOnInit(): void {
    ministerialOrdinaceChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.ministerialOrdinaceDestinationService.getMinisterialOrdinaceDestinations(this.data.info.id).subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
            this.valueAllocated = this.totalValueAllocated(response.data)
          }
        })
      }
    }
    this.ministerialOrdinaceDestinationService.getMinisterialOrdinaceDestinations(this.data.info.id).subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
        this.valueAllocated = this.totalValueAllocated(response.data)
      }
    })
  }

  totalValueAllocated(data: any): number {
    let total:number = 0
    data.forEach((item:any) => {
      total += (+item.value)
    });
    return total
  }

  addMinisterialOrdinaceDestination() {
    this.dialog.open(AddMinisterialOrdinaceDestinationModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        id: this.data.info.id,
        balance: (+this.data.info.value) - ((+this.valueAllocated))
      }
    })
  }

  removeMinisterialOrdinaceDestination(info: any) {
    this.dialog.open(RemoveMinisterialOrdinaceDestinationModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  valueMinisterialOrdinaceDestination(info: any) {
    this.dialog.open(ValueMinisterialOrdinaceDestinationModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '20%',
      height: 'auto',
      data: {
        info: info,
        balance: (+this.data.info.value) - ((+this.valueAllocated)) + (+info.value)
      }
    })
  }

}
