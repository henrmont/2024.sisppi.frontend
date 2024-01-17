import { Component, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CompetenceService } from '../../../services/competence.service';
import { ActivatedRoute } from '@angular/router';
import { DeleteCompetenceModalComponent } from '../delete-competence-modal/delete-competence-modal.component';
import { ValidateCompetenceModalComponent } from '../validate-competence-modal/validate-competence-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

const competenceChannel = new BroadcastChannel('competence-channel');

@Component({
  selector: 'app-competencies-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './competencies-list.component.html',
  styleUrl: './competencies-list.component.scss'
})
export class CompetenciesListComponent implements OnInit {

  dialog = inject(MatDialog)
  competenceService = inject(CompetenceService)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['name', 'actions'];
  dataSource: any

  ngOnInit(): void {
    competenceChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.competenceService.getCompetencies().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.competenceService.getCompetencies().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCompetence(info: any) {
    this.dialog.open(DeleteCompetenceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
      data: {
        info: info
      }
    })
  }

  validateCompetence(info: any) {
    this.dialog.open(ValidateCompetenceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
      data: {
        info: info
      }
    })
  }


}
