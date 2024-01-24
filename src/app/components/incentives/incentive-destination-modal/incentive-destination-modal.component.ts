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
import { IncentiveDestinationService } from '../../../services/incentive-destination.service';
import { AddIncentiveDestinationModalComponent } from '../add-incentive-destination-modal/add-incentive-destination-modal.component';
import { RemoveIncentiveDestinationModalComponent } from '../remove-incentive-destination-modal/remove-incentive-destination-modal.component';
import { ValueIncentiveDestinationModalComponent } from '../value-incentive-destination-modal/value-incentive-destination-modal.component';

const incentiveChannel = new BroadcastChannel('incentive-channel');

@Component({
  selector: 'app-incentive-destination-modal',
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
  templateUrl: './incentive-destination-modal.component.html',
  styleUrl: './incentive-destination-modal.component.scss'
})
export class IncentiveDestinationModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  incentiveDestinationService = inject(IncentiveDestinationService)
  dialog = inject(MatDialog)
  valueAllocated:number = 0

  displayedColumns: string[] = ['county', 'value', 'actions'];
  dataSource: any

  ngOnInit(): void {
    incentiveChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.incentiveDestinationService.getIncentiveDestinations(this.data.info.id).subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
            this.valueAllocated = this.totalValueAllocated(response.data)
          }
        })
      }
    }
    this.incentiveDestinationService.getIncentiveDestinations(this.data.info.id).subscribe({
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

  addIncentiveDestination() {
    this.dialog.open(AddIncentiveDestinationModalComponent, {
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

  removeIncentiveDestination(info: any) {
    this.dialog.open(RemoveIncentiveDestinationModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  valueIncentiveDestination(info: any) {
    this.dialog.open(ValueIncentiveDestinationModalComponent, {
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
