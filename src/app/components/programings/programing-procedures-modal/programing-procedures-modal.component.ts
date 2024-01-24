import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProgramingService } from '../../../services/programing.service';
import { AddProgramingProcedureModalComponent } from '../add-programing-procedure-modal/add-programing-procedure-modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { ProgramingProcedureService } from '../../../services/programing-procedure.service';
import { RemoveProgramingProcedureModalComponent } from '../remove-programing-procedure-modal/remove-programing-procedure-modal.component';
import { AmountProgramingProcedureModalComponent } from '../amount-programing-procedure-modal/amount-programing-procedure-modal.component';
import { TypeProgramingProcedureModalComponent } from '../type-programing-procedure-modal/type-programing-procedure-modal.component';
import { MatDividerModule } from '@angular/material/divider';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-programing-procedures-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './programing-procedures-modal.component.html',
  styleUrl: './programing-procedures-modal.component.scss'
})
export class ProgramingProceduresModalComponent {

  data = inject(MAT_DIALOG_DATA)
  programingProcedureService = inject(ProgramingProcedureService)
  dialog = inject(MatDialog)
  totalValueOutpatient:number = 0
  totalValueHospital:number = 0
  totalValue:number = 0

  displayedColumns: string[] = ['competence', 'name', 'value', 'amount', 'partial', 'type', 'actions'];
  dataSource: any

  ngOnInit(): void {
    programingChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.programingProcedureService.getProgramingProcedures(this.data.info.id).subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
            this.totalValueOutpatient = this.totalOutpatient(response.data)
            this.totalValueHospital = this.totalHospital(response.data)
            this.totalValue =  (+this.totalValueOutpatient) + (+this.totalValueHospital)
          }
        })
      }
    }
    this.programingProcedureService.getProgramingProcedures(this.data.info.id).subscribe({
      next: (response: any) => {
        this.dataSource = new MatTableDataSource(response.data)
        this.totalValueOutpatient = this.totalOutpatient(response.data)
        this.totalValueHospital = this.totalHospital(response.data)
        this.totalValue =  (+this.totalValueOutpatient) + (+this.totalValueHospital)
      }
    })
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

  addProgramingProcedure() {
    this.dialog.open(AddProgramingProcedureModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '35%',
      height: 'auto',
      data: {
        id: this.data.info.id
      }
    })
  }

  removeProgramingProcedure(info: any) {
    this.dialog.open(RemoveProgramingProcedureModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '25%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  amountProgramingProcedure(info: any) {
    this.dialog.open(AmountProgramingProcedureModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '20%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

  typeProgramingProcedure(info: any) {
    this.dialog.open(TypeProgramingProcedureModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '20%',
      height: 'auto',
      data: {
        info: info
      }
    })
  }

}
