import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreateExerciseYearsModalComponent } from '../../components/exercise-years/create-exercise-years-modal/create-exercise-years-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseYearsListComponent } from '../../components/exercise-years/exercise-years-list/exercise-years-list.component';
import { CompetenciesListComponent } from '../../components/competencies/competencies-list/competencies-list.component';

@Component({
  selector: 'app-exercise-years-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BreadcrumbComponent,
    ExerciseYearsListComponent,
    CompetenciesListComponent,
  ],
  templateUrl: './exercise-years-page.component.html',
  styleUrl: './exercise-years-page.component.scss'
})
export class ExerciseYearsPageComponent {

  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  breadcrumb = [
    {name: 'Anos de exercício e competências'},
  ]

  createExeciseYear() {
    this.dialog.open(CreateExerciseYearsModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
    })
  }

}
