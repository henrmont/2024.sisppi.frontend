import { Component, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GroupService } from '../../../services/group.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const groupChannel = new BroadcastChannel('group-channel');

@Component({
  selector: 'app-groups-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './groups-list.component.html',
  styleUrl: './groups-list.component.scss'
})
export class GroupsListComponent implements OnInit {

  groupService = inject(GroupService)
  displayedColumns: string[] = ['name', 'competence'];
  dataSource: any


  ngOnInit(): void {
    groupChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.groupService.getGroups().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.groupService.getGroups().subscribe({
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
