import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { CountiesListComponent } from '../../components/counties/counties-list/counties-list.component';
import { CreateCountyModalComponent } from '../../components/counties/create-county-modal/create-county-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counties-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    CountiesListComponent,
  ],
  templateUrl: './counties-page.component.html',
  styleUrl: './counties-page.component.scss'
})
export class CountiesPageComponent {

  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  breadcrumb = [
    {name: 'Municípios'},
    {name: 'Lista de municípios'}
  ]

  createCounty() {
    this.dialog.open(CreateCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: '55%',
    })
  }

}
