import { Component, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OrganizationFormService } from '../../../services/organization-form.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

const organizationFormChannel = new BroadcastChannel('organization-form-channel');

@Component({
  selector: 'app-organization-forms-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './organization-forms-list.component.html',
  styleUrl: './organization-forms-list.component.scss'
})
export class OrganizationFormsListComponent implements OnInit {

  organizationFormService = inject(OrganizationFormService)

  displayedColumns: string[] = ['name', 'competence'];
  dataSource: any

  ngOnInit(): void {
    organizationFormChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.organizationFormService.getOrganizationForms().subscribe({
          next: (response: any) => {
            this.dataSource = new MatTableDataSource(response.data)
          }
        })
      }
    }
    this.organizationFormService.getOrganizationForms().subscribe({
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
