import { Component, OnInit, inject } from '@angular/core';
import { FinancingService } from '../../../services/financing.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const financingChannel = new BroadcastChannel('financing-channel');

@Component({
  selector: 'app-financings-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './financings-list.component.html',
  styleUrl: './financings-list.component.scss'
})
export class FinancingsListComponent implements OnInit {

  financingService = inject(FinancingService)

  displayedColumns: string[] = ['name', 'competence'];
  dataSource: any

  ngOnInit(): void {
    financingChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.financingService.getFinancings().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.financingService.getFinancings().subscribe({
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
