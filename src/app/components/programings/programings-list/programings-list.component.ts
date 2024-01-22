import { Component, OnInit, inject } from '@angular/core';
import { ProgramingService } from '../../../services/programing.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProgramingProceduresModalComponent } from '../programing-procedures-modal/programing-procedures-modal.component';
import { UpdateProgramingModalComponent } from '../update-programing-modal/update-programing-modal.component';
import { DeleteProgramingModalComponent } from '../delete-programing-modal/delete-programing-modal.component';
import { ValidateProgramingModalComponent } from '../validate-programing-modal/validate-programing-modal.component';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-programings-list',
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
  templateUrl: './programings-list.component.html',
  styleUrl: './programings-list.component.scss'
})
export class ProgramingsListComponent implements OnInit {

  programingService = inject(ProgramingService)
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  displayedColumns: string[] = ['year', 'name', 'county', 'total', 'is_valid', 'actions'];
  dataSource: any

  ngOnInit(): void {
    programingChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.programingService.getProgramings().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.programingService.getProgramings().subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  totalOutpatient(data: any): number {
    let total:number = 0
    data.forEach((item:any) => {
      if (item.type && item.type == 'AMBULATORIAL')  {
        total += ((+item.procedure.outpatient_procedure_value)*(+item.amount))
      }
    });
    return total
  }

  totalHospital(data: any): number {
    let total:number = 0
    data.forEach((item:any) => {
      if (item.type == 'HOSPITALAR')  {
        total += (((+item.procedure.hospital_procedure_value)+(+item.procedure.profissional_procedure_value))*(+item.amount))
      }
    });
    return total
  }

  programingProcedures(info: any) {
    this.dialog.open(ProgramingProceduresModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '80%',
      height: 'auto',
      data: {
        info: info,
        role: this.route.snapshot.data['role']
      }
    })
  }

  updatePrograming(info: any) {
    this.dialog.open(UpdateProgramingModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  deletePrograming(info: any) {
    this.dialog.open(DeleteProgramingModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  validatePrograming(info: any) {
    this.dialog.open(ValidateProgramingModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

}
