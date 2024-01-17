import { Component, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubgroupService } from '../../../services/subgroup.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const subgroupChannel = new BroadcastChannel('subgroup-channel');

@Component({
  selector: 'app-subgroups-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './subgroups-list.component.html',
  styleUrl: './subgroups-list.component.scss'
})
export class SubgroupsListComponent implements OnInit {

  subgroupService = inject(SubgroupService)
  displayedColumns: string[] = ['name', 'competence'];
  dataSource: any

  ngOnInit(): void {
    subgroupChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.subgroupService.getSubgroups().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.subgroupService.getSubgroups().subscribe({
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
