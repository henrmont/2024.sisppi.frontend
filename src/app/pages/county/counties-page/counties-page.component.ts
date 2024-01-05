import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../../components/shared/breadcrumb/breadcrumb.component';
import { AddCountyModalComponent } from '../../../components/county/add-county-modal/add-county-modal.component';
import { CountiesListComponent } from '../../../components/county/counties-list/counties-list.component';

@Component({
  selector: 'app-counties-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    AddCountyModalComponent,
    CountiesListComponent,
  ],
  templateUrl: './counties-page.component.html',
  styleUrl: './counties-page.component.scss'
})
export class CountiesPageComponent {

  dialog = inject(MatDialog)

  breadcrumb = [
    {name: 'Municípios'},
    {name: 'Lista de municípios'}
  ]

  addCounty() {
    this.dialog.open(AddCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '55%',
    })
  }

}
