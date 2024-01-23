import { Component, OnInit, inject } from '@angular/core';
import { MinisterialOrdinaceService } from '../../../services/ministerial-ordinace.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MinisterialOrdinaceDestinationModalComponent } from '../ministerial-ordinace-destination-modal/ministerial-ordinace-destination-modal.component';
import { UpdateMinisterialOrdinaceModalComponent } from '../update-ministerial-ordinace-modal/update-ministerial-ordinace-modal.component';
import { ValidateMinisterialOrdinaceModalComponent } from '../validate-ministerial-ordinace-modal/validate-ministerial-ordinace-modal.component';
import { DeleteMinisterialOrdinaceModalComponent } from '../delete-ministerial-ordinace-modal/delete-ministerial-ordinace-modal.component';
import { AttachMinisterialOrdinaceModalComponent } from '../attach-ministerial-ordinace-modal/attach-ministerial-ordinace-modal.component';

const ministerialOrdinaceChannel = new BroadcastChannel('ministerial-ordinace-channel');

@Component({
  selector: 'app-ministerial-ordinaces-list',
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
  templateUrl: './ministerial-ordinaces-list.component.html',
  styleUrl: './ministerial-ordinaces-list.component.scss'
})
export class MinisterialOrdinacesListComponent implements OnInit {

  ministerialOrdinaceService = inject(MinisterialOrdinaceService)
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['year', 'competence', 'name', 'value', 'type', 'is_valid', 'actions'];
  dataSource: any

  ngOnInit(): void {
    ministerialOrdinaceChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.ministerialOrdinaceService.getMinisterialOrdinaces().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.ministerialOrdinaceService.getMinisterialOrdinaces().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ministerialOrdinaceDestination(info: any) {
    this.dialog.open(MinisterialOrdinaceDestinationModalComponent, {
      // disableClose: true,
      autoFocus: false,
      width: '80%',
      height: 'auto',
      data: {
        info: info,
        role: this.route.snapshot.data['role']
      }
    })
  }

  updateMinisterialOrdinace(info: any) {
    this.dialog.open(UpdateMinisterialOrdinaceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  validateMinisterialOrdinace(info: any) {
    this.dialog.open(ValidateMinisterialOrdinaceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  deleteMinisterialOrdinace(info: any) {
    this.dialog.open(DeleteMinisterialOrdinaceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

  attachMinisterialOrdinace(info: any) {
    this.dialog.open(AttachMinisterialOrdinaceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info,
      }
    })
  }

}
