import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { CursosRountingModule } from './alumnos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarAlumnoComponent } from 'src/app/routes/agregar-alumno/agregar-alumno.component';
import { ListaAlumnoComponent } from 'src/app/routes/list-alumnos/list-alumnos.component';
import { EditarAlumnoComponent } from '../../components/editar-alumno/editar-alumno.component';
import { NotePipe } from 'src/app/pipes/note.pipe';
import { AlumnoService } from 'src/app/services/alumno.service';
import { StyleDirective } from 'src/app/directives/style.directive';
import { StyleNoteDirective } from 'src/app/directives/style-note.directive';

@NgModule({
  declarations: [
    AgregarAlumnoComponent,
    ListaAlumnoComponent,
    EditarAlumnoComponent,
    NotePipe,
    StyleDirective,
    StyleNoteDirective,
  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AlumnoService],
})
export class AlumnosModule {}
