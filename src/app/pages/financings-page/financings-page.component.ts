import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { FinancingsListComponent } from '../../components/financings/financings-list/financings-list.component';
import { ModalitiesListComponent } from '../../components/modalities/modalities-list/modalities-list.component';

@Component({
  selector: 'app-financings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    FinancingsListComponent,
    ModalitiesListComponent,
  ],
  templateUrl: './financings-page.component.html',
  styleUrl: './financings-page.component.scss'
})
export class FinancingsPageComponent {

  breadcrumb = [
    {name: 'Financiamentos e modalidades'},
  ]

}
