import { Component, OnInit, inject } from '@angular/core';
import { ProcedureService } from '../../../services/procedure.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute } from '@angular/router';
import { ReadProcedureModalComponent } from '../read-procedure-modal/read-procedure-modal.component';

const procedureChannel = new BroadcastChannel('procedure-channel');

@Component({
  selector: 'app-procedures-list',
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
  templateUrl: './procedures-list.component.html',
  styleUrl: './procedures-list.component.scss'
})
export class ProceduresListComponent implements OnInit {

  procedureService = inject(ProcedureService)
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['code', 'name', 'financing', 'competence', 'actions'];
  dataSource: any

  ngOnInit(): void {
    procedureChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.procedureService.getProcedures().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.procedureService.getProcedures().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readProcedure(info: any) {
    this.dialog.open(ReadProcedureModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '62%',
      data: {
        info: info
      }
    })
  }

}
