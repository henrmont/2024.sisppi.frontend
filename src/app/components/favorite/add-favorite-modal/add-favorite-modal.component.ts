import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FavoriteService } from '../../../services/favorite.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-add-favorite-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    AsyncPipe,
  ],
  templateUrl: './add-favorite-modal.component.html',
  styleUrl: './add-favorite-modal.component.scss'
})

export class AddFavoriteModalComponent implements OnInit {

  router = inject(Router)
  favoriteService = inject(FavoriteService)
  sharedService = inject(SharedService)
  formBuilder = inject(FormBuilder);
  data = inject(MAT_DIALOG_DATA)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;

  formulario: FormGroup = this.formBuilder.group({
    link_id: [null, Validators.required],
    user_id: [this.data.id, Validators.required],
  });

  ngOnInit(): void {
    this.favoriteService.getLinks().subscribe({
      next: (response: any) => {
        this.options = response.data
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(link => (link ? this._filter(link) : this.options.slice())),
        );
      }
    })

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSelect(id: number) {
    this.formulario.patchValue({
      link_id: id,
    })
  }

  onSubmit() {
    this.favoriteService.createFavorite(this.formulario.value).subscribe({
      next: () => {
        this.sharedService.showMessage('Link adicionado ao favoritos.')
      },
      error: () => {
        this.sharedService.showMessage('Erro no sistema.')
      },
      complete: () => {
        window.location.reload()
      }
    })
  }

}
