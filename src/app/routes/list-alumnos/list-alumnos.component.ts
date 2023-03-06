import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/services/sesion.service';
import { EditarAlumnoComponent } from '../../components/editar-alumno/editar-alumno.component';
@Component({
  selector: 'app-list',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css'],
})
export class ListaAlumnoComponent {
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarAlumno(alumno: Alumno) {
    this.alumnoService.eliminarAlumno(alumno).subscribe((alumno: Alumno) => {
      alert(`${alumno.nombre} eliminado`);
      this.alumnos$ = this.alumnoService.obtenerAlumnos();
    });
  }

  abrirDialog(alumno: Alumno) {
    this.dialog
      .open(EditarAlumnoComponent, {
        data: alumno,
      })
      .afterClosed()
      .subscribe((alumno: Alumno) => {
        alert(`${alumno.nombre} editado satisfactoriamente`);
        this.alumnos$ = this.alumnoService.obtenerAlumnos();
      });
  }
}
