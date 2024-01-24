import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IncentiveService } from '../../../services/incentive.service';
import { ActivatedRoute } from '@angular/router';
import { IncentiveDestinationModalComponent } from '../incentive-destination-modal/incentive-destination-modal.component';
import { UpdateIncentiveModalComponent } from '../update-incentive-modal/update-incentive-modal.component';
import { ValidateIncentiveModalComponent } from '../validate-incentive-modal/validate-incentive-modal.component';
import { DeleteIncentiveModalComponent } from '../delete-incentive-modal/delete-incentive-modal.component';
import { AttachIncentiveModalComponent } from '../attach-incentive-modal/attach-incentive-modal.component';

const incentiveChannel = new BroadcastChannel('incentive-channel');

@Component({
  selector: 'app-incentives-list',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  templateUrl: './incentives-list.component.html',
  styleUrl: './incentives-list.component.scss'
})
export class IncentivesListComponent implements OnInit {

  incentiveService = inject(IncentiveService)
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['year', 'competence', 'name', 'value', 'type', 'is_valid', 'actions'];
  dataSource: any

  ngOnInit(): void {
    incentiveChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.incentiveService.getIncentives().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.incentiveService.getIncentives().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 incentiveDestination(info: any) {
    this.dialog.open(IncentiveDestinationModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '50%',
      height: 'auto',
      data: {
        info: info,
        role: this.route.snapshot.data['role']
      }
    })
  }

  updateIncentive(info: any) {
    this.dialog.open(UpdateIncentiveModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  validateIncentive(info: any) {
    this.dialog.open(ValidateIncentiveModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  deleteIncentive(info: any) {
    this.dialog.open(DeleteIncentiveModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  attachIncentive(info: any) {
    this.dialog.open(AttachIncentiveModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

}
