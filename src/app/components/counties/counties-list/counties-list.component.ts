import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CountyService } from '../../../services/county.service';
import { MatBadgeModule } from '@angular/material/badge';
import { CountyManagerModalComponent } from '../county-manager-modal/county-manager-modal.component';
import { ReadCountyModalComponent } from '../read-county-modal/read-county-modal.component';
import { UpdateCountyModalComponent } from '../update-county-modal/update-county-modal.component';
import { DeleteCountyModalComponent } from '../delete-county-modal/delete-county-modal.component';

const listCountyChannel = new BroadcastChannel('list-county-channel');

@Component({
  selector: 'app-counties-list',
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
    MatBadgeModule,
  ],
  templateUrl: './counties-list.component.html',
  styleUrl: './counties-list.component.scss'
})

export class CountiesListComponent implements OnInit {

  countyService = inject(CountyService)
  dialog = inject(MatDialog)

  displayedColumns: string[] = ['ibge', 'name', 'health', 'managers', 'actions'];
  dataSource: any

  ngOnInit(): void {
    listCountyChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.countyService.getCounties().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.countyService.getCounties().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  countyManager(info: any) {
    this.dialog.open(CountyManagerModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  readCounty(info: any) {
    this.dialog.open(ReadCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '50%',
      data: {
        info: info
      }
    })
  }

  updateCounty(info: any) {
    this.dialog.open(UpdateCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '55%',
      data: {
        info: info
      }
    })
  }

  deleteCounty(info: any) {
    this.dialog.open(DeleteCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        info: info
      }
    })
  }



}
