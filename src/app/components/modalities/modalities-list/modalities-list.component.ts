import { Component, OnInit, inject } from '@angular/core';
import { ModalityService } from '../../../services/modality.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modalityChannel = new BroadcastChannel('modality-channel');

@Component({
  selector: 'app-modalities-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './modalities-list.component.html',
  styleUrl: './modalities-list.component.scss'
})
export class ModalitiesListComponent implements OnInit {

  modalityService = inject(ModalityService)

  displayedColumns: string[] = ['name', 'competence'];
  dataSource: any

  ngOnInit(): void {
    modalityChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.modalityService.getModalities().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.modalityService.getModalities().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
