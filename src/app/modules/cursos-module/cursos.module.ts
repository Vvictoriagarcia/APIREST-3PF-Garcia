import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from '../../routes/agregar-curso/agregar-curso.component';
import { ListaCursosComponent } from '../../routes/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from 'src/app/components/editar-curso/editar-curso.component';
import { CursosRountingModule } from './cursos-routing.module';
import { CursosService } from '../../services/cursos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AgregarCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,
  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [CursosService],
})
export class CursosModule {}
