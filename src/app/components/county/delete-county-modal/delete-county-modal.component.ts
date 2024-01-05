import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountyService } from '../../../services/county.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-delete-county-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-county-modal.component.html',
  styleUrl: './delete-county-modal.component.scss'
})
export class DeleteCountyModalComponent implements OnInit {

  county: any

  data = inject(MAT_DIALOG_DATA)
  countyService = inject(CountyService)
  sharedService = inject(SharedService)

  ngOnInit(): void {
    this.countyService.getCounty(this.data.id).subscribe({
      next: (response: any) => {
        this.county = response.data
      }
    })
  }

  onSubmit() {

  }

}
