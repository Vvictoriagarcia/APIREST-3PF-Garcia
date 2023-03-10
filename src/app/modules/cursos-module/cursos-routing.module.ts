import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../../guards/admin.guard';
import { SesionGuard } from '../../guards/sesion.guard';
import { AgregarCursoComponent } from '../../routes/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from '../../components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from '../../routes/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [SesionGuard],
    children: [
      { path: 'listar', component: ListaCursosComponent },
      {
        path: 'editar',
        component: EditarCursoComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'agregar',
        component: AgregarCursoComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRountingModule {}
