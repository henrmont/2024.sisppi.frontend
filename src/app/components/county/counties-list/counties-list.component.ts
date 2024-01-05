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
import { AddCountyManagerModalComponent } from '../add-county-manager-modal/add-county-manager-modal.component';
import { ShowCountyModalComponent } from '../show-county-modal/show-county-modal.component';
import { EditCountyModalComponent } from '../edit-county-modal/edit-county-modal.component';
import { DeleteCountyModalComponent } from '../delete-county-modal/delete-county-modal.component';
import { CountyManagerModalComponent } from '../county-manager-modal/county-manager-modal.component';


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

  countyManager(id: number) {
    this.dialog.open(CountyManagerModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        id: id
      }
    })
  }

  showCounty(id: number) {
    this.dialog.open(ShowCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '50%',
      data: {
        id: id
      }
    })
  }

  editCounty(id: number) {
    this.dialog.open(EditCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '55%',
      data: {
        id: id
      }
    })
  }

  deleteCounty(id: number) {
    this.dialog.open(DeleteCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        id: id
      }
    })
  }

}
